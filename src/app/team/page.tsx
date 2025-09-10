import * as path from 'node:path'
import {
  Avatar,
  Heading,
  Icon,
  Link,
  StackSeparator,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { IconMapPinFilled } from '@tabler/icons-react'
import type { Metadata } from 'next'
import NextLink from 'next/link'
import { notFound } from 'next/navigation'

import PageHeader from '@/components/page-header'
import SocialIcon from '@/components/social-icon'
import { type Author, allAuthorsNonDefault, sortAuthors } from '@/lib/coco'
import generatePageMetadata from '@/lib/page-metadata'
import siteConfig from '@/lib/site-config'

function AuthorCard({ author }: { author: Author }) {
  const { name, avatar, bio, affiliation, icons, slug } = author
  const avatarSrc: string = path.join(siteConfig.siteRoot ?? '', avatar ?? '/avatar-default.jpg')

  return (
    <VStack pt={10} gapY={5}>
      <NextLink href={`/about/${slug}`}>
        <Avatar.Root w="48" height="48">
          <Avatar.Fallback name={name} />
          <Avatar.Image objectFit="cover" src={avatarSrc} />
        </Avatar.Root>
      </NextLink>
      <Heading as="h3" color="fg" size="xl" fontWeight="bold" letterSpacing="tight">
        <Link asChild>
          <NextLink href={`/about/${slug}`}>{name}</NextLink>
        </Link>
      </Heading>
      <VStack fontSize="md" color="fg.muted">
        {bio && <Text>{bio}</Text>}
        {affiliation && (
          <Text>
            <Icon size="md" mr={1}>
              <IconMapPinFilled />
            </Icon>
            {affiliation}
          </Text>
        )}
      </VStack>
      <Wrap>
        {icons &&
          Object.entries(icons).map(([key, item]) => (
            <SocialIcon key={key} name={key} icon={item.icon} href={item.href} />
          ))}
      </Wrap>
    </VStack>
  )
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  if (!siteConfig.pages.team || allAuthorsNonDefault.length === 0) {
    return
  }
  return generatePageMetadata({
    title: 'Our Team',
  })
}

export default function Page() {
  if (!siteConfig.pages.team || allAuthorsNonDefault.length === 0) {
    return notFound()
  }

  const allAuthorsGrouped: Record<string, Author[]> = allAuthorsNonDefault.reduce<
    Record<string, Author[]>
  >((acc, a) => {
    const key: string = a._meta.directory
    acc[key] = key in acc ? acc[key] : []
    acc[key].push(a)
    return acc
  }, {})

  return (
    <VStack as="article" separator={<StackSeparator />} w="full">
      <PageHeader.Root>
        <PageHeader.Title>Our Team</PageHeader.Title>
        <PageHeader.Description>{siteConfig.pages.greetings.team}</PageHeader.Description>
      </PageHeader.Root>
      <VStack pt={6} w="full">
        {Object.entries(allAuthorsGrouped).map(([group, authors]) => (
          <VStack key={group} alignItems="start" w="full" pb={6}>
            <Heading as="h2" size={{ base: '3xl', lg: '4xl' }} color="fg" fontWeight="bold">
              {group}
            </Heading>
            <Wrap w="full">
              {sortAuthors(authors).map((author) => (
                <WrapItem key={author.slug} w={{ base: 'full', md: '50%', lg: '25%' }}>
                  <AuthorCard author={author} />
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        ))}
      </VStack>
    </VStack>
  )
}
