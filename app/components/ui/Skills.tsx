import { Eye, Code, Cpu, Rocket } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'AI & ML',
      skills: ['TensorFlow', 'PyTorch', 'YOLOv8', 'OpenCV', 'scikit-learn', 'Tesseract OCR'],
      icon: Eye,
      color: 'cyan',
    },
    {
      title: 'Programming',
      skills: ['Python', 'C++', 'C', 'JavaScript', 'Embedded C'],
      icon: Code,
      color: 'purple',
    },
    {
      title: 'Robotics',
      skills: ['ROS', 'Arduino', 'Raspberry Pi', 'Qt', 'Sensor Fusion'],
      icon: Cpu,
      color: 'pink',
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Git', 'Linux', 'GCP', 'FastAPI', 'Flask', 'Redis'],
      icon: Rocket,
      color: 'yellow',
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-cyan-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-500/5`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-400`} />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full bg-${category.color}-500/10 border border-${category.color}-500/30 text-${category.color}-300 font-medium hover:bg-${category.color}-500/20 transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
