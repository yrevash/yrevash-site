import React from "react";

export function Hero() {
  return (
    <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Yash Tiwari <br /> is building <span className="text-blue-500">robots</span>.
      </h1>
      <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Mechatronics Engineer specializing in ROS 2, Computer Vision, and AI.
        Transforming concepts into intelligent machines.
      </p>
    </div>
  );
}
