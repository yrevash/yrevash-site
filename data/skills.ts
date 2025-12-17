// data/skills.ts
import { SiPython, SiTypescript, SiRos, SiArduino, SiOpencv, SiCplusplus, SiTensorflow, SiPytorch, SiFastapi, SiFlask, SiDocker, SiGit, SiLinux, SiGooglecloud, SiRaspberrypi } from '@icons-pack/react-simple-icons';
import { Brain, Scan, Code2 } from 'lucide-react';

export const SKILLS = [
  {
    field: "Robotics & Embedded",
    skills: [
      { skill: "ROS", icon: SiRos },
      { skill: "Arduino", icon: SiArduino },
      { skill: "Raspberry Pi", icon: SiRaspberrypi },
    ],
  },
  {
    field: "AI & Vision",
    skills: [
      { skill: "TensorFlow", icon: SiTensorflow },
      { skill: "PyTorch", icon: SiPytorch },
      { skill: "OpenCV", icon: SiOpencv },
    ],
  },
  {
    field: "Programming",
    skills: [
      { skill: "Python", icon: SiPython },
      { skill: "C++", icon: SiCplusplus },
      { skill: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    field: "Tools & Platforms",
    skills: [
      { skill: "Docker", icon: SiDocker },
      { skill: "FastAPI", icon: SiFastapi },
      { skill: "Linux", icon: SiLinux },
    ],
  },
];