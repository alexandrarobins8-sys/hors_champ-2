import Image from 'next/image'
import type { EditorialMedia } from '@/lib/content'

export function EditorialImage({ media, sizes, priority = false }: { media: EditorialMedia; sizes: string; priority?: boolean }) {
  return <Image src={media.src} alt={media.alt} fill sizes={sizes} priority={priority} style={{ objectFit: media.fit ?? 'cover', objectPosition: media.position ?? '50% 50%' }} />
}
