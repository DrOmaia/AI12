/* AI12 review deck (Leitner boxes). Needs app.js and curriculum.js. Loads all day files itself. */
(function () {
  const esc = AI12.esc, T = AI12.T, st = AI12.state;
  const total = CURRICULUM.days.length;
  const root = document.getElementById("deck");
  window.DAYS = window.DAYS || {};

  function loadDays(cb) {
    let left = total;
    const fin = () => { if (--left === 0) cb(); };
    CURRICULUM.days.forEach(d => {
      if (window.DAYS[d.d]) return fin();
      const s = document.createElement("script");
      s.src = "js/days/day" + String(d.d).padStart(2, "0") + ".js";
      s.onload = fin; s.onerror = fin;
      document.head.appendChild(s);
    });
  }

  function cardOf(id) {
    const [dn, i] = id.split(":").map(Number);
    const D = window.DAYS[dn];
    return D && D.cards && D.cards[i] ? { id, day: dn, f: D.cards[i].f, b: D.cards[i].b } : null;
  }

  let queue = [], idx = 0, graded = true, shown = false, knewCount = 0;

  function overview() {
    const ids = Object.keys(st.cards).filter(id => cardOf(id));
    const due = AI12.dueCards().filter(id => cardOf(id));
    const boxes = [1, 2, 3, 4, 5].map(b => ids.filter(id => st.cards[id].box === b).length);
    const next = ids.filter(id => st.cards[id].due > AI12.today()).map(id => st.cards[id].due).sort()[0];
    root.innerHTML = `<div class="panel">
      <h2 style="margin-bottom:6px">${due.length ? due.length + " card" + (due.length === 1 ? "" : "s") + " due now" : "Nothing due right now"}</h2>
      <p class="muted">${ids.length
        ? "Cards from the days you have opened are in your deck. Right answers move a card to a higher box and it returns later; wrong answers send it back to box 1."
        : "Your deck is empty. Open a lesson and its five cards are added automatically."}</p>
      ${ids.length ? `<div class="stats" style="grid-template-columns:repeat(5,1fr);margin:12px 0" aria-label="Cards per box">${boxes.map((n, k) => `<div class="stat"><div class="v">${n}</div><div class="l">Box ${k + 1}</div></div>`).join("")}</div>` : ""}
      ${!due.length && next ? `<p class="muted">Next review: ${esc(next)}.</p>` : ""}
      <div class="btn-row">
        ${due.length ? `<button type="button" class="btn btn-primary" id="goDue">Review ${due.length} due</button>` : ""}
        ${ids.length ? `<button type="button" class="btn btn-soft" id="goAll">Practise all ${ids.length} cards (does not change boxes)</button>` : ""}
        <a class="btn btn-ghost" href="index.html">Journey map</a>
      </div></div>`;
    const a = document.getElementById("goDue"), b = document.getElementById("goAll");
    if (a) a.onclick = () => start(due, true);
    if (b) b.onclick = () => start(ids, false);
  }

  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function start(ids, isGraded) { queue = shuffle(ids); idx = 0; graded = isGraded; knewCount = 0; shown = false; show(); }

  function show() {
    if (idx >= queue.length) return done();
    const c = cardOf(queue[idx]);
    if (!c) { idx++; return show(); }
    root.innerHTML = `<div class="panel review-card">
      <p class="muted" style="margin:0 0 10px">Card ${idx + 1} of ${queue.length} · From Day ${c.day}${graded ? "" : " · practice mode"}</p>
      <div class="rc-face" aria-live="polite">
        <div class="rc-q">${T(c.f)}</div>
        <div class="rc-a" ${shown ? "" : "hidden"}><hr><div>${T(c.b)}</div></div>
      </div>
      <div class="btn-row" style="margin-top:16px">
        ${shown
          ? `<button type="button" class="btn btn-primary" id="knew">I knew it</button><button type="button" class="btn btn-soft" id="nope">Not yet</button>`
          : `<button type="button" class="btn btn-primary" id="flip">Show answer</button>`}
        <button type="button" class="btn btn-ghost" id="quit">Stop</button>
      </div></div>`;
    const flip = document.getElementById("flip");
    if (flip) { flip.onclick = () => { shown = true; show(); const k = document.getElementById("knew"); if (k) k.focus(); }; flip.focus({ preventScroll: true }); }
    const grade = knew => { if (graded) AI12.gradeCard(c.id, knew); if (knew) knewCount++; idx++; shown = false; show(); };
    const k = document.getElementById("knew"), n = document.getElementById("nope");
    if (k) k.onclick = () => grade(true);
    if (n) n.onclick = () => grade(false);
    document.getElementById("quit").onclick = overview;
  }

  function done() {
    if (graded && queue.length) AI12.touchStreak();
    root.innerHTML = `<div class="panel"><h2>Session finished</h2>
      <p>You knew ${knewCount} of ${queue.length} cards.${graded ? " Their next review dates are updated." : ""}</p>
      <div class="btn-row"><button type="button" class="btn btn-primary" id="back">Back to the deck</button><a class="btn btn-soft" href="index.html">Journey map</a></div></div>`;
    document.getElementById("back").onclick = () => { overview(); };
    const tb = document.querySelector(".topbar .badge"); if (tb) tb.remove();
  }

  root.innerHTML = '<p class="muted" role="status">Loading your cards…</p>';
  loadDays(overview);
})();
