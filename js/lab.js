/* Prompt Lab: builds a prompt from parts and runs a live quality checklist. */
(function () {
  const esc = AI12.esc;
  const $ = id => document.getElementById(id);
  const FIELDS = [
    ["role", "Role"], ["context", "Context"], ["task", "Task"],
    ["constraints", "Constraints"], ["format", "Format"], ["examples", "Examples"],
  ];
  const VAGUE = ["good", "better", "best", "nice", "great", "interesting", "appropriate", "suitable", "some", "stuff", "things", "etc"];
  const VAGUE_RE = "\\b(?:" + VAGUE.join("|") + ")\\b";
  const VERBS = ["write", "draft", "create", "summarise", "summarize", "compare", "rewrite", "list", "explain", "design", "generate", "analyse", "analyze", "outline", "review", "revise", "translate", "classify", "extract", "suggest", "plan", "build", "check", "produce", "turn", "convert", "identify", "evaluate", "give", "make", "propose", "prepare", "edit", "simplify", "map", "align"];
  const AUDIENCE_RE = /\b(audience|students?|undergraduates?|postgraduates?|graduates?|learners?|faculty|colleagues?|committee|reviewers?|readers?|examiners?|reviewer|first-year|second-year|level \d|year \d|beginners?|experts?|department|programme|program|class|cohort)\b/i;
  const FORMAT_RE = /\b(table|bullets?|bulleted|numbered|list|steps?|paragraphs?|words?|sentences?|json|csv|headings?|sections?|columns?|rubric|checklist|email|memo|slides?|outline|one page|two pages|markdown)\b/i;

  function value(k) { return $("f-" + k).value.trim(); }

  function build() {
    const parts = [];
    FIELDS.forEach(([k, label]) => { const v = value(k); if (v) parts.push(label + ": " + v); });
    return parts.join("\n\n");
  }

  function checks() {
    const all = build(), task = value("task");
    const words = all ? all.split(/\s+/).length : 0;
    const taskVerb = VERBS.some(v => new RegExp("\\b" + v + "\\b", "i").test(task));
    const vague = all.match(new RegExp(VAGUE_RE, "gi")) || [];
    const constraintWords = value("constraints").split(/\s+/).filter(Boolean).length;
    return [
      { ok: taskVerb, label: "Has a clear action verb", hint: "Start the Task with a verb such as draft, compare or summarise." },
      { ok: AUDIENCE_RE.test(value("context") + " " + task + " " + value("role")), label: "Names the audience", hint: "Say who will read or use the result: first-year students, a department committee, colleagues." },
      { ok: value("format").length > 0 && FORMAT_RE.test(value("format") + " " + task), label: "States an output format", hint: "Say what shape you want: a table, five bullets, 150 words." },
      { ok: constraintWords >= 3, label: "Sets at least one constraint", hint: "Add a limit or rule: length, tone, what to avoid, or what to do when unsure." },
      { ok: all.length > 0 && vague.length === 0, label: "No vague words", hint: vague.length ? "Replace: " + [...new Set(vague.map(v => v.toLowerCase()))].join(", ") + ". Say what you mean in measurable terms." : "Write something first." },
      { ok: words >= 25 && words <= 700, label: "Sensible length (25 to 700 words)", hint: words < 25 ? "Too short: add context and constraints (" + words + " words now)." : words > 700 ? "Very long: trim to what the AI really needs (" + words + " words)." : "Add some detail." },
    ];
  }

  function preview(text) {
    const re = new RegExp("\\[[^\\]\\n]{1,80}\\]|" + VAGUE_RE, "gi");
    return esc(text).replace(re, m => m.charAt(0) === "[" ? '<span class="ph">' + m + "</span>" : '<span class="vague">' + m + "</span>");
  }

  function update() {
    const text = build(), res = checks();
    $("chk").innerHTML = res.map(r => `<li class="${r.ok ? "pass" : "fail"}"><span class="mk" aria-hidden="true">${r.ok ? "✓" : "✗"}</span><span><span class="sr-only" style="position:absolute;left:-9999px">${r.ok ? "Pass: " : "To fix: "}</span>${esc(r.label)}${r.ok ? "" : `<br><span class="why">${esc(r.hint)}</span>`}</span></li>`).join("");
    const n = res.filter(r => r.ok).length;
    $("score").textContent = n + " of " + res.length + " checks passed." + (n === res.length ? " Strong prompt. Now run it and check the output." : "");
    $("pv").innerHTML = text ? preview(text) : '<span style="opacity:.6">Your prompt will appear here as you type.</span>';
    $("copyBtn").disabled = !text;
  }

  // Action buttons
  $("copyBtn").onclick = () => { const t = build(); if (t) AI12.copy(t); };
  UI.TOOLS.forEach(t => {
    const a = document.createElement("a");
    a.className = "btn btn-soft"; a.href = t.url; a.target = "_blank"; a.rel = "noopener";
    a.textContent = "Open in " + t.name + " ↗";
    a.title = "Copies the prompt, then opens " + t.name;
    a.addEventListener("click", () => { const x = build(); if (x) AI12.copy(x); });
    $("actions").appendChild(a);
  });

  FIELDS.forEach(([k]) => $("f-" + k).addEventListener("input", update));

  $("clearAll").onclick = () => { FIELDS.forEach(([k]) => { $("f-" + k).value = ""; }); update(); };
  $("loadEx").onclick = () => {
    const ex = {
      role: "You are an experienced curriculum designer at a Saudi university.",
      context: "I teach [course name and level] to [number] undergraduate students in [discipline]. The course specification follows ETEC-NCAAA practice. Students are in their [year] year and have not yet studied [prerequisite topic].",
      task: "Draft three measurable course learning outcomes (CLOs) for the unit on [topic], one for each of knowledge, skills, and values.",
      constraints: "Begin each CLO with an action verb. Keep each under 25 words. Do not invent standards or references. If something is unclear, ask me one question before you write.",
      format: "A numbered list of three CLOs, each followed by one line saying how it could be assessed.",
      examples: "Example CLO: Explain the main stages of [process] using correct terminology.",
    };
    FIELDS.forEach(([k]) => { $("f-" + k).value = ex[k] || ""; });
    update();
  };
  update();
})();
