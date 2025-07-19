import { SiteConfig } from '@/lib/site-config'
import { DeepPartial } from '@/lib/utils'

const userConfig: DeepPartial<SiteConfig> = {
  siteUrl: 'https://analog.paulapplegate.com',
  siteTitle: "Live Life",
  description:
    "This is my piece on the internet. I write about my thoughts, and life.",
  locale: 'en-US',
  author: 'Paul Applegate',
  homepage: {
    sections: ['latestNews', 'recentPosts'],
    popularTags: [],
    githubCalendar: '',
  },
  header: {
    logo: '/icon.svg',
    title: "Paul's Blog",
    themeSwitch: true,
    menu: {
      Home: '/',
      Blog: '/archive',
      Tags: '/tags',
      News: '/news',
      Publication: '/publication',
      About: '/about',
    },
  },
  footer: {
    icons: {
      GitHub: { icon: 'IconBrandGithub', href: 'https://github.com/theapplegates' },
      RSS: { icon: 'IconRss', href: '/rss.xml' },
      Analytics: {
        icon: 'IconChartDots',
        href: '',
      },
    },
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: '',
    },
  },

  seo: {
    socialBanner: '/banner-zhutmost-com.png',
  },
  license: 'cc-by-nc-sa',
}

export default userConfig