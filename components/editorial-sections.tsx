import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react'
import type { Content, Link } from '@/lib/content'
import { EarlyAccessForm } from './early-access-form'
import { EditorialImage } from './editorial-image'

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
      <figure className="hero-art"><EditorialImage media={c.media.hero} priority sizes="(min-width: 1440px) 730px, (min-width: 1024px) 55vw, 100vw" /><figcaption className="image-bottom mono">{c.hero.annotation}</figcaption></figure>
    </div>
    <div className="hero-baseline mono"><span>{c.hero.bottom_left}</span><span>{c.hero.bottom_right}</span><a href="#manifesto" aria-label={c.ui.nav[1].label}><ArrowDown size={16} /></a></div>
  </section>
}
export function ManifestoSection({ c }: { c: Content }) {
  return <section className="manifesto container section" id="manifesto"><Eyebrow>{c.ui.labels[0]}</Eyebrow><div className="manifesto-copy"><h2>{c.manifesto.title}</h2><p>{c.manifesto.text}</p><div className="territories mono">{c.brand.territory.slice(0, 3).map((item, i) => <span key={item}>{i > 0 && <span aria-hidden="true"> / </span>}{item}</span>)}</div></div></section>
}
export function LookbookGrid({ c }: { c: Content }) {
  return <section className="lookbook container section" id="lookbook"><div className="section-heading"><div><Eyebrow>{c.ui.labels[1]}</Eyebrow><h2>{c.lookbook.title}</h2></div><p className="secondary-copy">{c.lookbook.note}</p></div>
    <div className="lookbook-grid">{c.media.lookbook.map((media, i) => <figure className={`lookbook-item study-${i}`} key={media.id}><div className="study-frame"><EditorialImage media={media} sizes="(min-width: 1440px) 550px, (min-width: 640px) 42vw, 100vw" /></div><figcaption className="mono"><span>{media.caption}</span><ArrowUpRight size={16} aria-hidden="true" /></figcaption></figure>)}</div><p className="image-disclaimer mono">{c.lookbook.image_note}</p>
  </section>
}
export function ProductEditorialCard({ product, index }: { product: Content['products'][number]; index: number }) {
  return <article className="product"><div className="product-meta mono"><span>{product.code}</span><span>0{index + 1} / 04</span></div><div className="product-visual"><EditorialImage media={product.image} sizes="(min-width: 1440px) 644px, (min-width: 640px) 46vw, 100vw" /></div><div className="product-heading"><h3>{product.name}</h3></div><p>{product.description}</p><span className="product-status mono">{product.status}</span></article>
}
export function ProductsSection({ c }: { c: Content }) {
  return <section className="products container section" id="collection"><div className="section-heading"><div><Eyebrow>{c.ui.labels[2]}</Eyebrow><h2>{c.collection.title}</h2></div><p className="mono">{c.collection.label}</p></div>
    <div className="product-grid">{c.products.map((product, i) => <ProductEditorialCard product={product} index={i} key={product.code} />)}</div><p className="image-disclaimer">{c.footer.image_disclaimer}</p>
  </section>
}
export function ConstructionDetails({ c }: { c: Content }) {
  return <section className="construction" id="details"><div className="container section construction-grid"><div><Eyebrow>{c.ui.labels[3]}</Eyebrow><h2>{c.construction.title}</h2><p className="construction-note">{c.construction.note}</p><figure className="construction-photo"><EditorialImage media={c.media.construction} sizes="(min-width: 1024px) 40vw, 100vw" /></figure></div><div className="construction-rows">{c.construction.items.map((item, i) => <div className="construction-row" key={item.label}><span className="mono row-index">0{i + 1}</span><div><p className="mono row-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></div><Plus size={18} aria-hidden="true" /></div>)}</div></div></section>
}
export function AccessSection({ c }: { c: Content }) {
  return <section id="access" className="access container section"><div><Eyebrow><span className="signal-square" />{c.ui.labels[4]}</Eyebrow><h2>{c.access.title}</h2></div><div className="access-right"><p>{c.access.text}</p><EarlyAccessForm content={c.access} /></div></section>
}
export function SiteFooter({ c }: { c: Content }) {
  const credits = [c.media.hero, ...c.media.lookbook, ...c.products.map(product => product.image)]
  return <footer className="footer"><div className="container"><div className="footer-top"><div><a href="#top" className="wordmark">{c.brand.name}<span className="brand-mark" aria-hidden="true" /></a><p>{c.brand.tagline}</p></div><div className="footer-links">{c.footer.links.map((label, i) => i < 2 ? <a key={label} href={i === 0 ? '#collection' : '#manifesto'}>{label}<ArrowUpRight size={15} aria-hidden="true" /></a> : <span key={label}>{label}<small>{c.footer.incomplete}</small></span>)}</div></div><div className="photo-credits"><p>{c.footer.image_disclaimer}</p><details><summary className="mono">{c.footer.credits_label}</summary><ul>{credits.map(media => <li key={media.src}>{media.source ? <a href={media.source} target="_blank" rel="noreferrer">{media.credit}<ArrowUpRight size={14} aria-hidden="true" /></a> : <span>{media.credit}</span>}</li>)}</ul></details></div><div className="footer-bottom mono"><span>{c.footer.note}</span><div>{c.footer.legal.map(label => <span key={label}>{label} <small>— {c.footer.incomplete}</small></span>)}</div></div><div className="footer-wordmark" aria-hidden="true">{c.brand.name}</div></div></footer>
}
