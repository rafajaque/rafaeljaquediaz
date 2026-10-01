/**
 * Site-wide content: identity, social links and the photo gallery.
 * Projects live in content/projects/*.md (content-collections).
 */
export const site = {
  name: 'Luz Marín',
  role: 'Photographer & visual designer',
  location: 'Montevideo — Buenos Aires',
  email: 'hola@luzmarin.studio',
  tagline: 'I make pictures with the sky.',
  description:
    'Luz Marín is a photographer and visual designer working between Montevideo and Buenos Aires, making cyanotypes, photobooks and identities in every shade of blue.',
}

export type Social = { label: string; handle: string; href: string }

export const socials: Social[] = [
  { label: 'Instagram', handle: '@luzmarin.azul', href: 'https://instagram.com/' },
  { label: 'Behance', handle: 'luzmarin', href: 'https://www.behance.net/' },
  { label: 'LinkedIn', handle: 'in/luzmarin', href: 'https://www.linkedin.com/' },
  { label: 'Are.na', handle: 'luz-marin', href: 'https://www.are.na/' },
  { label: 'Vimeo', handle: 'luzmarin', href: 'https://vimeo.com/' },
]

export type Series = 'Río' | 'Cianotipia' | 'Ciudad'

export type Photo = {
  src: string
  title: string
  alt: string
  series: Series
  place: string
  year: string
  width: number
  height: number
}

export const photos: Photo[] = [
  { src: '/img/g-rio.png', title: 'Muelle, 6:04', alt: 'A wooden pier stretching into a still, pale blue river at dawn', series: 'Río', place: 'Colonia del Sacramento', year: '2026', width: 928, height: 1152 },
  { src: '/img/g-ferns.png', title: 'Helechos I', alt: 'White fern and grass silhouettes on deep prussian blue cyanotype paper', series: 'Cianotipia', place: 'Studio, Montevideo', year: '2025', width: 896, height: 1200 },
  { src: '/img/g-sky.png', title: 'Barrilete', alt: 'Towering clouds over grassland with a single kite high in the sky', series: 'Río', place: 'Pampa, Buenos Aires', year: '2025', width: 1376, height: 768 },
  { src: '/img/g-stairs.png', title: 'Caracol', alt: 'A white spiral staircase seen from below with blue shadows', series: 'Ciudad', place: 'Palacio Salvo', year: '2024', width: 896, height: 1200 },
  { src: '/img/g-swimmer.png', title: 'Carril 4', alt: 'A lone swimmer seen from above in a turquoise pool with lane lines', series: 'Ciudad', place: 'Club Neptuno', year: '2025', width: 1024, height: 1024 },
  { src: '/img/g-window.png', title: 'Botellas', alt: 'Blue glass bottles on a sunny windowsill casting blue light on the wall', series: 'Cianotipia', place: 'Studio, Montevideo', year: '2026', width: 928, height: 1152 },
  { src: '/img/g-fisher.png', title: 'La red', alt: 'A fisherman casting a net from a small boat in blue fog', series: 'Río', place: 'Delta del Tigre', year: '2024', width: 896, height: 1200 },
  { src: '/img/g-tiles.png', title: 'Azulejo ausente', alt: 'Weathered blue and white hand-painted tiles with one tile missing', series: 'Ciudad', place: 'Ciudad Vieja', year: '2026', width: 1024, height: 1024 },
]

export const portrait = { src: '/img/portrait.png', width: 896, height: 1200 }
