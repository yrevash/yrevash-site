import { Zap, Cpu, Eye, Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-6 flex items-center gap-4">
          <Zap className="text-yellow-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a <span className="text-cyan-400 font-semibold">Mechatronics Engineer</span> obsessed with building AI systems that actually work in the real world. 
              From architecting scalable authentication pipelines serving 20K+ users to deploying ML agents on distributed systems, I thrive at the intersection of software and hardware.
            </p>
            <p>
              Currently pushing the boundaries of <span className="text-purple-400 font-semibold">computer vision</span>, 
              <span className="text-pink-400 font-semibold"> autonomous systems</span>, and 
              <span className="text-cyan-400 font-semibold"> embedded AI</span>. 
              Whether it's achieving 95% verification accuracy or optimizing YOLO for 30+ FPS on a Raspberry Pi, I love making the impossible possible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Cpu, label: '20K+ Users Served', color: 'cyan' },
              { icon: Eye, label: '95% Accuracy', color: 'purple' },
              { icon: Code, label: '30+ FPS Inference', color: 'pink' },
              { icon: Zap, label: '80% Time Saved', color: 'yellow' },
            ].map((stat, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-500/5 border border-${stat.color}-500/20 hover:scale-105 transition-transform`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}-400 mb-3`} />
                <p className="font-bold text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
