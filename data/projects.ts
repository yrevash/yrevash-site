export const PROJECTS = [
  {
    title: 'Aadhaar Processing API',
    description:
      'High-performance document processing system with Redis-based model caching and distributed memory management. Automated Aadhaar card detection using YOLOv8 + multilingual OCR achieving 95%+ verification accuracy. Async FastAPI service with sub-second inference latency, reducing manual processing by 80%.',
    tags: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'Tesseract', 'Redis'],
    highlight: true,
  },
  {
    title: 'Autonomous Car (Raspberry Pi)',
    description:
      'Miniature self-driving car using Raspberry Pi, Pi Camera, ultrasonic, and IR sensors for perception and navigation. Implemented lane detection and obstacle avoidance with OpenCV and sensor fusion. Real-time decision-making for path planning in structured environments.',
    tags: ['Python', 'OpenCV', 'Raspberry Pi', 'IR Sensors', 'Linux'],
    highlight: false,
  },
  {
    title: 'Real-Time Gesture Processing System',
    description:
      'High-performance gesture processing system for professional musicians and live performers. Ported Paura Gestures Library to Avendish runtime with optimized C++ implementations achieving sub-millisecond latency for critical live performance scenarios.',
    tags: ['C++', 'Real-time', 'GSoC', 'Audio', 'Avendish'],
    highlight: false,
  },
]
