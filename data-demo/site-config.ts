import { SiteConfig } from '@/lib/site-config'
import { DeepPartial } from '@/lib/utils'

const userConfig: DeepPartial<SiteConfig> = {
  siteUrl: 'https://analog.paulapplegate.com',
  siteTitle: 'Living Life',
  description:
    'Explore Analog: An open-source blog template built with Next.js by zhutmost. Perfect for technical contents, research teams, and academic blogs. Modern, SEO-optimized, and fully customizable.',
  locale: 'en-US',
  author: 'Paul Applegate',
  homepage: {
    sections: ['latestNews', 'popularTags', 'recentPosts'],
    popularTags: [
      { tag: 'markdown', icon: 'IconMarkdown', title: 'Markdown' },
      { tag: 'mac', icon: 'IconCommand', title: 'MacOS' },
      { tag: 'shopping', icon: 'IconTag', title: 'Shopping' },
      { tag: 'writing', icon: 'IconNote', title: 'Writing' },
      { tag: 'windows', icon: 'IconBrandWindows', title: 'Windows' },
    ],
    githubCalendar: '',
  },
  header: {
    logo: '/icon.svg',
    title: 'Analog Demo',
    themeSwitch: true,
    menu: {
      Home: '/',
      Blog: '/archive',
      News: '/news',
      Tags: '/tags',
      Team: '/team',
      About: '/about',
    },
  },
  footer: {
    // beian: '粤ICP备2021******号',
    icons: {
      Facebook: { icon: 'IconBrandFacebook', href: 'https://facebook.com' },
      X: { icon: 'IconBrandX', href: 'https://x.com' },
      RSS: { icon: 'IconRss', href: '/rss.xml' },
      Analytics: {
        icon: 'IconChartDots',
        href: 'https://cloud.umami.is/share/unndQ4BKaNaSgfys/analog-demo.zhutmost.com',
      },
    },
  },
  license: 'cc-by-nc-sa',
}

export default userConfig
