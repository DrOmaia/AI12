/* AI12 core: storage, profile, personalization, theme, navigation */
(function () {
  const KEY = "ai12.v1";
  const blank = () => ({ profile: null, days: {}, cards: {}, streak: { last: null, count: 0 }, theme: null, notes: {}, lab: null, skill: null, project: {}, completedOn: null });

  function load() {
    try { return Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch (e) { return blank(); }
  }
  let state = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  // Local calendar date (not UTC), so "today" matches the user's clock in Riyadh or anywhere else
  const iso = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const today = () => iso(new Date());
  const addDays = (s, n) => { const d = new Date(s + "T12:00:00"); d.setDate(d.getDate() + n); return iso(d); };

  function esc(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

  // ---------- Personalization: {{name}} ----------
  const TITLES = { dr: "Dr.", prof: "Prof.", mr: "Mr.", ms: "Ms.", none: "" };
  function displayName() {
    const p = state.profile || {};
    const name = (p.name || "colleague").trim();
    const t = TITLES[p.title || "dr"] || "";
    return (t ? t + " " : "") + name;
  }
  function T(str) {
    if (str == null) return "";
    return String(str).replace(/\{\{name\}\}/g, esc(displayName()));
  }

  function day(n) {
    if (!state.days[n]) state.days[n] = { quiz: null, done: false, visited: false, tasks: {} };
    if (!state.days[n].tasks) state.days[n].tasks = {};
    return state.days[n];
  }

  function touchStreak() {
    const t = today(), s = state.streak;
    if (s.last === t) return;
    s.count = s.last === addDays(t, -1) ? s.count + 1 : 1;
    s.last = t;
    save();
  }

  // ---------- Spaced repetition (Leitner): box 1..5 ----------
  const INTERVALS = [0, 1, 2, 4, 8, 16];
  function addCards(dayN, cards) {
    (cards || []).forEach((c, i) => {
      const id = dayN + ":" + i;
      if (!state.cards[id]) state.cards[id] = { box: 1, due: addDays(today(), 1) };
    });
    save();
  }
  function dueCards() {
    const t = today();
    return Object.entries(state.cards).filter(([, v]) => v.due <= t).map(([k]) => k);
  }
  function gradeCard(id, knew) {
    const c = state.cards[id]; if (!c) return;
    c.box = knew ? Math.min(5, c.box + 1) : 1;
    c.due = addDays(today(), INTERVALS[c.box]);
    save();
  }

  // ---------- Theme ----------
  function applyTheme() {
    const th = state.theme || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", th);
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme");
    state.theme = cur === "dark" ? "light" : "dark"; save(); applyTheme();
  }
  applyTheme();

  function toast(msg) {
    const t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 2600);
  }

  // Copy text with a fallback for older browsers / non-secure contexts
  function copy(text) {
    const done = () => toast("Copied. Paste it into your AI tool.");
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, () => fallback());
    } else fallback();
    function fallback() {
      const ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", "");
      ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Could not copy. Select the text and copy it manually."); }
      ta.remove();
    }
  }

  // Download a text file (used by the Skill Builder and backups)
  function download(filename, text, type) {
    const blob = new Blob([text], { type: type || "text/plain;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  // ---------- Top bar ----------
  const NAV = { home: "Journey", review: "Review", lab: "Prompt Lab", skill: "Skill Builder", twin: "Twin Builder", glossary: "Glossary", notes: "Notes" };
  function renderTopbar(active) {
    const bar = document.createElement("header");
    bar.className = "topbar no-print";
    const due = dueCards().length;
    const av = (state.profile && state.profile.avatar) || "🎓";
    const link = (k, href, hide) => `<a href="${href}" class="${hide ? "hide-sm " : ""}${active === k ? "active" : ""}"${active === k ? ' aria-current="page"' : ""}>${esc(NAV[k])}${k === "review" && due ? `<span class="badge">${due}</span>` : ""}</a>`;
    bar.innerHTML = `<div class="wrap">
      <a class="logo" href="index.html" aria-label="AI12 home"><span class="mark">ai</span>AI12</a>
      <nav class="nav" aria-label="Main">
        ${link("home", "index.html")}${link("review", "review.html")}${link("lab", "lab.html", true)}${link("skill", "skill.html", true)}${link("twin", "twin.html", true)}${link("glossary", "glossary.html", true)}${link("notes", "notes.html", true)}
        <button type="button" id="themeBtn" aria-label="Toggle dark mode" title="Dark / light">◐</button>
        <button type="button" class="avatar-btn" id="profileBtn" aria-label="Edit profile" title="Your profile">${esc(av)}</button>
      </nav></div>`;
    document.body.prepend(bar);
    bar.querySelector("#themeBtn").onclick = toggleTheme;
    bar.querySelector("#profileBtn").onclick = () => welcome(true);
  }

  // Set this to your own repository after you upload the course (see README.txt)
  const REPO_URL = "";
  const STAR_SVG = '<svg aria-hidden="true" viewBox="0 0 16 16" width="15" height="15"><path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>';

  function renderFooter() {
    const f = document.createElement("footer");
    f.className = "footer no-print";
    const txt = "Your progress is saved in this browser only. This site sends no data anywhere.";
    f.innerHTML = `<div class="wrap">${txt} <a href="setup.html">Setup &amp; help</a>${REPO_URL ? ` <a class="gh-star" href="${REPO_URL}" target="_blank" rel="noopener">${STAR_SVG}Star on GitHub</a>` : ""}</div>`;
    document.body.appendChild(f);
  }

  // ---------- Profile ----------
  const AVATARS = ["🎓", "📚", "🧠", "💡", "🔬", "⚖️", "🏛️", "🧪", "📐", "🌿", "🚀", "🌙"];
  const TXT = {
    welcome: "Welcome to AI12",
    profile: "Your profile",
    introNew: "Twelve days, 30–45 minutes a day, to use AI tools with skill and judgment in your teaching, and to build your own personal teaching assistant for your own work.",
    introEdit: "Change how AI12 addresses you.",
    title: "Title",
    name: "Your name (as it should appear on your certificate)",
    namePh: "e.g. Sara Alqahtani",
    field: "Your discipline (used in examples)",
    fieldPh: "e.g. Information Systems",
    avatar: "Pick an icon",
    start: "Start the course",
    saveP: "Save profile",
    cancel: "Cancel",
    errName: "Please write your name.",
  };
  function welcome(editing) {
    const p = state.profile || { name: "", avatar: "🎓", title: "dr", field: "" };
    const bg = document.createElement("div");
    bg.className = "modal-bg";
    const t = k => esc(TXT[k]);
    bg.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="wTitle">
      <h2 id="wTitle">${editing ? t("profile") : t("welcome")}</h2>
      <p class="muted">${editing ? t("introEdit") : t("introNew")}</p>
      <div class="field"><span class="lbl">${t("title")}</span>
        <div class="seg" id="wTitleSel">${Object.keys(TITLES).filter(k => k !== "none").map(k => `<button type="button" data-v="${k}">${esc(TITLES[k])}</button>`).join("")}<button type="button" data-v="none">—</button></div></div>
      <div class="field"><label for="wName">${t("name")}</label><input id="wName" maxlength="40" autocomplete="name" value="${esc(p.name)}" placeholder="${t("namePh")}"></div>
      <div class="field"><label for="wField">${t("field")}</label><input id="wField" maxlength="60" value="${esc(p.field || "")}" placeholder="${t("fieldPh")}"></div>
      <div class="field"><span class="lbl">${t("avatar")}</span><div class="avatars" id="wAv">${AVATARS.map(a => `<button type="button" data-v="${a}" aria-label="${a}">${a}</button>`).join("")}</div></div>
      <p id="wErr" class="muted" style="display:none;color:var(--err);font-weight:700" role="alert"></p>
      <div class="btn-row" style="margin-top:16px">
        <button class="btn btn-primary" id="wSave" type="button">${editing ? t("saveP") : t("start")}</button>
        ${editing ? `<button class="btn btn-ghost" id="wCancel" type="button">${t("cancel")}</button>` : ""}
      </div></div>`;
    document.body.appendChild(bg);
    let avatar = p.avatar || "🎓", title = p.title || "dr";
    const setOn = (wrap, v) => wrap.querySelectorAll("button").forEach(b => { b.classList.toggle("on", b.dataset.v === v); b.setAttribute("aria-pressed", b.dataset.v === v ? "true" : "false"); });
    const aW = bg.querySelector("#wAv"), tW = bg.querySelector("#wTitleSel");
    setOn(aW, avatar); setOn(tW, title);
    aW.onclick = e => { const b = e.target.closest("button"); if (b) { avatar = b.dataset.v; setOn(aW, avatar); } };
    tW.onclick = e => { const b = e.target.closest("button"); if (b) { title = b.dataset.v; setOn(tW, title); } };
    const cancel = bg.querySelector("#wCancel"); if (cancel) cancel.onclick = () => bg.remove();
    bg.addEventListener("keydown", e => { if (e.key === "Escape" && editing) bg.remove(); });
    bg.querySelector("#wName").focus();
    bg.querySelector("#wSave").onclick = () => {
      const name = bg.querySelector("#wName").value.trim().replace(/[<>"'\\{}]/g, "");
      const err = bg.querySelector("#wErr");
      if (!name) { err.textContent = TXT.errName; err.style.display = "block"; return; }
      state.profile = { name, avatar, title, field: bg.querySelector("#wField").value.trim().replace(/[<>"\\{}]/g, ""), started: (state.profile && state.profile.started) || today() };
      save();
      location.reload();
    };
  }
  function requireProfile() { if (!state.profile) welcome(false); }

  window.AI12 = {
    get state() { return state; }, save, esc, T, displayName, day, today, addDays,
    REPO_URL, STAR_SVG, touchStreak, addCards, dueCards, gradeCard, toast, copy, download, renderTopbar, renderFooter, welcome, requireProfile, toggleTheme,
    reset() { if (confirm("Delete all your progress and notes in this browser?")) { localStorage.removeItem(KEY); location.href = "index.html"; } },
    exportData() { return JSON.stringify(state, null, 2); },
    importData(txt) { const obj = JSON.parse(txt); if (typeof obj !== "object" || !obj) throw new Error("bad"); state = Object.assign(blank(), obj); save(); },
  };
})();
