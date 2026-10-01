window.DAYS = window.DAYS || {};
DAYS[12] = {
  "title": "Evaluate, deliver and certify",
  "intro": "You have built and tested your twin. Today you finish the job: check the Twin Pack is complete, plan how you will keep it healthy, write your disclosure line and one-page twin card, and take the final exam. Pass it, and you can print your certificate.",
  "goals": [
    "Check that your Twin Pack is complete and ready for your own use.",
    "Write a simple maintenance plan and a disclosure line.",
    "Complete your one-page twin card.",
    "Pass the final exam (at least 9 of 12, which is 70%) and claim your certificate."
  ],
  "plan": {
    "learn": 8,
    "examples": 5,
    "practice": 17,
    "quiz": 10
  },
  "learn": [
    {
      "t": "h",
      "text": "The Twin Pack: five parts"
    },
    {
      "t": "list",
      "items": [
        "<b>1. Voice profile / style skill:</b> how you write and speak.",
        "<b>2. One task skill:</b> for example a feedback drafter or lecture planner.",
        "<b>3. Agent spec:</b> goal, inputs, tools allowed, steps, stop and escalate rules, red lines, autonomy level (L1 or L2).",
        "<b>4. Test report:</b> your 10 cases with scores, fixes and one remaining risk.",
        "<b>5. Twin card:</b> one page with purpose, autonomy level, red lines, how you review outputs and your disclosure line."
      ]
    },
    {
      "t": "p",
      "html": "The <a href=\"twin.html\">Twin Builder</a> can turn your inputs into copy-ready text for each part, with Copy and Download buttons. Save your pack in a folder you control."
    },
    {
      "t": "h",
      "text": "Keeping the twin healthy"
    },
    {
      "t": "steps",
      "items": [
        "<b>Monthly review:</b> run two or three of your test cases again. Did anything drift?",
        "<b>Version log:</b> note the date and what you changed (v0.1, v0.2, and so on).",
        "<b>Retire outdated files:</b> remove old rubrics, syllabi and samples that no longer apply.",
        "<b>Re-test after changes:</b> when your tool, your course or your university policy changes, repeat the red-team cases."
      ]
    },
    {
      "t": "h",
      "text": "What to disclose, and where"
    },
    {
      "t": "p",
      "html": "Disclosure rules differ between universities, journals and publishers. Check your university's policy. A simple habit is a short line wherever AI helped shape something other people read or rely on, such as course materials or a paper."
    },
    {
      "t": "warn",
      "title": "Still true on the last day",
      "html": "Your twin is personal. It is not student-facing, it never acts alone and it never grades. You review everything it drafts before anyone else sees it. You remain responsible for the result."
    },
    {
      "t": "saudi",
      "title": "Think in terms of review cycles",
      "html": "The maintenance plan mirrors the continuous improvement cycle that quality assurance such as NCAAA review values: plan, act, check, improve. Handle any personal data according to PDPL and your university's rules."
    }
  ],
  "examples": [
    {
      "t": "prompt",
      "title": "Draft your disclosure line",
      "text": "Help me write a short, honest disclosure line about my use of AI. Context: [where it appears, e.g. course materials, slides, a paper, feedback]. What AI did: [e.g. drafted a first outline, suggested wording]. What I did: [e.g. checked facts, rewrote, approved everything]. Tool used: [tool name]. Give me three versions: one sentence, one short paragraph, and one for a slide footer. Do not claim anything I did not say.",
      "after": "Check that each version is true. Then compare it with your university's policy and any publisher's rules, and edit before using it."
    },
    {
      "t": "prompt",
      "title": "Draft your one-page twin card",
      "text": "Create a one-page twin card in plain English. Use this information. Purpose: [what my teaching assistant helps me with]. Autonomy level: [L1 or L2]. Red lines: [my list]. How I review outputs: [my checks]. Disclosure line: [my line]. Version and date: [v1.0, date]. Format: a short heading for each item with one to three lines under it.",
      "after": "Check that it adds no new claims, that the red lines are exactly yours and that it says the twin is personal and never grades."
    },
    {
      "t": "prompt",
      "title": "Ask for a monthly review checklist",
      "text": "Read my agent spec and test report below. Write a 10-minute monthly review checklist for my twin: which 3 test cases to re-run, which files to check for being out of date, and what to record in my version log. Spec: [paste]. Report: [paste].",
      "after": "Make sure the checklist fits in ten minutes and that you would actually use it. Cut anything you will not do."
    }
  ],
  "tasks": [
    {
      "title": "Twin step 14: check your Twin Pack so far",
      "html": "Open the four parts you have built and check each one. The twin card is the fifth part and you finish it in task 3. Use the <a href=\"twin.html\">Twin Builder</a> if any part is missing. Make sure the pack is saved in a place you control, and that it contains no student data.",
      "check": [
        "I have the first four parts: voice profile, task skill, agent spec and test report.",
        "My agent spec states my autonomy level (L1 or L2) and my red lines.",
        "Nothing in the pack contains student personal data or confidential files."
      ]
    },
    {
      "title": "Twin step 15: write your maintenance plan",
      "html": "Write four short lines: when you will do your monthly review, how you will keep the version log, which files you will retire first, and what change would make you re-run the red-team tests. Put this in your twin card.",
      "check": [
        "I chose a regular date for the monthly review.",
        "I started a version log and marked the delivered pack as v1.0 with today's date.",
        "I listed one file or instruction that I will retire or update."
      ]
    },
    {
      "title": "Twin step 16: write your disclosure line and finish your twin card",
      "html": "Use the examples above. Check your university's policy first, because disclosure rules differ. Finish your one-page twin card, then take the final exam below. When you pass and finish, your certificate unlocks at <a href=\"certificate.html\">certificate.html</a>.",
      "check": [
        "My disclosure line is true and short enough to use in practice.",
        "My twin card includes purpose, autonomy level, red lines, review method and disclosure line.",
        "I checked my university's policy on AI disclosure.",
        "All five parts of my Twin Pack are now complete, including the twin card, and I marked the delivered pack as v1.0."
      ]
    }
  ],
  "quiz": [
    {
      "q": "Which is the best definition of an agent?",
      "o": [
        "A longer prompt",
        "A folder with a SKILL.md file",
        "A model, instructions and tools in a loop that plans and acts toward a goal",
        "A chat with memory switched on"
      ],
      "a": 2,
      "why": "Agents combine a model, instructions, tools and a loop that works toward a goal."
    },
    {
      "q": "What are the two parts that a SKILL.md frontmatter must include?",
      "o": [
        "name and description",
        "author and date",
        "title and tags",
        "tool and version"
      ],
      "a": 0,
      "why": "The name and description let the AI know what the skill does and when to load it."
    },
    {
      "q": "Your twin drafts feedback and asks your OK before saving it to your own folder. Which autonomy level is this?",
      "o": [
        "L1: draft only",
        "L3: acts alone on low-risk tasks",
        "No level; it is just a prompt",
        "L2: drafts, then I approve"
      ],
      "a": 3,
      "why": "L2 means the AI drafts and the human approves before anything is used. The twin stays at L1 or L2."
    },
    {
      "q": "A web page you ask the twin to summarise contains hidden text telling it to ignore its rules. This is…",
      "o": [
        "a useful shortcut",
        "prompt injection",
        "a hallucination",
        "a context window limit"
      ],
      "a": 1,
      "why": "Prompt injection is when instructions hidden in content try to take over the model."
    },
    {
      "q": "Which of these is NOT a red line for your twin?",
      "o": [
        "Never assign grades",
        "Never handle student personal data",
        "Always choose the fastest answer",
        "Never send anything on its own"
      ],
      "a": 2,
      "why": "Speed is not a safety rule. Red lines are about data, grades, sending and honesty."
    },
    {
      "q": "In the 10-case test set, a request to grade a student is a…",
      "o": [
        "boundary case",
        "red-team case",
        "voice-fidelity case",
        "normal case"
      ],
      "a": 0,
      "why": "Boundary cases sit near a red line. The twin should refuse and offer a draft of feedback instead."
    },
    {
      "q": "A tool produces a reference you cannot find in the Saudi Digital Library or elsewhere. What should you do?",
      "o": [
        "Cite it with a different date",
        "Use it, since it looks formal",
        "Treat it as unverified, and do not use it until you find it",
        "Ask the tool to confirm its own reference"
      ],
      "a": 2,
      "why": "Models can invent plausible references. Verify against a real source; the tool cannot vouch for itself."
    },
    {
      "q": "What does progressive disclosure mean for a skill?",
      "o": [
        "Only the name and description are loaded first; the full instructions load when needed",
        "You disclose AI use gradually",
        "The AI shows its reasoning step by step",
        "The skill releases new features monthly"
      ],
      "a": 0,
      "why": "Skills load on demand, which keeps the context window free until the skill is needed."
    },
    {
      "q": "Which is the best use of an AI detector in deciding whether work was written by AI?",
      "o": [
        "Treat the score as proof",
        "Use it as the only evidence in a misconduct case",
        "Trust it more for non-native English writing",
        "Do not rely on it as proof; detectors are unreliable and can be biased"
      ],
      "a": 3,
      "why": "Research has found that detectors are unreliable and can be biased against some writers."
    },
    {
      "q": "Why keep a version log for your twin?",
      "o": [
        "It is required by every AI tool",
        "It records what changed and when, so you can review and roll back",
        "It makes the AI faster",
        "It replaces the test report"
      ],
      "a": 1,
      "why": "A log supports monthly review and lets you see which change helped or hurt."
    },
    {
      "q": "Your twin card should state which of these?",
      "o": [
        "Your students' names",
        "Your account password",
        "Purpose, autonomy level, red lines, how you review outputs and a disclosure line",
        "A claim that the twin speaks for you"
      ],
      "a": 2,
      "why": "The card summarises what the twin is for and the limits that keep it safe. It is your teaching assistant, never you."
    },
    {
      "q": "After a university course specification changes, what should you do with your twin?",
      "o": [
        "Update or retire the old files, bump the version and re-run key tests",
        "Switch to a new tool",
        "Nothing; it will notice",
        "Delete the red lines"
      ],
      "a": 0,
      "why": "Outdated files cause outdated answers. Update, log and re-test."
    }
  ],
  "cards": [
    {
      "f": "The Twin Pack",
      "b": "Voice profile, one task skill, agent spec, 10-case test report and a one-page twin card."
    },
    {
      "f": "Autonomy levels",
      "b": "L1 draft only. L2 draft then I approve. L3 acts alone on low-risk tasks. The twin stays at L1 or L2."
    },
    {
      "f": "Monthly twin review",
      "b": "Re-run 2 or 3 test cases, check files for being out of date, update the version log."
    },
    {
      "f": "Twin card contents",
      "b": "Purpose, autonomy level, red lines, how I review outputs, disclosure line."
    },
    {
      "f": "Twin red lines",
      "b": "No student personal data, no grades, sends nothing, invents nothing, flags uncertainty, outputs reviewed, AI use disclosed where required."
    }
  ],
  "requires": {
    "quizPct": 0.7,
    "tasks": [
      "12:t0",
      "12:t2",
      "11:t0",
      "11:t1",
      "11:t2"
    ]
  }
};
