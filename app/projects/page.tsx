'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import BackgroundScene from '@/components/three/background-scene'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  homepage: string | null
  pushed_at: string
}

const PER_PAGE = 10

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB')
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [filter, setFilter] = useState<string>('all')
  const [languages, setLanguages] = useState<string[]>([])
  const loaderRef = useRef<HTMLDivElement>(null)

  const fetchRepos = useCallback(async (pageNum: number) => {
    if (!hasMore && pageNum > 1) return
    setLoading(true)
    try {
      const headers: Record<string, string> = { Accept: 'application/vnd.github+json' }
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
      if (token) headers['Authorization'] = `Bearer ${token}`

      const res = await fetch(
        `https://api.github.com/users/yrevash/repos?per_page=${PER_PAGE}&page=${pageNum}&sort=updated`,
        { headers },
      )
      if (!res.ok) throw new Error('Failed to fetch repos')
      const data: Repo[] = await res.json()

      const filtered = data.filter((r) => !r.topics?.includes('ignore'))
      if (data.length < PER_PAGE) setHasMore(false)

      setRepos((prev) => {
        const existing = new Set(prev.map((r) => r.id))
        const newOnes = filtered.filter((r) => !existing.has(r.id))
        const merged = [...prev, ...newOnes]
        const langs = [...new Set(merged.map((r) => r.language).filter(Boolean) as string[])]
        setLanguages(langs)
        return merged
      })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [hasMore])

  useEffect(() => { fetchRepos(1) }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          const nextPage = page + 1
          setPage(nextPage)
          fetchRepos(nextPage)
        }
      },
      { rootMargin: '200px' },
    )
    if (loaderRef.current) observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [loading, hasMore, page, fetchRepos])

  const displayed = filter === 'all' ? repos : repos.filter((r) => r.language === filter)
  const heading = filter === 'all' ? 'All Projects' : filter

  return (
    <main className="relative min-h-screen">
      <BackgroundScene scene="projects" />

      <div className="mx-auto max-w-4xl px-6 pb-32 pt-28">
        {/* Filter tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
              filter === 'all'
                ? 'bg-main text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            All Projects
          </button>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(filter === lang ? 'all' : lang)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                filter === lang
                  ? 'bg-main text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 className="mb-8 inline-block border-b-2 border-white pb-1 text-3xl font-black text-white">
          {heading}
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {displayed.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`flex h-full flex-col rounded-base border-2 border-border bg-main p-4 shadow-light sm:p-5 ${
                repo.topics?.includes('featured')
                  ? 'ring-2 ring-orange-400 ring-offset-2 ring-offset-white dark:ring-offset-secondaryBlack'
                  : ''
              }`}
            >
              {/* Name + stars */}
              <div className="mb-2 flex items-start justify-between">
                <h2 className="text-xl font-heading text-text sm:text-2xl">{repo.name}</h2>
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="mr-1 h-4 w-4" fill="currentColor" />
                    {repo.stargazers_count}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mb-2 mt-2 flex-grow text-sm font-base text-text">
                {repo.description || ''}
              </p>

              {/* Language pill */}
              {repo.language && (
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800 dark:text-white">
                    {repo.language}
                  </span>
                </div>
              )}

              {/* Last updated */}
              <p className="mb-4 text-xs text-orange-900 dark:text-gray-900">
                Last updated: {formatDate(repo.pushed_at)}
              </p>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-3">
                {repo.homepage ? (
                  <motion.a
                    whileHover={{ translateX: 3, translateY: -3, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark"
                  >
                    Visit
                  </motion.a>
                ) : (
                  <div />
                )}
                <motion.a
                  whileHover={{ translateX: 3, translateY: -3, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark ${!repo.homepage ? 'col-span-2' : ''}`}
                >
                  Github
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skeleton loaders */}
        {loading && (
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-44 animate-pulse rounded-base border-2 border-border bg-main/60 shadow-light" />
            ))}
          </div>
        )}

        <div ref={loaderRef} className="h-4" />

        {!hasMore && repos.length > 0 && (
          <p className="mt-8 text-center text-sm text-gray-400">All repos loaded.</p>
        )}
      </div>
    </main>
  )
}
