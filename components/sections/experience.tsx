'use client'

import PAST_ROLES from '@/data/experience'
import { motion } from 'framer-motion'
import { StaggerReveal, StaggerItem } from '@/components/animations/stagger-reveal'
import { ExternalLink } from 'lucide-react'

export default function Experience() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-main via-mainAccent to-transparent" />

      <div className="space-y-8">
        <StaggerReveal>
          {PAST_ROLES.map((role) => (
            <StaggerItem key={role.id}>
              <div className="relative pl-12">
                <div className="absolute left-[13px] top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-main ring-4 ring-white dark:ring-gray-900" />

                <motion.div
                  whileHover={{ x: 4 }}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 shadow-sm transition-all duration-300 hover:border-main/50"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{role.role}</h3>
                      <p className="text-sm font-medium text-main">{role.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {role.startDate} to {role.endDate}
                      </span>
                      {role.link && (
                        <a
                          href={role.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-main hover:text-mainAccent transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {role.description.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-main" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {role.contributionLink && (
                    <a
                      href={role.contributionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-main px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-mainAccent"
                    >
                      See Contribution <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </div>
  )
}
