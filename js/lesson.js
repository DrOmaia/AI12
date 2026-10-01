/* AI12 lesson renderer */
(function () {
  const { h, block, Task, Quiz } = UI;
  const esc = AI12.esc, LT = AI12.T;
  const TOTAL = CURRICULUM.days.length;
  const n = Math.max(1, Math.min(TOTAL, parseInt(new URLSearchParams(location.search).get("day") || "1", 10) || 1));
  const meta = CURRICULUM.days.find(x => x.d === n);
  const main = document.getElementById("main");

  window.DAYS = window.DAYS || {};
  const s = document.createElement("script");
  s.src = `js/days/day${String(n).padStart(2, "0")}.js`;
  s.onload = () => render(window.DAYS[n]);
  s.onerror = () => { main.innerHTML = `<div class="wrap narrow lesson-hero"><h1>Could not load Day ${n}</h1><p>The lesson file is missing. Make sure the whole AI12 folder was uploaded.</p></div>`; };
  document.head.appendChild(s);

  function section(id, mins, title, sub) {
    return h(`<section class="section" id="${id}"><h2>${mins ? `<span class="num">${esc(mins)}</span>` : ""}${esc(title)}</h2>${sub ? `<p class="muted">${sub}</p>` : ""}</section>`);
  }
  const min = m => (m ? m + " min" : "");

  function render(D) {
    if (!D) { s.onerror(); return; }
    const d = AI12.day(n);
    d.visited = true; AI12.save();
    if (D.cards) AI12.addCards(n, D.cards);
    const title = LT(D.title || meta.title);
    document.title = `Day ${n}: ${title.replace(/<[^>]+>/g, "")} — AI12`;
    const phase = CURRICULUM.phases.find(p => p.n === meta.p);
    const P = D.plan || {};
    const wrap = h(`<div class="wrap narrow"></div>`);

    const planItems = [
      ["learn", P.learn, "Learn"],
      ["examples", P.examples, "Examples"],
      ["practice", P.practice, "Practice"],
      ["quiz", P.quiz, D.quizTitle ? LT(D.quizTitle) : "Quiz"],
      ["finish", null, "Finish"],
    ].filter(([id]) => id === "finish" || (id === "learn" && D.learn) || (id === "examples" && D.examples) || (id === "practice" && D.tasks) || (id === "quiz" && D.quiz));

    wrap.appendChild(h(`<div class="lesson-hero">
      <div class="meta"><span class="chip">Day ${n} of ${TOTAL}</span><span class="chip">${esc(phase.title)}</span>${meta.type === "project" ? `<span class="chip warn">★ Project</span>` : ""}<span class="chip">⏱ ${D.minutes || "30–45"} minutes</span></div>
      <h1>${title}</h1>
      <p style="font-size:1.12rem">${LT(D.intro)}</p>
      ${D.goals ? `<div class="panel" style="padding:16px 20px"><b>By the end of today you can:</b><ul class="objectives">${D.goals.map(g => `<li>${LT(g)}</li>`).join("")}</ul></div>` : ""}
      <nav class="plan" aria-label="Today's plan">${planItems.map(([id, m, label]) => `<a href="#${id}"><div class="mins">${m ? esc(String(m)) + "m" : "✓"}</div><div class="what">${esc(label)}</div></a>`).join("")}</nav></div>`));

    if (D.learn) {
      const sec = section("learn", min(P.learn), "Learn");
      D.learn.forEach((it, k) => sec.appendChild(block(it, "l" + k)));
      wrap.appendChild(sec);
    }
    if (D.examples) {
      const sec = section("examples", min(P.examples), "Examples from university work", "Copy any prompt, replace the parts in [brackets], and try it in the tool you use.");
      D.examples.forEach((it, k) => sec.appendChild(block(it, "e" + k)));
      wrap.appendChild(sec);
    }
    if (D.tasks) {
      const sec = section("practice", min(P.practice), "Practice", "Tick each item honestly. Your ticks are saved in this browser.");
      D.tasks.forEach((t, k) => sec.appendChild(Task(t, n, "t" + k)));
      wrap.appendChild(sec);
    }
    if (D.quiz) {
      const sec = section("quiz", min(P.quiz), D.quizTitle ? LT(D.quizTitle) : "Quiz", D.quizSub ? LT(D.quizSub) : "");
      sec.appendChild(Quiz(D.quiz, n));
      wrap.appendChild(sec);
    }
    if (D.cards) {
      const sec = section("cards", "", "Review cards");
      sec.appendChild(h(`<div><p>${D.cards.length} cards from today were added to your review deck. They come back tomorrow, then after 2, 4, 8 and 16 days.</p>
        <ul>${D.cards.map(c => `<li>${LT(c.f)}</li>`).join("")}</ul><a class="btn btn-soft" href="review.html">Open the review deck</a></div>`));
      wrap.appendChild(sec);
    }

    // Notes
    const ns = section("notes", "", "My notes", "Write today's key idea in your own words, and one way you will use it this week.");
    const ta = h(`<div class="notes"><textarea aria-label="My notes for this day"></textarea><p class="muted" style="font-size:.85rem">Saved automatically. All notes are on the <a href="notes.html">Notes page</a>.</p></div>`);
    const t = ta.querySelector("textarea"); t.value = AI12.state.notes[n] || "";
    t.oninput = () => { AI12.state.notes[n] = t.value; AI12.save(); };
    ns.appendChild(ta); wrap.appendChild(ns);

    // Finish
    const fs = section("finish", "", "Finish the day");
    const next = CURRICULUM.days.find(x => x.d === n + 1);
    const quizTxt = D.quiz ? ` · ${D.quizTitle ? LT(D.quizTitle) : "Quiz"}: <b>${d.quiz ? d.quiz.score + " / " + d.quiz.total : "not taken"}</b>` : "";
    const taskTotal = (D.tasks || []).reduce((a, tk) => a + (tk.check ? tk.check.length : 0), 0);
    const taskDone = (D.tasks || []).reduce((a, tk, k) => a + ((d.tasks["t" + k] || []).filter(Boolean).length), 0);
    const fin = h(`<div class="panel"><p>Practice checks: <b>${taskDone} / ${taskTotal}</b>${quizTxt}</p>
      <p class="gate muted" role="status" style="font-size:.92rem"></p>
      <div class="btn-row"><button class="btn btn-primary" type="button" id="doneBtn">${d.done ? "✓ Day completed" : "Mark Day " + n + " as complete"}</button>
      ${next ? `<a class="btn btn-soft" href="lesson.html?day=${n + 1}">Go to Day ${n + 1}</a>` : `<a class="btn btn-soft" href="certificate.html">🎓 My certificate</a>`}<a class="btn btn-ghost" href="index.html">Journey map</a></div>
      <p class="praise" style="margin-top:10px"></p></div>`);
    const gate = fin.querySelector(".gate");
    // Day 12 has requirements for the certificate
    function unmet() {
      const dd = AI12.day(n);
      if (!D.requires) return "";
      const r = D.requires;
      if (r.quizPct && (!dd.quiz || dd.quiz.score / dd.quiz.total < r.quizPct)) return `To finish the course, score at least ${Math.round(r.quizPct * 100)}% in the final exam (retakes allowed).`;
      if (r.tasks) {
        for (const k of r.tasks) {
          const [dn, tk] = k.split(":");
          const tDef = window.DAYS[+dn] && window.DAYS[+dn].tasks && window.DAYS[+dn].tasks[+tk.slice(1)];
          const got = (AI12.day(+dn).tasks[tk] || []);
          if (!tDef) return `Day ${dn} is still loading. Try again in a moment.`;
          if (tDef.check && !tDef.check.every((c, i) => got[i])) return `Tick every item in “${LT(tDef.title)}” first.`;
        }
      }
      return "";
    }
    if (D.requires && D.requires.tasks) {
      // Day 12 also needs Day 11's task definitions loaded
      D.requires.tasks.map(k => +k.split(":")[0]).filter(x => x !== n && !window.DAYS[x]).forEach(x => {
        const sc = document.createElement("script"); sc.src = `js/days/day${String(x).padStart(2, "0")}.js`; document.head.appendChild(sc);
      });
    }
    fin.querySelector("#doneBtn").onclick = (e) => {
      const why = unmet();
      if (why) { gate.textContent = why; gate.style.color = "var(--err)"; return; }
      d.done = true; AI12.touchStreak();
      if (n === TOTAL && !AI12.state.completedOn) AI12.state.completedOn = AI12.today();
      AI12.save();
      e.target.textContent = "✓ Day completed";
      gate.textContent = "";
      fin.querySelector(".praise").innerHTML = AI12.T(n === TOTAL
        ? "Congratulations, {{name}}! You finished AI12. Your certificate is ready."
        : "Well done, {{name}}. Day " + n + " is complete. Consistency beats speed.");
      AI12.toast(n === TOTAL ? "Course complete!" : "Day " + n + " complete");
    };
    fs.appendChild(fin); wrap.appendChild(fs);

    main.innerHTML = ""; main.appendChild(wrap);
    if (location.hash) { const tgt = document.querySelector(location.hash); if (tgt) tgt.scrollIntoView(); }
  }
})();
