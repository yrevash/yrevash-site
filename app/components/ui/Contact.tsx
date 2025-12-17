import React from "react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contact</h2>
      <div className="max-w-xl mx-auto text-center text-neutral-300">
        <p className="mb-4">I'm open to opportunities and collaborations.</p>
        <p className="mb-6">Email: <a className="text-blue-400" href="mailto:yash@example.com">yash@example.com</a></p>
        <div className="flex items-center justify-center gap-4">
          <a className="text-sm text-neutral-300 hover:text-blue-400" href="#">LinkedIn</a>
          <a className="text-sm text-neutral-300 hover:text-blue-400" href="#">GitHub</a>
          <a className="text-sm text-neutral-300 hover:text-blue-400" href="#">Resume</a>
        </div>
      </div>
    </section>
  );
}
