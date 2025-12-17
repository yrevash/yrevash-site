// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b-3 border-black py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-black hover:text-main transition-colors uppercase tracking-tighter">
        YREVASH
      </Link>
      
      <div className="flex gap-6 font-bold text-sm md:text-base">
        <Link href="/" className="hover:underline decoration-4 decoration-main underline-offset-4">
          Home
        </Link>
        <Link href="/work" className="hover:underline decoration-4 decoration-accent underline-offset-4">
          Work
        </Link>
        <Link href="https://github.com/yourusername" target="_blank" className="hover:underline decoration-4 decoration-secondary underline-offset-4">
          GitHub
        </Link>
      </div>
    </nav>
  );
}