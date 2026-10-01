window.DAYS = window.DAYS || {};
DAYS[1] = {
  "title": "How AI models work",
  "intro": "Before writing better prompts, you need an accurate picture of what is on the other side of the chat box. Today you learn what a large language model does, the terms you will meet all course long, and where these tools help or mislead academics.",
  "goals": [
    "Explain in two sentences what a large language model does.",
    "Use the terms token, context window, training cutoff and hallucination correctly.",
    "Decide which university tasks suit AI, and which need your judgment."
  ],
  "plan": {
    "learn": 15,
    "examples": 8,
    "practice": 15,
    "quiz": 5
  },
  "learn": [
    {
      "t": "p",
      "html": "A <b>large language model (LLM)</b> is trained on a very large amount of text to do one thing extremely well: predict what text should come next. When you ask a question, it does not look the answer up in a verified database. It generates the most plausible continuation, one small piece at a time."
    },
    {
      "t": "p",
      "html": "This single fact explains both sides of the tool. It is excellent at language work: drafting, rewriting, summarizing, translating, restructuring and generating variations. It is also able to produce text that <i>sounds</i> right but is wrong, with the same confident tone."
    },
    {
      "t": "analogy",
      "html": "Imagine a new teaching assistant who has read an enormous library, writes fast in many languages, never gets tired — but has no access to your files, cannot always tell what it remembers from what it is guessing, and rarely says \"I'm not sure\" unless you invite it to. You would give this assistant clear instructions and check its work before it reaches students. That is exactly the relationship to build."
    },
    {
      "t": "h",
      "text": "Terms you will meet all course long"
    },
    {
      "t": "table",
      "head": [
        "Term",
        "What it means",
        "Why it matters to you"
      ],
      "rows": [
        [
          "<b>Token</b>",
          "A small chunk of text, often part of a word, that the model reads and writes.",
          "Length limits and usage limits are counted in tokens. Arabic text often uses more tokens than the same content in English."
        ],
        [
          "<b>Context window</b>",
          "How much text the model can take into account at once: your prompt, attached files and the conversation so far.",
          "In very long chats, early details get less attention. Start a new chat for a new task."
        ],
        [
          "<b>Training cutoff</b>",
          "The date after which the model has no built-in knowledge.",
          "For recent regulations, events or publications, use a tool with web search and check its sources."
        ],
        [
          "<b>Hallucination</b>",
          "Fluent output that is false: invented references, numbers, quotations or facts.",
          "Verify anything you will publish, teach as fact, or use for a decision."
        ],
        [
          "<b>Randomness</b>",
          "The same prompt can give different answers each time.",
          "Regenerate to see alternatives. One answer is a sample, not \"the\" answer."
        ],
        [
          "<b>Multimodal</b>",
          "Able to read images, PDFs and sometimes audio, not only typed text.",
          "You can upload a chart, a scanned page or a slide and ask about it."
        ],
        [
          "<b>Reasoning model</b>",
          "A model or mode that works through a problem in extra steps before answering (often labelled \"thinking\").",
          "Better for complex analysis and multi-step problems; slower for simple requests."
        ]
      ]
    },
    {
      "t": "h",
      "text": "The three tools in this course"
    },
    {
      "t": "p",
      "html": "<b>Gemini</b> (Google), <b>ChatGPT</b> (OpenAI) and <b>Claude</b> (Anthropic) can all chat, read files, write and analyze. This course teaches principles that work in all three. When a feature has a different name in each tool, we say so. Model names, features and plan limits change often, so check each tool's help pages when something looks different on your screen."
    },
    {
      "t": "h",
      "text": "Where AI helps, and where it needs you"
    },
    {
      "t": "table",
      "head": [
        "Usually a good fit",
        "Needs your checking or judgment"
      ],
      "rows": [
        [
          "Drafting and rewriting: emails, announcements, handouts",
          "Facts, statistics, dates and citations"
        ],
        [
          "Summarizing and restructuring long text you provide",
          "Recent regulations or events (without web search)"
        ],
        [
          "Generating variations: questions, examples, cases",
          "Answer keys and calculations"
        ],
        [
          "Explaining a concept at different levels",
          "Final grades and decisions about students"
        ],
        [
          "Translating and adjusting tone between Arabic and English",
          "Anything confidential or personal"
        ]
      ]
    },
    {
      "t": "tip",
      "title": "The \"jagged frontier\"",
      "html": "AI performance is uneven. It can do something that looks hard (restructure a 40-page report) and fail at something that looks easy (count the words in a paragraph exactly, or do precise arithmetic without a calculation tool). The only reliable way to know is to test it on <i>your</i> tasks."
    },
    {
      "t": "warn",
      "title": "You remain the author",
      "html": "Treat every output as a first draft from a fast assistant, not as an authority. Whatever you send to students or submit to your department carries your name."
    }
  ],
  "examples": [
    {
      "t": "compare",
      "weak": "Tell me about AI in education.",
      "strong": "I teach [course name] to [first-year / final-year] students in [your discipline] at a Saudi university. Give me 5 concrete ways I could use an AI chat tool to prepare my classes next week. For each: one sentence on what to do, and one sentence on what I must check myself.",
      "why": "The strong version says who you are, who your students are, what you want, how many, and in what shape. Tomorrow you will learn these as the building blocks of every good prompt."
    },
    {
      "t": "prompt",
      "title": "Hallucination test",
      "before": "Run this in a tool <i>without</i> web search turned on, then check two of the references yourself.",
      "text": "List five peer-reviewed journal articles published since 2020 about [a topic in your field]. Give full references in APA style, including DOIs.",
      "after": "Search each title in Google Scholar or the Saudi Digital Library. Invented or mixed-up references are one of the most common ways AI misleads academics."
    },
    {
      "t": "prompt",
      "title": "Ask for its limits",
      "text": "I am going to use you to help prepare teaching materials in [your discipline]. What kinds of mistakes are you most likely to make in this field? Be specific, and tell me how I can catch each one."
    }
  ],
  "tasks": [
    {
      "title": "Same question, two tools",
      "html": "Run the strong prompt from the examples above in two different tools. If you only have one tool, run it twice in two new chats. Then compare the answers.",
      "check": [
        "I ran the prompt twice (two tools, or two new chats).",
        "I noticed at least one real difference in content or structure.",
        "I found at least one statement I would need to verify before using it.",
        "I wrote in my notes which answer I preferred, and why."
      ]
    },
    {
      "title": "Hallucination hunt",
      "html": "Run the hallucination test prompt, then check two references in a scholarly database.",
      "check": [
        "I checked two references in Google Scholar, the Saudi Digital Library or a publisher's site.",
        "For each, I noted whether it exists and whether the authors, year, journal and DOI match."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What does a large language model fundamentally do when it answers you?",
      "o": [
        "Generates the most plausible next text, based on patterns learned in training",
        "Searches a verified database of facts",
        "Copies the most popular answer from the internet",
        "Applies logic rules written by subject experts"
      ],
      "a": 0,
      "why": "LLMs predict likely continuations. That is why they write fluently and can also be confidently wrong."
    },
    {
      "q": "The \"context window\" is…",
      "o": [
        "the list of websites the model was trained on",
        "your chat history, saved forever in your account",
        "the part of the screen where answers appear",
        "how much text the model can take into account at once"
      ],
      "a": 3,
      "why": "It covers your prompt, attached files and the conversation so far. Very long chats dilute attention to early details."
    },
    {
      "q": "An AI tool gave you a perfectly formatted list of references. What is the best next step?",
      "o": [
        "Use them; the formatting shows they are real",
        "Check each one in a scholarly database or on the publisher's site",
        "Ask the same tool whether they are real",
        "Delete the DOIs and keep the rest"
      ],
      "a": 1,
      "why": "Formatting proves nothing, and asking the model to check itself is not reliable. Only an independent source can confirm a reference."
    },
    {
      "q": "Why can the same prompt give different answers?",
      "o": [
        "Answers are stored and rotated",
        "The servers were overloaded",
        "The model uses randomness when it generates text",
        "Your account has a lower priority"
      ],
      "a": 2,
      "why": "Generation involves sampling, so each run is a new draft. Use this: regenerate to get alternatives."
    },
    {
      "q": "Which task should NOT be left to AI without your judgment?",
      "o": [
        "Deciding a student's final grade",
        "Suggesting ten ideas for practice questions",
        "Rewriting a course announcement more clearly",
        "Summarizing your own lecture notes"
      ],
      "a": 0,
      "why": "AI can help you draft and organize, but decisions about students are your professional responsibility."
    },
    {
      "q": "You need information about a regulation announced last month. What should you do?",
      "o": [
        "Trust the model's answer if it sounds confident",
        "Ask the model to try harder",
        "Use a tool with web search on, then open and check its sources",
        "Rephrase the question until it answers"
      ],
      "a": 2,
      "why": "Recent events may be after the training cutoff. Web search helps, but you still open the sources, preferably official ones."
    }
  ],
  "cards": [
    {
      "f": "What is a large language model (LLM)?",
      "b": "A model trained on huge amounts of text to predict the next token. It generates plausible text, not verified facts."
    },
    {
      "f": "Token",
      "b": "A small chunk of text (often part of a word). Limits are counted in tokens; Arabic often uses more tokens than English."
    },
    {
      "f": "Context window",
      "b": "How much text the model can take into account at once. Start a new chat for a new task."
    },
    {
      "f": "Hallucination",
      "b": "Fluent but false output, such as invented references or numbers. Verify before you use."
    },
    {
      "f": "Training cutoff",
      "b": "The date after which the model has no built-in knowledge. Use web search for recent information."
    }
  ]
};
