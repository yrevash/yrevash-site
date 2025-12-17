import { Zap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Qoneqt',
      role: 'Software Engineer',
      period: 'Dec 2025 - Present',
      highlights: [
        'Developed software verification agent processing 10K+ users daily',
        'Implemented custom verification pipeline with seconds-level processing',
      ],
      color: 'cyan',
    },
    {
      company: 'Qoneqt',
      role: 'AI Engineer',
      period: 'Jun 2025 - Sep 2025',
      highlights: [
        'Architected Aadhaar authentication pipeline serving 20K+ users',
        'Raised verification accuracy from 28% to 95%, reducing manual review by 80%',
        'Deployed LLM-powered testing agent boosting CI throughput by 40%',
      ],
      color: 'purple',
    },
    {
      company: 'Google Summer of Code - SAT',
      role: 'Software Developer',
      period: 'May 2025 - Sep 2025',
      highlights: [
        'Built real-time gesture processing system for professional musicians',
        'Achieved sub-millisecond latency with optimized C++ implementations',
      ],
      color: 'pink',
    },
    {
      company: 'Stamp IT Robotai & Solutions',
      role: 'Embedded Software Engineer',
      period: 'Mar 2025 - May 2025',
      highlights: [
        'Optimized deep learning inference achieving 30+ FPS YOLO on Raspberry Pi',
        'Built Qt-based CAD application reducing deployment time by 50%',
      ],
      color: 'yellow',
    },
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-24 group">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-${exp.color}-400 border-4 border-black group-hover:scale-150 transition-transform`} />
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group-hover:border-white/30 transition-all hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className={`text-${exp.color}-400 font-semibold`}>{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <Zap className={`w-4 h-4 text-${exp.color}-400 mt-1 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
