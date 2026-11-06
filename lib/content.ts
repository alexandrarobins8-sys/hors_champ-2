import 'server-only'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { parse } from 'yaml'

export type Link = { label: string; href: string }
export type AccessContent = {
  title: string; text: string; input_label: string; button_label: string;
  confirmation_message: string; backend_required: false; demo_notice: string; before_notice: string
}
export type Content = {
  brand: { name: string; tagline: string; territory: string[] }
  drop: { name: string; status: string; launch_date: string; primary_cta: Link; secondary_cta: Link }
  hero: { eyebrow: string; title: string[]; annotation: string; bottom_left: string; bottom_right: string }
  manifesto: { title: string; text: string }
  products: { name: string; description: string; status: string; code: string; study: string }[]
  lookbook: { title: string; note: string; captions: string[]; alt: string; demo_label: string; image_note: string }
  collection: { title: string; label: string; visual_label: string }
  construction: { title: string; note: string; items: { label: string; title: string; text: string }[] }
  access: AccessContent
  footer: { links: string[]; legal: string[]; incomplete: string; note: string }
  ui: { nav: Link[]; menu: string; close: string; home: string; skip: string; labels: string[] }
  seo: { title: string; description: string }
}
export function getContent(): Content {
  return parse(readFileSync(path.join(process.cwd(), 'content/content.yaml'), 'utf8')) as Content
}
