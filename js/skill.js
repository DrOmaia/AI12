/* Skill Builder: validates and generates SKILL.md (Agent Skills format) or custom-instructions text. */
(function () {
  const $ = id => document.getElementById(id);
  const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  const WHEN_RE = /\b(use (this )?(skill )?(when|for|if|whenever)|use it (when|for|if)|when (the user|i|you|asked|someone)|when asked|whenever|if (the user|i) (asks?|wants?|needs?)|trigger)/i;
  const RED_LINES = [
    "Never handle student personal data (names, ID numbers, grades, contact details). Ask me to remove it first.",
    "Never assign or suggest a grade or mark.",
    "Never send, post or submit anything. Produce drafts only.",
    "Never invent facts, quotations or references. Say \"I could not verify this\" instead.",
    "Always flag uncertainty and list what I should check.",
    "All output is a draft for my review before use. Remind me to disclose AI use where my university policy requires it.",
  ].join("\n");
  let view = "skill";

  const v = id => $(id).value.trim();

  function nameProblem(n) {
    if (!n) return "Enter a name.";
    if (n.length > 64) return "Too long: " + n.length + " characters (maximum 64).";
    if (/[A-Z]/.test(n)) return "Use lowercase letters only.";
    if (/\s/.test(n)) return "No spaces: use hyphens instead.";
    if (/[^a-z0-9-]/.test(n)) return "Only lowercase letters, digits and hyphens are allowed.";
    if (n.startsWith("-")) return "The name cannot start with a hyphen.";
    if (n.endsWith("-")) return "The name cannot end with a hyphen.";
    if (/--/.test(n)) return "No two hyphens in a row.";
    return NAME_RE.test(n) ? "" : "Invalid name.";
  }

  function descProblems(d) {
    const p = [];
    if (!d) return ["Write a description."];
    if (d.length > 1024) p.push("Too long: " + d.length + " characters (maximum 1024).");
    if (!WHEN_RE.test(d)) p.push("Say WHEN to use it, for example: \"Use when I ask for...\".");
    return p;
  }

  function descAdvice(d) {
    const a = [];
    if (d && /[<>]/.test(d)) a.push("Recommended: avoid angle brackets < > in the description.");
    if (d && d.length < 40) a.push("Recommended: write at least about 40 characters so it says what the skill does and when to use it.");
    return a;
  }

  function yamlStr(s) { return '"' + s.replace(/\s+/g, " ").replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'; }

  function stepsText(t) {
    const lines = t.split(/\n/).map(l => l.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "").trim()).filter(Boolean);
    return lines.map((l, i) => (i + 1) + ". " + l).join("\n");
  }

  function sections() {
    const out = [];
    const add = (h, body) => { if (body) out.push([h, body]); };
    add("Purpose", v("s-purpose"));
    add("Steps", stepsText($("s-steps").value));
    add("Output format", v("s-format"));
    add("Boundaries", $("s-bounds").value.trim().split(/\n/).map(l => l.trim()).filter(Boolean).map(l => /^[-*]\s/.test(l) ? l : "- " + l).join("\n"));
    add("Examples", v("s-ex"));
    return out;
  }

  function skillMd() {
    const n = v("s-name"), d = v("s-desc");
    let t = "---\nname: " + (n || "your-skill-name") + "\ndescription: " + yamlStr(d || "What it does. Use when ...") + "\n---\n\n# " + (n || "your-skill-name") + "\n";
    sections().forEach(([h, b]) => { t += "\n## " + h + "\n\n" + b + "\n"; });
    return t;
  }

  function customInstr() {
    const n = v("s-name"), d = v("s-desc");
    let t = "SKILL: " + (n || "your-skill-name") + "\nDescription: " + (d || "[describe when to use it]") + "\n";
    sections().forEach(([h, b]) => { t += "\n" + h.toUpperCase() + "\n" + b + "\n"; });
    return t;
  }

  function msg(el, ok, text) { el.textContent = text; el.className = "msg " + (ok ? "good" : "bad"); }

  function update() {
    const n = v("s-name"), d = v("s-desc");
    const np = nameProblem(n);
    msg($("m-name"), !np && !!n, np ? np : "Valid. Save the file inside a folder named " + n + ".");
    if (!n) $("m-name").textContent = "";
    const dp = descProblems(d);
    $("c-desc").textContent = d.length + " / 1024";
    $("c-desc").className = "count" + (d.length > 1024 ? " bad" : "");
    if (!d) $("m-desc").textContent = "";
    else msg($("m-desc"), !dp.length, (dp.length ? dp.join(" ") : "Good: it says what the skill does and when to use it.") + (descAdvice(d).length ? " " + descAdvice(d).join(" ") : ""));

    const valid = !np && !!n && !dp.length;
    const text = view === "skill" ? skillMd() : customInstr();
    $("out").textContent = text;
    $("tab-skill").setAttribute("aria-pressed", view === "skill");
    $("tab-ci").setAttribute("aria-pressed", view === "ci");
    $("viewNote").textContent = view === "skill"
      ? "For tools that support skills. Save as " + (n && !np ? n : "[skill-name]") + "/SKILL.md."
      : "For tools without skills: paste into a Project, Gem or custom-instructions box, or at the start of a chat.";
    $("dlBtn").style.display = view === "skill" ? "" : "none";
    $("dlBtn").disabled = !valid;
    $("dlNote").textContent = view === "skill" && !valid ? "Fix the name and description to enable the download." : "";
  }

  $("copyBtn").onclick = () => AI12.copy(view === "skill" ? skillMd() : customInstr());
  $("dlBtn").onclick = () => {
    if ($("dlBtn").disabled) return;
    AI12.download("SKILL.md", skillMd(), "text/markdown;charset=utf-8");
    AI12.toast("Downloaded SKILL.md. Put it in a folder named " + v("s-name") + ".");
  };
  $("tab-skill").onclick = () => { view = "skill"; update(); };
  $("tab-ci").onclick = () => { view = "ci"; update(); };
  $("addRed").onclick = () => { const b = $("s-bounds"); b.value = (b.value.trim() ? b.value.trim() + "\n" : "") + RED_LINES; update(); };
  ["s-name", "s-desc", "s-purpose", "s-steps", "s-format", "s-bounds", "s-ex"].forEach(id => $(id).addEventListener("input", update));
  $("clearAll").onclick = () => { ["s-name", "s-desc", "s-purpose", "s-steps", "s-format", "s-bounds", "s-ex"].forEach(id => { $(id).value = ""; }); update(); };
  $("loadEx").onclick = () => {
    $("s-name").value = "feedback-drafter";
    $("s-desc").value = "Drafts written feedback on a student's anonymised assignment using my rubric and my feedback style. Use when I paste an anonymised assignment extract and ask for feedback comments.";
    $("s-purpose").value = "Save me time on first-draft feedback while keeping my voice. I will review and edit every comment before it reaches a student.";
    $("s-steps").value = "Read the rubric criteria I provide: [rubric]\nMatch the extract to each criterion and note evidence.\nDraft one strength and one improvement per criterion in my feedback style: [voice profile].\nList anything you are unsure about for me to check.";
    $("s-format").value = "A table with columns: criterion, evidence, comment. Then a three-sentence summary in a warm, direct tone.";
    $("s-bounds").value = "";
    $("s-ex").value = "";
    $("addRed").click();
  };
  update();
})();
