window.DAYS = window.DAYS || {};
DAYS[3] = {
  "title": "Advanced prompting techniques",
  "intro": "The six building blocks get you good results. Today's techniques get you <i>consistent</i> results on harder tasks: showing examples, separating your material from your instructions, asking for reasoning, breaking big jobs into steps, and making the AI check its own work.",
  "goals": [
    "Use examples (few-shot prompting) to control style and quality.",
    "Separate instructions from material with clear markers.",
    "Break a complex task into a chain of smaller prompts.",
    "Make the model critique and improve its own output against criteria."
  ],
  "plan": {
    "learn": 13,
    "examples": 9,
    "practice": 18,
    "quiz": 5
  },
  "learn": [
    {
      "t": "h",
      "text": "1. Show, don't just tell: few-shot prompting"
    },
    {
      "t": "p",
      "html": "Describing the style you want is hard; showing it is easy. Paste one to three examples of what \"good\" looks like, and the model will match their level, length and style. This is called <b>few-shot prompting</b> (zero-shot means no examples). Use examples you wrote yourself, and vary them so the model copies the pattern, not the topic."
    },
    {
      "t": "h",
      "text": "2. Separate your material from your instructions"
    },
    {
      "t": "p",
      "html": "When you paste a syllabus, a paragraph or a student's (anonymized) answer, wrap it in clear markers such as <code>&lt;document&gt; … &lt;/document&gt;</code> or triple quotes. Then refer to it by name: \"Using only the text in &lt;document&gt;…\". This stops the model from confusing your material with your instructions, and lets you pass several pieces at once."
    },
    {
      "t": "h",
      "text": "3. Ask for reasoning when the task needs it"
    },
    {
      "t": "p",
      "html": "For analysis, judgment or multi-step problems, ask the model to work through the problem before it answers, for example: \"First list the criteria, then evaluate each option, then give your recommendation.\" Reasoning (\"thinking\") modes do much of this automatically; turn them on for hard problems. Either way, ask to see the reasoning when you need to check it."
    },
    {
      "t": "h",
      "text": "4. Chain prompts for big jobs"
    },
    {
      "t": "p",
      "html": "One giant prompt (\"design my whole course\") gives shallow results. <b>Prompt chaining</b> breaks the job into steps, and you review each result before the next step: outline → you approve → detail each week → you approve → activities → assessment. You stay in control, and errors are caught early."
    },
    {
      "t": "h",
      "text": "5. Make it check its own work"
    },
    {
      "t": "p",
      "html": "Give explicit criteria and ask for a critique: \"Check your questions against these criteria: one correct answer only; plausible distractors; no 'all of the above'. List problems, then give a corrected version.\" Self-review catches many issues, but not all. It does not replace your review."
    },
    {
      "t": "h",
      "text": "6. Give it permission not to know"
    },
    {
      "t": "p",
      "html": "Models try to be helpful, which pushes them to answer even when they should not. Add: \"If the information is not in the text I gave you, or you are not sure, say so instead of guessing.\" This one line noticeably reduces invented answers."
    },
    {
      "t": "tip",
      "title": "Role-play your students",
      "html": "Ask the model to act as a student with a specific misconception, then practice explaining. Or ask: \"What are the three most common misconceptions students have about [concept], and what question would reveal each one?\""
    }
  ],
  "examples": [
    {
      "t": "prompt",
      "title": "Few-shot: questions in your own style",
      "text": "Write 5 new short-answer questions on [topic] for my [course] students. Match the level, length and style of my examples below. Vary the topics; do not copy the examples.\n\n<example>\n[Paste a question you wrote]\n</example>\n<example>\n[Paste a second question]\n</example>\n\nAfter each question, give a model answer in 2–3 sentences."
    },
    {
      "t": "prompt",
      "title": "Separating material: grounded questions",
      "text": "Using only the text inside <document>, write 4 discussion questions that require students to apply the ideas, not just recall them. If the text does not support a question, do not write it.\n\n<document>\n[Paste the reading, a section of your notes, or a case]\n</document>"
    },
    {
      "t": "prompt",
      "title": "Prompt chain: step 1 of a lab session design",
      "text": "We will design a 90-minute practical session together in steps. Do only step 1 now.\nStep 1: Propose 3 different session outlines for [topic] in [course], each with a one-line rationale. Students: [level]. Available: [lab / computers / nothing special].\nWait for me to choose one before going on.",
      "after": "Next prompts: \"Detail outline 2 minute by minute.\" → \"Write the student worksheet.\" → \"Write 3 exit-ticket questions.\""
    },
    {
      "t": "prompt",
      "title": "Self-critique against criteria",
      "text": "Review the questions you just wrote against these criteria:\n1. Exactly one correct answer.\n2. Distractors are plausible and based on real misconceptions.\n3. No \"all of the above\" or \"none of the above\".\n4. Clear language, no clues to the answer.\nFor each question, state which criteria it fails, then give a corrected version."
    }
  ],
  "tasks": [
    {
      "title": "Optional extra: upgrade yesterday's prompt",
      "html": "Short on time? Skip this task; the chain task and the twin step matter more. Otherwise take the prompt you built on Day 2 and add at least two of today's techniques. Run both versions and compare.",
      "check": [
        "I added at least two techniques (examples, markers, reasoning, chaining, self-critique, permission not to know).",
        "I ran the old and new versions and noted which was better and why."
      ]
    },
    {
      "title": "Run a three-step chain",
      "html": "Use the lab session chain above (or design your own chain for a real task). Review the output after each step before moving on.",
      "check": [
        "I completed at least three steps, checking each one.",
        "At least once, I corrected or redirected the AI between steps.",
        "I ran a self-critique on the final output with my own criteria."
      ]
    },
    {
      "title": "Twin step 2: build your voice profile",
      "html": "Paste your three voice samples from Day 2 into your AI tool with the prompt below. Use only your own writing, with no student data.",
      "blocks": [
        {
          "t": "prompt",
          "title": "Voice profile from my samples",
          "text": "Below are three samples of my own writing, in <samples> tags.\n<samples>\n[Paste sample 1]\n---\n[Paste sample 2]\n---\n[Paste sample 3]\n</samples>\nTask: Write a one-page voice profile (style guide) that would let an assistant write like me.\nInclude: tone, typical sentence length, vocabulary I like and avoid, how I open and close messages, how I give feedback, and three short quotes from the samples that show my style.\nConstraints: Describe only what is visible in the samples. If something is unclear, say \"not enough evidence\" instead of guessing.\nFormat: headed sections with bullet points.\nAfter you finish, I will test it by asking you to write a short announcement in this voice."
        }
      ],
      "check": [
        "The profile describes my writing, and I corrected anything that did not sound like me.",
        "Every quote in the profile really appears in my samples.",
        "I tested it with a short announcement and noted what still sounded off.",
        "I saved the final voice profile in a file called \"Twin v0.1 - voice\"."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What is few-shot prompting?",
      "o": [
        "Sending several short prompts quickly",
        "Including a few examples of the output you want",
        "Limiting the answer to a few words",
        "Using the model a few times a day"
      ],
      "a": 1,
      "why": "Examples show the level and style you want far more precisely than a description."
    },
    {
      "q": "Why wrap pasted material in markers such as <document>…</document>?",
      "o": [
        "It encrypts the text",
        "It is required for Arabic text",
        "It separates your material from your instructions so the model does not confuse them",
        "It makes the answer shorter"
      ],
      "a": 2,
      "why": "Clear boundaries tell the model which text to work on and which text is instruction."
    },
    {
      "q": "You want to design a full course unit. Which approach usually works best?",
      "o": [
        "A chain of prompts, reviewing each step before the next",
        "One very long prompt asking for everything",
        "Asking three tools and merging the answers",
        "Letting the AI decide without your input"
      ],
      "a": 0,
      "why": "Chaining gives depth at each step and keeps you in control of the direction."
    },
    {
      "q": "Which line reduces invented answers when working from a document?",
      "o": [
        "\"Be creative.\"",
        "\"Answer as fully as possible.\"",
        "\"If it is not in the text, or you are not sure, say so instead of guessing.\"",
        "\"Use your general knowledge freely.\""
      ],
      "a": 2,
      "why": "Giving the model an explicit way out makes it less likely to fill gaps with guesses."
    },
    {
      "q": "What is true about asking the model to critique its own output?",
      "o": [
        "It catches many issues, especially with explicit criteria, but does not replace your review",
        "It is useless",
        "It guarantees the output is correct",
        "It only works in English"
      ],
      "a": 0,
      "why": "Self-critique improves quality, but the final check is always yours."
    },
    {
      "q": "When is a reasoning (\"thinking\") mode most worth turning on?",
      "o": [
        "For a quick rewording of a sentence",
        "Never; it always gives worse answers",
        "Only for translation",
        "For complex analysis or multi-step problems"
      ],
      "a": 3,
      "why": "Reasoning modes spend extra steps on the problem: slower, but stronger on hard tasks."
    }
  ],
  "cards": [
    {
      "f": "Few-shot vs zero-shot prompting",
      "b": "Few-shot includes examples of the desired output; zero-shot gives none."
    },
    {
      "f": "Why use markers like <document>?",
      "b": "To separate your material from your instructions and refer to it clearly."
    },
    {
      "f": "Prompt chaining",
      "b": "Breaking a big task into steps, reviewing each result before the next prompt."
    },
    {
      "f": "Self-critique prompt",
      "b": "Ask the model to check its output against explicit criteria, list problems, then fix them."
    },
    {
      "f": "The \"permission not to know\" line",
      "b": "\"If it is not in the text or you are not sure, say so.\" Reduces invented answers."
    }
  ]
};
