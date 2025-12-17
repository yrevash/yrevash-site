import { Terminal } from 'lucide-react';

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
          <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            YT
          </span>
        </div>
        <div className="flex gap-8 text-sm">
          {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
