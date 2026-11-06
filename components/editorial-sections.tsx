import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react'
import type { Content, Link } from '@/lib/content'
import { EarlyAccessForm } from './early-access-form'

export function ActionLink({ link, variant = 'primary' }: { link: Link; variant?: 'primary' | 'outline' }) {
  return <a className={`action ${variant}`} href={link.href}>{link.label}{variant === 'primary' ? <ArrowUpRight size={18} aria-hidden="true" /> : <ArrowDown size={16} aria-hidden="true" />}</a>
}
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow mono">{children}</p> }

export function HeroSection({ c }: { c: Content }) {
  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-grid">
      <div className="hero-copy"><Eyebrow><span className="signal-square" />{c.hero.eyebrow}<span className="eyebrow-rule" /></Eyebrow>
        <h1 id="hero-title">{c.hero.title.map(word => <span key={word}>{word}</span>)}</h1>
        <p className="hero-tagline">{c.brand.tagline}</p>
        <div className="hero-actions"><ActionLink link={c.drop.primary_cta} /><ActionLink link={c.drop.secondary_cta} variant="outline" /></div>
      </div>
      <figure className="hero-art"><Image src="/images/outside-study.png" alt={c.lookbook.alt} fill priority sizes="(min-width: 1024px) 52vw, 100vw" /><div className="image-top mono"><span>{c.hero.annotation}</span><Plus size={16} aria-hidden="true" /></div><div className="image-coordinate mono" aria-hidden="true">HC / 001<br />FORM STUDY</div><figcaption className="image-bottom mono"><span className="signal-square" />{c.lookbook.demo_label}<span aria-hidden="true">↗</span></figcaption></figure>
    </div>
    <div className="hero-baseline mono"><span>{c.hero.bottom_left}</span><span>{c.hero.bottom_right}</span><a href="#manifesto" aria-label={c.ui.nav[1].label}><ArrowDown size={16} /></a></div>
  </section>
}
export function ManifestoSection({ c }: { c: Content }) {
  return <section className="manifesto container section" id="manifesto"><Eyebrow>{c.ui.labels[0]}</Eyebrow><div className="manifesto-copy"><h2>{c.manifesto.title}</h2><p>{c.manifesto.text}</p><div className="territories mono">{c.brand.territory.slice(0, 3).map((item, i) => <span key={item}>{i > 0 && <span aria-hidden="true"> / </span>}{item}</span>)}</div></div></section>
}
export function LookbookGrid({ c }: { c: Content }) {
  return <section className="lookbook container section" id="lookbook"><div className="section-heading"><div><Eyebrow>{c.ui.labels[1]}</Eyebrow><h2>{c.lookbook.title}</h2></div><p className="secondary-copy">{c.lookbook.note}</p></div>
    <div className="lookbook-grid">{c.lookbook.captions.map((caption, i) => <figure className={`lookbook-item study-${i}`} key={caption}><div className="study-frame">{i < 2 ? <Image src="/images/outside-study.png" alt={c.lookbook.alt} fill sizes="(min-width: 768px) 50vw, 100vw" /> : <div className="architecture-study" aria-hidden="true"><span /><span /><span /><span /><span /></div>}<span className="study-cross" aria-hidden="true">+</span><span className="study-demo mono">{c.lookbook.demo_label}</span></div><figcaption className="mono"><span>{caption}</span><ArrowUpRight size={16} aria-hidden="true" /></figcaption></figure>)}</div><p className="image-disclaimer mono">{c.lookbook.image_note}</p>
  </section>
}
export function ProductsSection({ c }: { c: Content }) {
  return <section className="products container section" id="collection"><div className="section-heading"><div><Eyebrow>{c.ui.labels[2]}</Eyebrow><h2>{c.collection.title}</h2></div><p className="mono">{c.collection.label}</p></div>
    <div className="product-grid">{c.products.map((product, i) => <article className="product" key={product.code}><div className={`product-visual product-${i}`}><div className="product-visual-top mono"><span>{product.code}</span><Plus size={14} aria-hidden="true" /></div><span className="specimen-index" aria-hidden="true">0{i + 1}</span><div className="specimen-lines" aria-hidden="true" /><div className="product-visual-bottom mono"><span>{product.study}</span><span>{c.collection.visual_label}</span></div></div><div className="product-heading"><h3>{product.name}</h3><span className="mono">0{i + 1}</span></div><p>{product.description}</p><span className="product-status mono">{product.status}</span></article>)}</div>
  </section>
}
export function ConstructionDetails({ c }: { c: Content }) {
  return <section className="construction" id="details"><div className="container section construction-grid"><div><Eyebrow>{c.ui.labels[3]}</Eyebrow><h2>{c.construction.title}</h2><p className="construction-note">{c.construction.note}</p><div className="construction-mark" aria-hidden="true"><span /><span /><span /><span /></div></div><div className="construction-rows">{c.construction.items.map((item, i) => <div className="construction-row" key={item.label}><span className="mono row-index">0{i + 1}</span><div><p className="mono row-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></div><Plus size={18} aria-hidden="true" /></div>)}</div></div></section>
}
export function AccessSection({ c }: { c: Content }) {
  return <section id="access" className="access container section"><div><Eyebrow><span className="signal-square" />{c.ui.labels[4]}</Eyebrow><h2>{c.access.title}</h2></div><div className="access-right"><p>{c.access.text}</p><EarlyAccessForm content={c.access} /></div></section>
}
export function SiteFooter({ c }: { c: Content }) {
  return <footer className="footer"><div className="container"><div className="footer-top"><div><a href="#top" className="wordmark">{c.brand.name}<span className="brand-mark" aria-hidden="true" /></a><p>{c.brand.tagline}</p></div><div className="footer-links">{c.footer.links.map((label, i) => i < 2 ? <a key={label} href={i === 0 ? '#collection' : '#manifesto'}>{label}<ArrowUpRight size={15} aria-hidden="true" /></a> : <span key={label}>{label}<small>{c.footer.incomplete}</small></span>)}</div></div><div className="footer-bottom mono"><span>{c.footer.note}</span><div>{c.footer.legal.map(label => <span key={label}>{label} <small>— {c.footer.incomplete}</small></span>)}</div></div><div className="footer-wordmark" aria-hidden="true">{c.brand.name}</div></div></footer>
}
