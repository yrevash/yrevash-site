import React from "react";

const skillList = [
  "ROS 2",
  "Computer Vision",
  "Python",
  "C++",
  "Robotics",
  "Machine Learning",
  "Docker",
  "Linux",
  "TensorFlow / PyTorch",
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Skills</h2>
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
        {skillList.map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-md bg-neutral-800 text-neutral-200 text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
