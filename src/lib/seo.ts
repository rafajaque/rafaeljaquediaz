export const siteUrl = 'https://rafaeljaquediaz.netlify.app'

const socialImagePath = '/img/rafael-jaque-social.svg'

type SeoInput = {
  title: string
  description: string
  path: `/${string}` | '/'
}

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalizedPath}`
}

export function buildSeo({ title, description, path }: SeoInput) {
  const canonical = absoluteUrl(path)
  const socialImage = absoluteUrl(socialImagePath)

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: socialImage },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: socialImage },
    ],
    links: [{ rel: 'canonical', href: canonical }],
  }
}
