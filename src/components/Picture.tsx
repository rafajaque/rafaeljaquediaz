import { cdn, srcSet } from '@/lib/image'
import { cn } from '@/lib/utils'

type PictureProps = {
  src: string
  alt: string
  width: number
  height: number
  sizes: string
  /** Force a crop to this width/height ratio (e.g. 3/4). Defaults to the original ratio. */
  ratio?: number
  priority?: boolean
  className?: string
}

const WIDTHS = [360, 640, 960, 1280, 1600]

export function Picture({ src, alt, width, height, sizes, ratio, priority, className }: PictureProps) {
  const r = ratio ?? width / height
  const widths = WIDTHS.filter((w) => w <= width * 1.2)
  return (
    <img
      src={cdn(src, 960, ratio ? Math.round(960 / r) : undefined)}
      srcSet={srcSet(src, widths, ratio)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={Math.round(width / r)}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={(event) => {
        const image = event.currentTarget
        if (image.dataset.fallback) return
        image.dataset.fallback = 'true'
        image.removeAttribute('srcset')
        image.src = src
      }}
      className={cn('block h-auto w-full', className)}
    />
  )
}
