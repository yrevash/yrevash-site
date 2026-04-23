export const PROJECTS = [
  {
    title: 'Aadhaar AI Verification System',
    description:
      'A KYC pipeline that reads Aadhaar documents with a vision-language model (Qwen3-VL on Ollama) and matches faces with DeepFace. Runs as an async FastAPI service with Redis caching, sits around sub-second latency, and handles 20,000+ verifications a day. Took manual review work down by roughly 80%.',
    tags: ['Python', 'FastAPI', 'Qwen3-VL', 'YOLO', 'DeepFace', 'Redis', 'Ollama'],
    highlight: true,
  },
  {
    title: 'Qoneqt Agent Network',
    description:
      'The AI layer behind Qoneqt, running for 250k+ users. Personal chat agents on GPT-4o-mini with per-user prompts, a RAG-powered memory vault on Qdrant, and a pgvector recommendation engine using HNSW. An LLM router with a circuit breaker shuffles work between external GPT-4o and a local vLLM+Qwen3-VL to keep cost and latency in check.',
    tags: ['Python', 'FastAPI', 'GPT-4o', 'Qwen3-VL', 'vLLM', 'Qdrant', 'pgvector', 'Redis'],
    highlight: true,
  },
  {
    title: 'LLM-Powered Mobile App Testing Agent',
    description:
      'Fine-tuned Mistral-7B with LoRA on 10k+ instruction/YAML pairs so you can describe a test in plain English and get back a valid Maestro script. Wired into the CI flow, it ended up surfacing 3× more critical bugs before release.',
    tags: ['Python', 'Mistral-7B', 'LoRA', 'Ollama', 'Maestro', 'Docker'],
    highlight: false,
  },
  {
    title: 'Real-Time Gesture Processing System',
    description:
      'My GSoC project with SAT Montreal. Ported the Puara Gestures library to Avendish, tightened it up in C++, and got the latency low enough that musicians could actually use it live on stage.',
    tags: ['C++', 'Real-time', 'GSoC', 'Audio', 'Avendish'],
    highlight: false,
  },
]
