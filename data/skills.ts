import {
  SiRos,
  SiArduino,
  SiRaspberrypi,
  SiQt,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiLangchain,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiNginx,
  SiDocker,
  SiKubernetes,
  SiFastapi,
  SiFlask,
  SiApachekafka,
  SiRabbitmq,
  SiAmazonwebservices,
  SiGit,
  SiLinux,
} from '@icons-pack/react-simple-icons'
import type { ComponentType, SVGProps } from 'react'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

const SKILLS: {
  field: string
  skills: { skill: string; icon: IconType }[]
}[] = [
  {
    field: 'Robotics & Embedded',
    skills: [
      { skill: 'ROS', icon: SiRos as IconType },
      { skill: 'Arduino', icon: SiArduino as IconType },
      { skill: 'Raspberry Pi', icon: SiRaspberrypi as IconType },
      { skill: 'Qt', icon: SiQt as IconType },
    ],
  },
  {
    field: 'AI & Computer Vision',
    skills: [
      { skill: 'TensorFlow', icon: SiTensorflow as IconType },
      { skill: 'PyTorch', icon: SiPytorch as IconType },
      { skill: 'OpenCV', icon: SiOpencv as IconType },
      { skill: 'scikit-learn', icon: SiScikitlearn as IconType },
      { skill: 'LangChain', icon: SiLangchain as IconType },
    ],
  },
  {
    field: 'Programming',
    skills: [
      { skill: 'Python', icon: SiPython as IconType },
      { skill: 'C++', icon: SiCplusplus as IconType },
      { skill: 'SQL', icon: SiPostgresql as IconType },
    ],
  },
  {
    field: 'Backend',
    skills: [
      { skill: 'Node.js', icon: SiNodedotjs as IconType },
      { skill: 'PostgreSQL', icon: SiPostgresql as IconType },
      { skill: 'MongoDB', icon: SiMongodb as IconType },
      { skill: 'MySQL', icon: SiMysql as IconType },
      { skill: 'Redis', icon: SiRedis as IconType },
      { skill: 'Nginx', icon: SiNginx as IconType },
      { skill: 'Docker', icon: SiDocker as IconType },
      { skill: 'Kubernetes', icon: SiKubernetes as IconType },
    ],
  },
  {
    field: 'Software & Systems',
    skills: [
      { skill: 'FastAPI', icon: SiFastapi as IconType },
      { skill: 'Flask', icon: SiFlask as IconType },
      { skill: 'Kafka', icon: SiApachekafka as IconType },
      { skill: 'RabbitMQ', icon: SiRabbitmq as IconType },
      { skill: 'AWS', icon: SiAmazonwebservices as IconType },
      { skill: 'Git', icon: SiGit as IconType },
      { skill: 'Linux', icon: SiLinux as IconType },
    ],
  },
]

export default SKILLS
