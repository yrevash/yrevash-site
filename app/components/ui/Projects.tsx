import React from "react";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <article className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-lg border border-neutral-700">
          <h3 className="text-xl font-semibold text-white mb-2">Autonomous Mobile Robot</h3>
          <p className="text-neutral-300 mb-4">Full-stack robotics project using ROS 2 for navigation, SLAM, and obstacle avoidance. Integrated depth cameras and LIDAR for perception and wrote control modules in C++ and Python.</p>
          <div className="flex gap-3">
            <a className="text-sm text-blue-400" href="#">Code</a>
            <a className="text-sm text-blue-400" href="#">Writeup</a>
          </div>
        </article>

        <article className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-lg border border-neutral-700">
          <h3 className="text-xl font-semibold text-white mb-2">Computer Vision Pipeline</h3>
          <p className="text-neutral-300 mb-4">Perception pipeline for object detection and pose estimation using PyTorch and OpenCV. Deployed a real-time inference node on embedded hardware.</p>
          <div className="flex gap-3">
            <a className="text-sm text-blue-400" href="#">Demo</a>
            <a className="text-sm text-blue-400" href="#">Paper</a>
          </div>
        </article>
      </div>
    </section>
  );
}
