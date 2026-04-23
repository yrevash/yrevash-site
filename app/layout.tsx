import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import ClientShell from '@/components/client-shell'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Yash Tiwari | AI Engineer',
  description: 'Building production AI systems, LLM agents, and computer vision pipelines.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
