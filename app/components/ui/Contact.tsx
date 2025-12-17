import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Insane
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you need AI infrastructure, computer vision solutions, or just want to discuss the future of robotics - I'm all ears.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="mailto:yashtiwari9182@gmail.com"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-3"
          >
            <Mail className="w-5 h-5" />
            yashtiwari9182@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: FileText, label: 'Resume', href: '#' },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-110"
            >
              <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <p className="text-gray-300 text-lg">
            📍 Based in <span className="text-cyan-400 font-semibold">Thane, Maharashtra</span>
          </p>
          <p className="text-gray-400 mt-2">Open to remote opportunities worldwide</p>
        </div>
      </div>
    </section>
  );
}
