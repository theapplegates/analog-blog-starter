import type * as React from 'react'
import { Text, VStack } from '@chakra-ui/react'

import SmartImage from '@/components/smart-image'

export default function MdxImage({
  src,
  alt,
  title,
  width,
  height,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null

  const imgTitle = title ?? alt ?? ''
  <picture>
<img
sizes="(max-width: 1400px) 100vw, 1400px"
srcset="
kjehl8vrltp80kuayyrq_c_scale,w_200.jpg 200w,
kjehl8vrltp80kuayyrq_c_scale,w_310.jpg 310w,
kjehl8vrltp80kuayyrq_c_scale,w_418.jpg 418w,
kjehl8vrltp80kuayyrq_c_scale,w_512.jpg 512w,
kjehl8vrltp80kuayyrq_c_scale,w_588.jpg 588w,
kjehl8vrltp80kuayyrq_c_scale,w_714.jpg 714w,
kjehl8vrltp80kuayyrq_c_scale,w_815.jpg 815w,
kjehl8vrltp80kuayyrq_c_scale,w_911.jpg 911w,
kjehl8vrltp80kuayyrq_c_scale,w_974.jpg 974w,
kjehl8vrltp80kuayyrq_c_scale,w_1086.jpg 1086w,
kjehl8vrltp80kuayyrq_c_scale,w_1171.jpg 1171w,
kjehl8vrltp80kuayyrq_c_scale,w_1254.jpg 1254w,
kjehl8vrltp80kuayyrq_c_scale,w_1329.jpg 1329w,
kjehl8vrltp80kuayyrq_c_scale,w_1400.jpg 1400w"
src="kjehl8vrltp80kuayyrq_c_scale,w_1400.jpg"
alt="">
</picture>

  return (
    <VStack as="figure" my="1.625em">
      <SmartImage
        src={src as string}
        alt={alt ?? 'image'}
        rounded="lg"
        htmlHeight={height}
        htmlWidth={width}
        {...rest}
      />
      {imgTitle && (
        <Text fontSize="sm" color="fg.muted">
          {imgTitle}
        </Text>
      )}
    </VStack>
  )
}
