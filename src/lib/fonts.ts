import localFont from 'next/font/local'

const wotfardFont = localFont({
  src: [
    {
      path: '/fonts/wotfard-thin-webfont.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '/fonts/wotfard-thinitalic-webfont.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '/fonts/wotfard-extralight-webfont.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/fonts/wotfard-extralightitalic-webfont.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '/fonts/wotfard-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/wotfard-lightitalic-webfont.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '/fonts/wotfard-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/wotfard-regularitalic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/fonts/wotfard-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/wotfard-mediumitalic-webfont.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '/fonts/wotfard-semibold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/wotfard-semibolditalic-webfont.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '/fonts/wotfard-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/wotfard-bolditalic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-wotfard',
})

const customFontFamily = {
  wotfard: wotfardFont,
}

export default wotfard
