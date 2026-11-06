import { getContent } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { HeroSection, ManifestoSection, LookbookGrid, ProductsSection, ConstructionDetails, AccessSection, SiteFooter } from '@/components/editorial-sections'

export default function Page() {
  const c = getContent()
  return <div id="top"><a className="skip-link" href="#main">{c.ui.skip}</a><div className="announcement mono"><span className="signal-square" /><span>{c.drop.name} / {c.drop.status}</span></div><SiteHeader brand={c.brand.name} ui={c.ui} cta={c.drop.primary_cta} /><main id="main"><HeroSection c={c} /><ManifestoSection c={c} /><LookbookGrid c={c} /><ProductsSection c={c} /><ConstructionDetails c={c} /><AccessSection c={c} /></main><SiteFooter c={c} /></div>
}
