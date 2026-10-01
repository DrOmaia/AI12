/* AI12 glossary data and behaviour. [term, plain definition, why it matters to you] */
(function () {
  const G = [
    ["Agent", "An AI system made of a model, instructions, tools and a loop that plans and acts step by step toward a goal.", "Your twin is a small, controlled agent. You decide how much it may do on its own."],
    ["AI Assessment Scale", "A framework by Perkins, Furze, Roe and MacVaugh with five levels that describe how much AI an assessment task allows: No AI, AI Planning, AI Collaboration, Full AI and AI Exploration.", "It gives you shared words to tell students exactly what AI use is allowed in each task."],
    ["Autonomy level", "How much an AI may do without asking. In this course: L1 drafts only, L2 drafts and you approve, L3 acts alone on low-risk tasks.", "Your twin stays at L1 or L2. Choosing the level on purpose is your main safety control."],
    ["CLO (course learning outcome)", "A statement of what a student should know or be able to do by the end of a course.", "Feeding your CLOs to the AI keeps lesson plans, activities and assessments aligned with your course specification."],
    ["Context window", "The amount of text a model can consider at one time, including your prompt, files and its own reply.", "If a long conversation or document exceeds it, the model may forget earlier parts. Start fresh chats for new tasks."],
    ["Custom instructions", "Standing instructions that a tool applies to your chats, such as your role, audience and preferred style.", "They save you from repeating yourself. Never put private or student data in them."],
    ["Deep research", "A mode where an AI searches many sources over several minutes and writes a long, cited report.", "Useful for literature scoping, but you must open and verify the sources it cites."],
    ["Digital twin", "In this course, a personal AI assistant set up with your voice, standards, sources and rules, for your own work only.", "It speeds up drafting while you stay the author and decision maker. It is never student-facing."],
    ["ETEC–NCAAA", "The Education and Training Evaluation Commission (ETEC), whose National Center for Academic Accreditation and Evaluation (NCAAA) accredits universities and programs in Saudi Arabia.", "Its course specification templates and quality expectations shape how you write outcomes and assessments. Check the current templates on its website."],
    ["Few-shot", "Giving the model a few examples of the output you want inside your prompt.", "Two or three of your own examples are the fastest way to get the style and format you want."],
    ["GPT (custom)", "A customised ChatGPT assistant with its own instructions and files. OpenAI has announced it is retiring custom GPTs; check its help pages and use a ChatGPT Project instead.", "If you already use GPTs, move your instructions to a Project."],
    ["Gem", "A customised Gemini assistant with its own instructions and optional files. Available to most personal accounts; university (Workspace) accounts may need admin approval. Check your tool's help pages.", "Another way to host your twin. Check what your account offers."],
    ["Grounding", "Making the model answer from sources you supply or from verified search, rather than from memory alone.", "Grounded answers are easier to check and less likely to contain invented facts."],
    ["Guardrail", "A rule or control that limits what an AI may do or say.", "Your red lines are guardrails. Write them down and test them."],
    ["Hallucination", "A confident answer that is false or invented, such as a reference that does not exist.", "Always verify facts, quotations and references before using them in teaching or research."],
    ["Human-in-the-loop", "A person reviews or approves the AI's work before it has any effect.", "It is how L2 works and how you stay accountable for what you publish or send."],
    ["LLM (large language model)", "An AI model trained on very large amounts of text to predict and generate language.", "It writes fluent text but does not know or check facts. You supply judgment."],
    ["MCP (Model Context Protocol)", "An open standard for connecting AI tools to outside tools and data sources in a common way.", "It is how an agent can reach files or services. Each connection is a permission, so allow only what you need."],
    ["Memory", "A feature that lets a tool remember details between chats.", "Handy for preferences, risky for sensitive information. Check what is stored and how to delete it."],
    ["Multimodal", "Able to work with more than text, such as images, audio, documents or video.", "You can ask about a slide, a diagram or a scanned page. Remove personal data from images first."],
    ["PDPL", "The Saudi Personal Data Protection Law, which governs how personal data is collected and used.", "Student information is personal data. This is general guidance, not legal advice, so check your university's policy."],
    ["Persona", "A role or character you give the model, such as an experienced reviewer.", "A clear role improves focus. It does not make the model an expert or give it authority."],
    ["PLO (program learning outcome)", "A statement of what graduates of a whole program should know or be able to do.", "Each CLO should support one or more PLOs, so check the alignment when you draft."],
    ["Progressive disclosure", "Loading information in stages: a short description first, full instructions only when needed.", "It is why a skill can hold detailed instructions without filling the context window."],
    ["Project", "A workspace in some AI tools that keeps instructions and files together for related chats.", "A simple home for your twin version 0.1. Features differ by tool and plan."],
    ["Prompt", "The instruction and information you give an AI model.", "Clear role, task, context, format and constraints are most of prompting skill."],
    ["Prompt chaining", "Breaking a big task into a sequence of smaller prompts, using each output as the next input.", "Easier to check at each step than one huge request."],
    ["Prompt injection", "Hidden or planted text in a document or web page that tries to give the AI new orders.", "A pasted article could try to override your rules. Treat document text as content, not commands."],
    ["Reasoning model", "A model that works through a problem in steps before answering.", "Better for hard analysis or planning, but slower. A simple task often needs no reasoning mode."],
    ["Red teaming", "Deliberately trying to make a system break its rules, to find weaknesses before real use.", "Two of your 10 test cases are red-team cases that try to break your twin."],
    ["Rubric", "A scoring guide that lists criteria and performance levels for an assessment.", "AI can help draft criteria wording. Marking decisions remain yours."],
    ["SDAIA", "The Saudi Data and Artificial Intelligence Authority, which publishes national guidance on data and AI, including AI ethics principles.", "Its guidance is a useful reference when you write your own rules for AI use."],
    ["Skill", "A reusable folder of instructions, with optional scripts and files, that an AI loads when a task matches its description.", "Write one for a task you repeat so the result is consistent."],
    ["SKILL.md", "The file at the heart of a skill: a short header with a name and description, then instructions in Markdown.", "The description must say what the skill does and when to use it. Support differs by tool, so paste the text as instructions if needed."],
    ["System prompt", "Hidden or standing instructions that set how a model behaves in a product.", "Your custom instructions and project instructions work like a system prompt for your own chats."],
    ["Token", "A small chunk of text, a word or part of a word, that models read and count.", "Limits and costs are measured in tokens. Wording and language affect how many are used."],
    ["Tool use", "When a model calls an outside function, such as search, a calculator or a file reader, and uses the result.", "Tools make agents useful and also create risk, so list what is allowed and what is not."],
    ["Training cutoff", "The date after which a model has little or no built-in knowledge.", "For recent events, policies or papers, provide sources or use search, then verify."],
    ["Voice profile", "A written description of how you write: tone, sentence habits, openings and phrases to use or avoid.", "It lets your twin draft in your voice, built from your own writing samples."],
    ["Zero-shot", "Asking the model to do a task with no examples.", "Fine for simple tasks. Add examples when the style or format matters."]
  ];
  G.sort((a, b) => a[0].localeCompare(b[0], "en", { sensitivity: "base" }));

  const A = AI12, esc = A.esc;
  const list = document.getElementById("terms"), search = document.getElementById("q"), lettersEl = document.getElementById("letters"), count = document.getElementById("count");
  const first = t => (t[0].match(/[A-Za-z]/) ? t[0].toUpperCase() : "#");
  const present = [...new Set(G.map(g => first(g[0])))].sort();
  let letter = "all";

  lettersEl.innerHTML = `<button type="button" data-l="all" class="on" aria-pressed="true">All</button>` +
    present.map(l => `<button type="button" data-l="${l}" aria-pressed="false">${l}</button>`).join("");

  function render() {
    const q = search.value.trim().toLowerCase();
    const rows = G.filter(g => (letter === "all" || first(g[0]) === letter) && (!q || (g[0] + " " + g[1] + " " + g[2]).toLowerCase().includes(q)));
    count.textContent = rows.length + (rows.length === 1 ? " term" : " terms");
    list.innerHTML = rows.length ? rows.map(g => `<article class="term"><div class="th"><h3 style="margin:0;font-size:1.1rem">${esc(g[0])}</h3></div>
      <p style="margin:0 0 6px">${esc(g[1])}</p><p class="def-alt"><b>Why it matters to you:</b> ${esc(g[2])}</p></article>`).join("")
      : `<p class="muted">No terms match. Try a shorter word or choose All.</p>`;
  }
  lettersEl.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    letter = b.dataset.l;
    lettersEl.querySelectorAll("button").forEach(x => { const on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); });
    render();
  });
  search.addEventListener("input", render);
  render();
})();
