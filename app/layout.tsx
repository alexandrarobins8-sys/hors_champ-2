import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import { getContent } from '@/lib/content'
import './globals.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex', display: 'swap' })
const c = getContent()
export const metadata: Metadata = { title: c.seo.title, description: c.seo.description, openGraph: { title: c.seo.title, description: c.seo.description, locale: 'fr_FR', type: 'website' } }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#E8E7E2', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={`${sans.variable} ${mono.variable}`}><body>{children}</body></html>
}
