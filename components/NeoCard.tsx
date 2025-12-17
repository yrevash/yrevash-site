import React from 'react';

export default function NeoCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`
      bg-white 
      border-3 border-black 
      shadow-neobrutalism 
      p-6 
      transition-all duration-200 
      hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-none
      ${className}
    `}>
      {children}
    </div>
  );
}