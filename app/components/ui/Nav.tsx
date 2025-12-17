import React from "react";

export function Nav() {
  const links = ["about", "projects", "experience", "skills", "contact"];
  return (
    <nav className="w-full py-4 bg-black/30 backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="text-white font-bold">Yash Tiwari</div>
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="text-neutral-300 hover:text-white">
              {l[0].toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
