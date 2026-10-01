/* AI12 components */
(function () {
  const esc = AI12.esc, T = AI12.T;

  function h(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; }

  const TOOLS = [
    { name: "Gemini", url: "https://gemini.google.com/app" },
    { name: "ChatGPT", url: "https://chatgpt.com/" },
    { name: "Claude", url: "https://claude.ai/new" },
  ];

  // Highlight [placeholders] you must replace
  function promptHTML(text) {
    return esc(text).replace(/\[([^\]\n]{1,80})\]/g, '<span class="ph">[$1]</span>');
  }

  // A copyable prompt. opts: {title, text, kind: "weak"|"strong"|"", tools: bool}
  function PromptBox(opts) {
    const text = T(opts.text);
    const el = h(`<div class="prompt-box ${opts.kind || ""}">
      <div class="pb-bar"><span class="pb-title">${esc(T(opts.title) || "Prompt")}</span>
        <button type="button" class="pb-btn copy">Copy</button>
        ${opts.tools === false ? "" : TOOLS.map(t => `<a class="pb-btn" href="${t.url}" target="_blank" rel="noopener" data-copy="1" title="Copies the prompt, then opens ${t.name}">${t.name} ↗</a>`).join("")}
      </div><pre>${promptHTML(text)}</pre></div>`);
    el.querySelector(".copy").onclick = () => AI12.copy(text);
    el.querySelectorAll("a[data-copy]").forEach(a => a.addEventListener("click", () => AI12.copy(text)));
    return el;
  }

  function block(item, key) {
    switch (item.t) {
      case "p": return h(`<div><p>${T(item.html)}</p></div>`);
      case "h": return h(`<h3 style="margin-top:24px">${T(item.text)}</h3>`);
      case "list": return h(`<ul>${item.items.map(i => `<li>${T(i)}</li>`).join("")}</ul>`);
      case "steps": return h(`<ol class="steps">${item.items.map(i => `<li>${T(i)}</li>`).join("")}</ol>`);
      case "tip": return h(`<div class="callout tip"><div class="ttl">⚡ ${T(item.title) || "Pro tip"}</div><div>${T(item.html)}</div></div>`);
      case "warn": return h(`<div class="callout warn"><div class="ttl">⚠️ ${T(item.title) || "Watch out"}</div><div>${T(item.html)}</div></div>`);
      case "ok": return h(`<div class="callout ok"><div class="ttl">✅ ${T(item.title)}</div><div>${T(item.html)}</div></div>`);
      case "saudi": return h(`<div class="callout saudi"><div class="ttl">🇸🇦 ${T(item.title) || "In the Saudi context"}</div><div>${T(item.html)}</div></div>`);
      case "analogy": return h(`<div class="callout"><div class="ttl">🎯 ${T(item.title) || "Think of it like this"}</div><div>${T(item.html)}</div></div>`);
      case "prompt": {
        const wrap = document.createElement("div");
        if (item.before) wrap.appendChild(h(`<div><p>${T(item.before)}</p></div>`));
        wrap.appendChild(PromptBox(item));
        if (item.after) wrap.appendChild(h(`<div><p class="muted">${T(item.after)}</p></div>`));
        return wrap;
      }
      case "compare": {
        const wrap = h(`<div class="compare">${item.title ? `<h3>${T(item.title)}</h3>` : ""}<div class="two-col"><div class="c-weak"><span class="label-wrong">✗ Weak prompt</span></div><div class="c-strong"><span class="label-right">✓ Strong prompt</span></div></div>${item.why ? `<div class="callout why"><div class="ttl">🔍 What changed</div><div>${T(item.why)}</div></div>` : ""}</div>`);
        wrap.querySelector(".c-weak").appendChild(PromptBox({ title: "Before", text: item.weak, kind: "weak", tools: false }));
        wrap.querySelector(".c-strong").appendChild(PromptBox({ title: "After", text: item.strong, kind: "strong" }));
        return wrap;
      }
      case "table": return h(`<div class="table-wrap"><table class="gl"><thead><tr>${item.head.map(c => `<th scope="col">${T(c)}</th>`).join("")}</tr></thead><tbody>${item.rows.map(r => `<tr>${r.map(c => `<td>${T(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      case "fold": {
        const f = h(`<details class="fold"><summary>${T(item.title)}</summary><div class="fold-body"></div></details>`);
        const body = f.querySelector(".fold-body");
        (item.blocks || []).forEach((b, k) => body.appendChild(block(b, key + "f" + k)));
        return f;
      }
      default: return h(`<div></div>`);
    }
  }

  // Practice task with a saved self-check list
  function Task(task, dayN, key) {
    const d = AI12.day(dayN);
    const st = d.tasks[key] || (d.tasks[key] = []);
    const el = h(`<article class="task" id="task-${key}"><h3>🛠 ${T(task.title)}</h3><div class="t-body"></div></article>`);
    const body = el.querySelector(".t-body");
    if (task.html) body.appendChild(h(`<div><p>${T(task.html)}</p></div>`));
    (task.blocks || []).forEach((b, k) => body.appendChild(block(b, key + "b" + k)));
    if (task.check && task.check.length) {
      body.appendChild(h(`<p style="margin-top:14px"><b>Check your work</b></p>`));
      const ul = h(`<ul class="checklist"></ul>`);
      task.check.forEach((c, i) => {
        const li = h(`<li><label class="${st[i] ? "on" : ""}"><input type="checkbox" ${st[i] ? "checked" : ""}><span>${T(c)}</span></label></li>`);
        const inp = li.querySelector("input"), lab = li.querySelector("label");
        inp.onchange = () => { st[i] = inp.checked; lab.classList.toggle("on", inp.checked); AI12.save(); refresh(); };
        ul.appendChild(li);
      });
      body.appendChild(ul);
    }
    function refresh() {
      const all = task.check && task.check.length && task.check.every((c, i) => st[i]);
      el.classList.toggle("done", !!all);
    }
    refresh();
    return el;
  }

  // Multiple-choice quiz with explanations. opts: {storeKey} (default "quiz")
  function Quiz(qs, dayN, storeKey) {
    const key = storeKey || "quiz";
    const el = h(`<div class="quiz"></div>`);
    let answered = 0, score = 0;
    qs.forEach((q, qi) => {
      const box = h(`<div class="q"><div class="qtext">${qi + 1}. ${T(q.q)}</div><div class="opts" role="group"></div><div class="explain" aria-live="polite"></div></div>`);
      const opts = box.querySelector(".opts");
      q.o.forEach((o, oi) => {
        const b = h(`<button type="button" class="opt">${T(o)}</button>`);
        b.onclick = () => {
          opts.querySelectorAll("button").forEach((x, xi) => { x.disabled = true; if (xi === q.a) x.classList.add("right"); });
          const ok = oi === q.a;
          if (!ok) b.classList.add("wrong");
          box.querySelector(".explain").innerHTML = `<b>${ok ? "Correct." : "Not quite."}</b> ${T(q.why)}`;
          answered++; if (ok) score++;
          if (answered === qs.length) {
            const d = AI12.day(dayN);
            const prev = d[key];
            if (!prev || score >= prev.score) d[key] = { score, total: qs.length };
            AI12.save();
            const pct = score / qs.length;
            const bar = h(`<div class="score-bar" role="status">Your score: ${score} / ${qs.length} ${pct === 1 ? "🏆" : pct >= 0.7 ? "👍" : "— review the parts you missed, then retake."}<button class="btn btn-soft btn-sm" type="button">Retake</button></div>`);
            bar.querySelector("button").onclick = () => { const n = Quiz(qs, dayN, key); el.replaceWith(n); n.scrollIntoView({ block: "start" }); };
            el.appendChild(bar);
          }
        };
        opts.appendChild(b);
      });
      el.appendChild(box);
    });
    return el;
  }

  window.UI = { h, block, PromptBox, Task, Quiz, TOOLS };
})();
