import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiOpenai,
  SiLangchain,
  SiOpencv,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiOllama,
  SiRabbitmq,
  SiApachekafka,
  SiNginx,
  SiGit,
  SiLinux,
  SiAmazonwebservices,
} from '@icons-pack/react-simple-icons'
import { Sparkles, Bot, Eye, ScanEye, ScanFace, Database, Boxes, Zap } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

const SKILLS: {
  field: string
  skills: { skill: string; icon: IconType }[]
}[] = [
  {
    field: 'Programming',
    skills: [
      { skill: 'Python', icon: SiPython as IconType },
    ],
  },
  {
    field: 'AI / ML',
    skills: [
      { skill: 'PyTorch', icon: SiPytorch as IconType },
      { skill: 'TensorFlow', icon: SiTensorflow as IconType },
      { skill: 'scikit-learn', icon: SiScikitlearn as IconType },
      { skill: 'Transformers', icon: SiHuggingface as IconType },
      { skill: 'LoRA', icon: Sparkles as IconType },
      { skill: 'GPT-4o', icon: SiOpenai as IconType },
      { skill: 'Mistral', icon: Bot as IconType },
      { skill: 'Qwen3-VL', icon: Eye as IconType },
      { skill: 'RAG', icon: SiLangchain as IconType },
    ],
  },
  {
    field: 'Computer Vision',
    skills: [
      { skill: 'OpenCV', icon: SiOpencv as IconType },
      { skill: 'YOLO', icon: ScanEye as IconType },
      { skill: 'DeepFace', icon: ScanFace as IconType },
    ],
  },
  {
    field: 'Backend & Infra',
    skills: [
      { skill: 'FastAPI', icon: SiFastapi as IconType },
      { skill: 'Flask', icon: SiFlask as IconType },
      { skill: 'PostgreSQL', icon: SiPostgresql as IconType },
      { skill: 'pgvector', icon: Database as IconType },
      { skill: 'Redis', icon: SiRedis as IconType },
      { skill: 'Qdrant', icon: Boxes as IconType },
      { skill: 'RabbitMQ', icon: SiRabbitmq as IconType },
      { skill: 'Kafka', icon: SiApachekafka as IconType },
      { skill: 'Nginx', icon: SiNginx as IconType },
      { skill: 'Docker', icon: SiDocker as IconType },
      { skill: 'Ollama', icon: SiOllama as IconType },
      { skill: 'vLLM', icon: Zap as IconType },
    ],
  },
  {
    field: 'Tools',
    skills: [
      { skill: 'Git', icon: SiGit as IconType },
      { skill: 'Linux', icon: SiLinux as IconType },
      { skill: 'AWS', icon: SiAmazonwebservices as IconType },
    ],
  },
]

export default SKILLS
