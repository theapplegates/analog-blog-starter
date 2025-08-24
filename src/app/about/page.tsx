import { MDXContent } from '@content-collections/mdx/react'
import { Metadata } from 'next'

import mdxComponents from '@/components/mdx/mdx-components'
import AuthorLayout from '@/layouts/author-layout'
import { authorDefault } from '@/lib/author-sort'
import { generatePageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'About',
})
<picture>
  <source type="image/jxl" srcset="
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 50w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 717w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1068w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1398w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1600w
  " sizes="(max-width: 1600px) 100vw, 1600px">
  <source type="image/avif" srcset="
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 50w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 681w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1015w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1328w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1600w
  " sizes="(max-width: 1600px) 100vw, 1600px">
  <source type="image/jpeg" srcset="
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 50w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 753w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1121w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1468w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1600w
  " sizes="(max-width: 1600px) 100vw, 1600px">
  <img
    src="http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1600/v1756003744/tobias-reich.jpg"
    srcset="
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 50w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 753w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1121w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1468w,
    http://res.cloudinary.com/paulapplegate-com/image/upload/q_auto/c_scale,w_1068/v1756003744/tobias-reich.jpg 1600w
  "
    sizes="(max-width: 1600px) 100vw, 1600px"
    width="4128"
    height="6192"
    alt="Responsive tobias-reich"
    loading="lazy"
    decoding="async">
</picture>

export default function Page() {
  return (
    <AuthorLayout author={authorDefault}>
      <MDXContent code={authorDefault.mdx} components={mdxComponents} />
    </AuthorLayout>
  )
}
