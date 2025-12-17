// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b-3 border-black py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-black hover:text-main transition-colors uppercase tracking-tighter">
        YREVASH
      </Link>
      
      <div className="flex gap-6 font-bold text-sm md:text-base">
        <a href="#home" className="hover:underline decoration-4 decoration-main underline-offset-4">
          Home
        </a>
        <a href="#experience" className="hover:underline decoration-4 decoration-accent underline-offset-4">
          Work
        </a>
        <a href="https://github.com/yrevash" target="_blank" className="hover:underline decoration-4 decoration-secondary underline-offset-4">
          GitHub
        </a>
      </div>
    </nav>
  );
}