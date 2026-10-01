/**
 * Build a Netlify Image CDN URL. Originals in /public/img are full-size model
 * output; pages must always go through this so visitors get resized WebP.
 */
export function cdn(src: string, width: number, height?: number, quality = 72) {
  const params = new URLSearchParams({ url: src, w: String(width), fm: 'webp', q: String(quality) })
  if (height) {
    params.set('h', String(height))
    params.set('fit', 'cover')
  }
  return `/.netlify/images?${params.toString()}`
}

export function srcSet(src: string, widths: number[], ratio?: number) {
  return widths
    .map((w) => `${cdn(src, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`)
    .join(', ')
}
