'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import type { Content } from '@/lib/content'

export function SiteHeader({ brand, ui, cta }: { brand: string; ui: Content['ui']; cta: Content['drop']['primary_cta'] }) {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  return <header className="site-header container" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); trigger.current?.focus() } }}>
    <a href="#top" className="wordmark" aria-label={`${brand} — ${ui.home}`}>{brand}<span className="brand-mark" aria-hidden="true" /></a>
    <nav className="desktop-nav" aria-label="Navigation principale">{ui.nav.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <a className="header-cta mono" href={cta.href}>{cta.label}<ArrowUpRight size={16} aria-hidden="true" /></a>
    <button ref={trigger} className="menu-trigger mono" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? ui.close : ui.menu}{open ? <X size={20} /> : <Menu size={20} />}</button>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Navigation mobile" hidden={!open}>{ui.nav.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}</nav>
  </header>
}
