const PAST_ROLES: {
  id: string
  company: string
  role: string
  description: string[]
  startDate: string
  endDate: string
  link?: string
  contributionLink?: string
}[] = [
  {
    id: '1',
    company: 'Qoneqt',
    role: 'Software Engineer',
    description: [
      'Shipping AI agents for platform integrations and user verification. They quietly chew through 20,000+ verifications a day.',
      'Built out per-user personalized agents that now run for 250,000+ users on the platform.',
    ],
    startDate: 'Dec 2025',
    endDate: 'Feb 2026',
    link: 'https://qoneqt.com',
  },
  {
    id: '2',
    company: 'Qoneqt · Thane',
    role: 'Artificial Intelligence Engineer',
    description: [
      'Rebuilt the Aadhaar authentication pipeline from the ground up. Accuracy jumped from 48% to 95% and manual review time dropped by about 80%.',
      'Put together an LLM-powered mobile app testing agent with Ollama + Maestro that catches 3× more critical bugs before release.',
    ],
    startDate: 'Jun 2025',
    endDate: 'Sep 2025',
    link: 'https://qoneqt.com',
  },
  {
    id: '3',
    company: 'Google Summer of Code · SAT Montreal',
    role: 'Software Developer',
    description: [
      'Worked with SAT Montreal on porting the Puara Gestures library to the Avendish runtime so musicians and live performers could use it on stage without latency getting in the way.',
    ],
    startDate: 'May 2025',
    endDate: 'Sep 2025',
    link: 'https://summerofcode.withgoogle.com',
    contributionLink: 'https://sat-mtl.gitlab.io/collaborations/google-summer-of-code/posts/2025-contributions/work-product-2025-yashtiwari9182-puara-analysis-processors/',
  },
  {
    id: '4',
    company: "Stamp 'IT · Thane",
    role: 'Software Engineer',
    description: [
      'Squeezed a YOLO detection pipeline down to run at 30+ FPS on a Raspberry Pi at 720p. Mostly quantization, some memory tricks, and a lot of profiling.',
      'Built a Qt-based desktop CAD tool with real-time camera calibration and automated geometric optimization that cut their deployment setup time in half.',
    ],
    startDate: 'Mar 2025',
    endDate: 'May 2025',
    link: '',
  },
]

export default PAST_ROLES
