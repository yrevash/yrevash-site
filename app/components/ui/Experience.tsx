import React from "react";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Experience</h2>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white">Robotics Engineer — Research Project</h3>
          <p className="text-neutral-400">University / Lab | 2023 – Present</p>
          <ul className="list-disc list-inside text-neutral-300 mt-2">
            <li>Developed ROS 2 nodes for sensor fusion and autonomous navigation.</li>
            <li>Designed and tested perception algorithms using OpenCV and PyTorch.</li>
            <li>Integrated hardware interfaces and performed system-level tests.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white">Mechatronics Intern</h3>
          <p className="text-neutral-400">Company Name | 2021 – 2022</p>
          <ul className="list-disc list-inside text-neutral-300 mt-2">
            <li>Implemented embedded control loops in C++ for motor controllers.</li>
            <li>Authored testbenches and automated test scripts using Python.</li>
            <li>Collaborated with cross-functional teams to bring prototypes to demo stage.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
