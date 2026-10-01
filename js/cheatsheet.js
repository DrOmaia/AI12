/* AI12 printable cheat sheet: cheatsheet.html?phase=1..3. Built from each day's goals, tips and cards. */
(function () {
  const esc = AI12.esc, T = AI12.T;
  const C = CURRICULUM;
  const root = document.getElementById("sheet");
  const p = Math.max(1, Math.min(C.phases.length, parseInt(new URLSearchParams(location.search).get("phase") || "1", 10) || 1));
  const phase = C.phases.find(x => x.n === p);
  const days = C.days.filter(d => d.p === p);
  window.DAYS = window.DAYS || {};
  document.title = phase.title + " cheat sheet — AI12";

  let left = days.length;
  days.forEach(d => {
    if (window.DAYS[d.d]) return fin();
    const s = document.createElement("script");
    s.src = "js/days/day" + String(d.d).padStart(2, "0") + ".js";
    s.onload = fin; s.onerror = fin;
    document.head.appendChild(s);
  });
  function fin() { if (--left === 0) render(); }

  function tips(D) {
    const out = [];
    [].concat(D.learn || [], D.examples || []).forEach(b => {
      if ((b.t === "tip" || b.t === "ok") && out.length < 1) out.push(b);
    });
    return out;
  }
  // Three shortest cards keep each phase to about one A4 page
  function shortCards(D) {
    const cs = (D.cards || []).map((c, i) => ({ c, i, n: (c.f + c.b).length }));
    return cs.sort((a, b) => a.n - b.n).slice(0, 3).sort((a, b) => a.i - b.i).map(x => x.c);
  }

  function render() {
    const nav = C.phases.map(x => `<a class="btn btn-sm ${x.n === p ? "btn-primary" : "btn-soft"}" href="cheatsheet.html?phase=${x.n}"${x.n === p ? ' aria-current="page"' : ""}>Phase ${x.n}</a>`).join(" ");
    root.innerHTML = `
      <div class="no-print btn-row" style="margin-bottom:14px">${nav}<button type="button" class="btn btn-ghost btn-sm" id="printBtn">Print this page</button></div>
      <h1 class="cs-title">${esc(phase.title)}: cheat sheet</h1>
      <p class="muted">AI12 · prepared for ${esc(AI12.displayName())}. Days ${days[0].d} to ${days[days.length - 1].d}.</p>
      <div class="cs-grid">${days.map(d => {
        const D = window.DAYS[d.d];
        if (!D) return `<section class="cs-day"><h2>Day ${d.d}: ${esc(d.title)}</h2><p class="muted">This lesson file could not be loaded.</p></section>`;
        const tp = tips(D);
        return `<section class="cs-day">
          <h2>Day ${d.d}: ${T(D.title || d.title)}</h2>
          ${D.goals ? `<h3>You can</h3><ul>${D.goals.slice(0, 3).map(g => `<li>${T(g)}</li>`).join("")}</ul>` : ""}
          ${tp.length ? `<h3>Key tips</h3>${tp.map(b => `<p class="cs-tip"><b>${T(b.title || (b.t === "ok" ? "Good practice" : "Pro tip")).replace(/[.?!]$/, "")}.</b> ${T(b.html)}</p>`).join("")}` : ""}
          ${D.cards ? `<h3>Remember</h3><dl class="cs-cards">${shortCards(D).map(c => `<dt>${T(c.f)}</dt><dd>${T(c.b)}</dd>`).join("")}</dl>` : ""}
        </section>`;
      }).join("")}</div>
      <p class="muted cs-foot">Check outputs before use. Never put student personal data into an AI tool. Follow your university's policy.</p>`;
    document.getElementById("printBtn").onclick = () => window.print();
  }
})();
