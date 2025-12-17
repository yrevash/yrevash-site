import React from "react";

export function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">About Me</h2>
      <p className="text-lg text-neutral-300 text-center max-w-2xl mx-auto">
        I am Yash Tiwari, a Mechatronics Engineer focused on building robust
        robotic systems using ROS 2, computer vision, and machine learning.
        I design embedded control systems, perception pipelines, and end-to-end
        autonomous solutions that bridge hardware and AI.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="#projects" className="px-4 py-2 bg-blue-600 rounded-md">See projects</a>
        <a href="#contact" className="px-4 py-2 border border-neutral-700 rounded-md">Get in touch</a>
      </div>
    </section>
  );
}
