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
      'Developed a software verification agent to verify over 10k users daily.',
      'Implemented a custom verification pipeline to enhance verification and data processing within seconds.',
    ],
    startDate: 'Dec 2025',
    endDate: 'Present',
    link: 'https://qoneqt.com',
  },
  {
    id: '2',
    company: 'Qoneqt · Thane',
    role: 'Artificial Intelligence Engineer',
    description: [
      'Architected and deployed a scalable Aadhaar authentication pipeline serving 20,000+ users on a social media platform, raising verification accuracy from 28% to 95% and reducing manual review time by 80%.',
      'Led cross-functional design discussions with frontend, backend, and QA teams to architect NLP-to-automation pipeline.',
      'Deployed an LLM-powered mobile-app testing agent with Ollama and Maestro across distributed Linux servers, boosting CI pipeline throughput by 40% and detecting 3× more critical bugs pre-release.',
    ],
    startDate: 'Jun 2025',
    endDate: 'Sep 2025',
    link: 'https://qoneqt.com',
  },
  {
    id: '3',
    company: 'Google Summer of Code · SAT',
    role: 'Software Developer',
    description: [
      'Architected a high-performance real-time gesture processing system for professional musicians and live performers, porting Paura Gestures Library to Avendish runtime with optimized C++ implementations achieving sub-millisecond latency for critical live performance scenarios.',
    ],
    startDate: 'May 2025',
    endDate: 'Sep 2025',
    link: 'https://summerofcode.withgoogle.com',
    contributionLink: 'https://sat-mtl.gitlab.io/collaborations/google-summer-of-code/posts/2025-contributions/work-product-2025-yashtiwari9182-puara-analysis-processors/',
  },
  {
    id: '4',
    company: "Stamp 'IT Robotai & Solutions Pvt. Ltd · Thane",
    role: 'Embedded Software Engineer',
    description: [
      'Optimized deep learning inference pipeline on resource-constrained Raspberry Pi hardware, achieving 30+ FPS YOLO object detection at 720p through model quantization, memory optimization, and efficient C++ implementation using TensorFlow Lite.',
      'Built comprehensive Qt-based desktop CAD application for complex manufacturing processes, integrating real-time camera calibration, visualization tools, and automated geometric optimization workflows, reducing deployment setup time by 50%.',
    ],
    startDate: 'Mar 2025',
    endDate: 'May 2025',
    link: '',
  },
]

export default PAST_ROLES
