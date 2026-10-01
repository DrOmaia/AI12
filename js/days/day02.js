window.DAYS = window.DAYS || {};
DAYS[2] = {
  "title": "Prompt engineering: the building blocks",
  "intro": "<b>Prompt engineering</b> is the skill of writing instructions that get useful, reliable output from an AI model. It is less about tricks and more about the same clarity you would give a capable new colleague. Today you learn six building blocks and the habit of refining in conversation.",
  "goals": [
    "Write a prompt using role, context, task, constraints, format and examples.",
    "Turn a vague request into a precise one.",
    "Improve an answer with short follow-up prompts instead of starting over."
  ],
  "plan": {
    "learn": 12,
    "examples": 10,
    "practice": 18,
    "quiz": 5
  },
  "learn": [
    {
      "t": "p",
      "html": "A prompt is everything you give the model: your instructions, any pasted text or files, and the conversation so far. The model cannot see your course, your students or your intentions. <b>Whatever you leave out, it will fill in with a generic guess.</b>"
    },
    {
      "t": "h",
      "text": "Six building blocks"
    },
    {
      "t": "table",
      "head": [
        "Block",
        "Question it answers",
        "Example"
      ],
      "rows": [
        [
          "<b>1. Role</b>",
          "Who should the AI act as?",
          "\"Act as an experienced instructional designer in higher education.\""
        ],
        [
          "<b>2. Context</b>",
          "What is the situation, and who is the audience?",
          "\"Second-year students, mixed English level, 50-minute lecture.\""
        ],
        [
          "<b>3. Task</b>",
          "What exactly should it produce? Start with a verb.",
          "\"Write three real-life examples that explain normalization.\""
        ],
        [
          "<b>4. Constraints</b>",
          "Limits, rules, what to include or avoid.",
          "\"Under 200 words. Saudi business examples. No jargon without a definition.\""
        ],
        [
          "<b>5. Format</b>",
          "What shape should the answer take?",
          "\"A table with columns: example, concept shown, discussion question.\""
        ],
        [
          "<b>6. Examples</b> <span class='muted'>(optional)</span>",
          "What does a good answer look like?",
          "Paste one question you wrote last term as a model."
        ]
      ]
    },
    {
      "t": "tip",
      "title": "You do not need all six every time",
      "html": "A quick rewrite needs only a task and a little context. A handout, an exam or anything students will see deserves all six. The more the output matters, the more blocks you include."
    },
    {
      "t": "h",
      "text": "Five habits of people who get good results"
    },
    {
      "t": "steps",
      "items": [
        "<b>Be specific.</b> \"Make it better\" gives the model nothing to aim at. \"Make it shorter and suitable for a WhatsApp group\" does.",
        "<b>Say what to do, not only what to avoid.</b> \"Use plain language a first-year student understands\" works better than \"don't be too technical\".",
        "<b>Explain why.</b> \"Keep it short because students read it on their phones\" helps the model make good decisions you did not anticipate.",
        "<b>Refine in the same chat.</b> The first answer is a draft. Follow up: \"shorter\", \"more formal\", \"add a Saudi example\", \"turn this into a table\".",
        "<b>Let it ask you.</b> For complex tasks end with: \"Before you start, ask me up to 5 questions you need answered to do this well.\""
      ]
    },
    {
      "t": "saudi",
      "title": "Getting good Arabic output",
      "html": "State the variety and register you want: \"Modern Standard Arabic, formal academic tone\" or \"clear Arabic suitable for a student announcement\". For technical courses, ask it to keep the English term in brackets after the Arabic term the first time it appears. Review Arabic output as carefully as English: terminology and grammar can slip."
    },
    {
      "t": "warn",
      "title": "A common trap",
      "html": "Very long prompts full of rules are not automatically better. Contradictory or buried instructions confuse the model. Keep each block short and clear, and put the most important instruction where it cannot be missed."
    }
  ],
  "examples": [
    {
      "t": "compare",
      "title": "Explaining a concept",
      "weak": "Explain database normalization.",
      "strong": "Role: You are an experienced university lecturer in [your discipline].\nContext: My students are second-year undergraduates at a Saudi university. Many find [concept] abstract. The lecture is 50 minutes.\nTask: Explain [concept] with one everyday analogy and one example from a Saudi organization (for example a hospital, a bank or a university registration system).\nConstraints: Under 250 words. Define every technical term the first time it appears.\nFormat: A short explanation, then the analogy, then the example, then two check-your-understanding questions.",
      "why": "Every block is present. The model now knows the level, the time, the setting and exactly what shape you want back."
    },
    {
      "t": "compare",
      "title": "A message to students",
      "weak": "Write an email about the midterm.",
      "strong": "Write a short announcement for my [course code] students about the midterm exam.\nDetails: [date], [time], [room], covers chapters [x–y], closed book, bring university ID.\nTone: friendly but clear. Audience: undergraduates who will read it on their phones.\nFormat: a subject line, then no more than 6 short lines. Write it in English, then the same message in Arabic.",
      "why": "Facts come from you, not the model, so nothing is invented. Tone, audience and length are explicit."
    },
    {
      "t": "prompt",
      "title": "Follow-up prompts to refine any answer",
      "text": "Make it 30% shorter without losing the key points.\nRewrite it for students whose English is intermediate.\nAdd one example from a Saudi context.\nTurn this into a table with columns: [A], [B], [C].\nWhat is the weakest part of your answer? Improve it."
    }
  ],
  "tasks": [
    {
      "title": "Build a prompt for a real task this week",
      "html": "Open the <a href=\"lab.html\">Prompt Lab</a>. Choose a real task you have this week (a handout, an explanation, an announcement, a class activity). Fill in the blocks, watch the quality checklist, then copy the prompt into your AI tool.",
      "check": [
        "My prompt has at least role, context, task and format.",
        "I replaced every [placeholder] with real details.",
        "I ran it and refined the answer with at least two follow-up prompts.",
        "I saved the best version of my prompt in my notes for reuse."
      ]
    },
    {
      "title": "Let the AI interview you",
      "html": "For a larger task (for example, designing a class activity), end your prompt with the \"ask me questions first\" line. Answer its questions, then let it produce the result.",
      "check": [
        "The AI asked me questions I had not thought to answer.",
        "The final result was more specific than a one-shot answer would have been."
      ]
    },
    {
      "title": "Twin step 1: collect three samples of your own writing",
      "html": "From today you start building a <b>personal teaching assistant</b> that writes in your voice. It is for your own work only. It is never student-facing and it never acts alone. First step: collect three samples of <b>your own</b> writing, each 100 to 300 words, for example a course announcement, an email to a colleague and a piece of written feedback. Remove every student name, ID and other personal detail. Save them in one document called \"My voice samples\". You will use them tomorrow.",
      "check": [
        "I chose three different kinds of writing that I wrote myself.",
        "I removed all student names, IDs and personal details from the samples.",
        "I saved the samples in one document I can find tomorrow."
      ]
    }
  ],
  "quiz": [
    {
      "q": "Which block tells the model who the output is for?",
      "o": [
        "Role",
        "Constraints",
        "Format",
        "Context"
      ],
      "a": 3,
      "why": "Context covers the situation and the audience. Role is who the AI acts as."
    },
    {
      "q": "Which instruction is most useful?",
      "o": [
        "\"Don't be too technical.\"",
        "\"Use plain language a first-year student understands, and define each technical term.\"",
        "\"Make it good.\"",
        "\"Be professional.\""
      ],
      "a": 1,
      "why": "It says what to do, for whom, and how. Negative or vague instructions leave the model guessing."
    },
    {
      "q": "The first answer is close but too long and too formal. What should you do?",
      "o": [
        "Start a new chat and write the whole prompt again",
        "Accept it and edit everything by hand",
        "Follow up in the same chat: \"Half the length, friendlier tone.\"",
        "Switch to a different tool"
      ],
      "a": 2,
      "why": "Refining in the same chat keeps the context and is the fastest route to a good result."
    },
    {
      "q": "When should you include all six building blocks?",
      "o": [
        "When the output matters, for example anything students will see",
        "Never; short prompts are always best",
        "Always, for every request",
        "Only when writing in Arabic"
      ],
      "a": 0,
      "why": "Match the effort to the stakes. A quick rewrite needs little; an exam needs everything."
    },
    {
      "q": "Why add \"Before you start, ask me up to 5 questions\"?",
      "o": [
        "It makes the model work faster",
        "It is required by all tools",
        "It surfaces missing context before the model guesses",
        "It prevents all hallucinations"
      ],
      "a": 2,
      "why": "The model knows what information a task typically needs. Letting it ask fills your gaps."
    },
    {
      "q": "In an announcement prompt, where should the exam date and room come from?",
      "o": [
        "From you, written in the prompt",
        "From the model's knowledge of your university",
        "The model will look them up online",
        "It does not matter"
      ],
      "a": 0,
      "why": "Facts you supply cannot be hallucinated. Let the model handle wording, not facts."
    }
  ],
  "cards": [
    {
      "f": "Prompt engineering",
      "b": "Writing clear instructions that get useful, reliable output from an AI model."
    },
    {
      "f": "The six building blocks of a prompt",
      "b": "Role, context, task, constraints, format, examples (optional)."
    },
    {
      "f": "Why explain the reason behind an instruction?",
      "b": "It helps the model make good choices in situations you did not anticipate."
    },
    {
      "f": "Best way to fix a nearly-right answer",
      "b": "Refine with a short follow-up in the same chat."
    },
    {
      "f": "How to get good Arabic output",
      "b": "State the variety and tone (for example, formal MSA) and ask for English terms in brackets."
    }
  ]
};
