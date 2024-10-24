'use client'

import * as React from 'react'
import { Action, KBarProvider } from 'kbar'
import KBarModal from '@/components/search/search-modal'
import { useRouter } from 'next/navigation'
import { IconHome, IconNews, IconUser } from '@tabler/icons-react'
import timelineNews from '@/data/timeline-news'
import allPostsSorted from '@/lib/post-sort'
import siteConfig from '@/lib/site-config'

export default function SearchProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const pageActions: Action[] = [
    {
      id: 'home',
      name: 'Home',
      subtitle: 'Go back to the homepage',
      icon: <IconHome />,
      section: 'Pages',
      shortcut: ['h'],
      keywords: 'back',
      perform: () => router.push('/'),
      priority: 5,
    },
    {
      id: 'about',
      name: 'About',
      subtitle: 'About me and this blog',
      icon: <IconUser />,
      section: 'Pages',
      shortcut: ['c'],
      keywords: 'email author',
      perform: () => router.push('/about'),
      priority: 5,
    },
    timelineNews && {
      id: 'news',
      name: 'News',
      subtitle: 'Latest news and updates',
      icon: <IconNews />,
      section: 'Pages',
      shortcut: ['n'],
      perform: () => router.push('/news'),
      priority: 5,
    },
  ]
  const postActions = allPostsSorted.map((post) => ({
    id: `posts/${post.slugPath}`,
    name: post.title,
    keywords: post.summary || '',
    section: 'Posts',
    subtitle: post.datePublish.toLocaleDateString(siteConfig.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    perform: () => router.push('/posts/' + post.slugPath),
    priority: 10,
  }))
  return (
    <KBarProvider actions={[...pageActions, ...postActions]}>
      <KBarModal actions={[]} isLoading={false} />
      {children}
    </KBarProvider>
  )
}
