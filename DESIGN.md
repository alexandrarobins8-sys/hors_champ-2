# HORS CHAMP — DESIGN SYSTEM

**Direction :** 05 — SAFETY SIGNAL  
**Collection :** DROP 01 — OUTSIDE SYSTEM  
**Version :** 1.0 · 06 novembre 2026  
**Destination :** v0 → Next.js / Tailwind CSS → Vercel  
**Langue de l'interface :** français (`fr-FR`)

> **INSTRUCTION PRIORITAIRE POUR v0**  
> Ce fichier est la source de vérité **visuelle et d'interaction** du projet HORS CHAMP. Applique ses tokens, ses compositions et ses composants à toutes les sections. Le fichier `content/content.yaml` est, séparément, la source de vérité **éditoriale** : aucun texte marketing ne doit être dupliqué en dur dans les composants. Lorsque le contenu, l'accessibilité ou la faisabilité technique exige un arbitrage, privilégie d'abord l'exactitude du brief et l'accessibilité, puis la cohérence visuelle. **Construis le site directement** : pas de simple concept, mockup, plan ou documentation en guise de livrable.

---

## 01. ADN DE MARQUE ET INTENTION

HORS CHAMP est une **marque fictive** de streetwear parisien préparant un premier drop de démonstration, « Drop 01 — Outside System ».

- **Promesse exacte :** « Des vêtements essentiels, construits pour vivre dehors. »
- **Positionnement :** minimalisme parisien, silhouettes amples et premium, imperfections assumées, détails techniques, nostalgie sportswear, vêtements conçus pour être portés, usés et recontextualisés.
- **Synthèse :** *Parisian restraint × elevated essentials × worn-in imperfection × technical protection × old-school futurism*.
- **Angle recommandé par l'exercice :** *Quiet utility × worn precision*.
- **Interprétation Safety Signal :** conserver un site calme, architectural et désirable ; réserver le vert de signalisation aux éléments réellement actionnables et à quelques accents graphiques. Le signal doit guider le regard, **pas recouvrir toute la page**.
- **Personnalité :** retenue, directe, précise, urbaine, utilitaire, non ostentatoire.
- **Ton rédactionnel :** concis, tangible, sans emphase publicitaire, sans promesses de rareté ni urgence artificielle.

### Mots-clés visuels

`UTILITY` · `MOVEMENT` · `PRECISION` · `WORN` · `PROTECTION` · `OUTSIDE` · `SIGNAL`

### À exclure

Site SaaS, dashboard, boutique e-commerce générique, luxe classique, gradients décoratifs, glassmorphism, cartes arrondies systématiques, gros effets 3D, faux avis, faux compteurs, promotions fictives, codes visuels copiés d'A.P.C., Fear of God, Golden Goose, New Balance ou Yeezy. Les références du brief servent **à identifier des tensions créatives, pas à reproduire une marque**.

---

## 02. PALETTE ET TOKENS COULEUR

### 2.1 Couleurs primitives — couleurs du brief PDF

| Token | Hex | Rôle |
|---|---|---|
| `chalk` | `#E8E7E2` | Fond principal clair, esprit papier/minéral |
| `carbon` | `#151515` | Texte principal, fond sombre, structure |
| `concrete` | `#898985` | Bordures ou éléments graphiques secondaires ; **pas** de petit texte sur chalk |
| `steel` | `#8B8B87` | Surfaces de média, repères et détails non textuels |
| `signal` | `#D6FF3F` | CTA principal, focus et repères ponctuels |
| `rust` | `#8D4936` | Accent éditorial rare, rappel d'imperfection et de patine |

**Tokens de support proposés** (non issus du PDF) : `white = #FFFFFF`, `muted-ink = #555550`, `hairline = #C7C6BF`, `surface-dark = #202020`. Ils complètent la palette pour la lisibilité et les états d'interface.

### 2.2 Proportion d'utilisation cible

- **60 %** chalk / fonds neutres.
- **30 %** carbon / photographies sombres / typographie / surfaces contrastées.
- **7 %** concrete, steel et gris de support.
- **3 % maximum** signal et rust cumulés sur les écrans éditoriaux courants.

Ces ratios sont une **intention de direction artistique**, pas un audit automatique au pixel. Un grand CTA ou une bande signal ponctuelle peut dépasser localement ce ratio.

### 2.3 Tokens CSS prêts pour v0

Implémenter dans `app/globals.css` en conservant les tokens existants si un projet en possède déjà. Mapper les noms sémantiques aux variables Tailwind/shadcn **sans créer deux systèmes parallèles**.

```css
:root {
  /* Primitive colors — brief */
  --hc-chalk: #E8E7E2;
  --hc-carbon: #151515;
  --hc-concrete: #898985;
  --hc-steel: #8B8B87;
  --hc-signal: #D6FF3F;
  --hc-rust: #8D4936;

  /* Support colors — design-system proposal */
  --hc-white: #FFFFFF;
  --hc-muted-ink: #555550;
  --hc-hairline: #C7C6BF;
  --hc-surface-dark: #202020;

  /* Semantic colors */
  --hc-bg: var(--hc-chalk);
  --hc-surface: var(--hc-chalk);
  --hc-fg: var(--hc-carbon);
  --hc-fg-muted: var(--hc-muted-ink);
  --hc-border: var(--hc-hairline);
  --hc-accent: var(--hc-signal);
  --hc-accent-fg: var(--hc-carbon);
  --hc-editorial-accent: var(--hc-rust);
  --hc-focus: var(--hc-carbon);

  /* Typography */
  --hc-font-sans: "Space Grotesk", Arial, sans-serif;
  --hc-font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --hc-text-xs: 0.6875rem;  /* 11px */
  --hc-text-sm: 0.8125rem;  /* 13px */
  --hc-text-base: 1rem;     /* 16px */
  --hc-text-lg: 1.125rem;   /* 18px */
  --hc-text-xl: 1.375rem;   /* 22px */
  --hc-title-section: clamp(2.625rem, 6vw, 5.5rem);
  --hc-title-hero: clamp(3.25rem, 11vw, 10.5rem);

  /* Spacing — base 4px */
  --hc-space-1: 0.25rem;
  --hc-space-2: 0.5rem;
  --hc-space-3: 0.75rem;
  --hc-space-4: 1rem;
  --hc-space-5: 1.25rem;
  --hc-space-6: 1.5rem;
  --hc-space-8: 2rem;
  --hc-space-10: 2.5rem;
  --hc-space-12: 3rem;
  --hc-space-16: 4rem;
  --hc-space-20: 5rem;
  --hc-space-24: 6rem;
  --hc-space-32: 8rem;

  /* Shape */
  --hc-radius-none: 0;
  --hc-radius-sm: 2px;
  --hc-radius-md: 4px;
  --hc-border-width: 1px;

  /* Layout */
  --hc-container-max: 1440px;
  --hc-gutter: 16px;
  --hc-section-gap: 64px;

  /* Interaction */
  --hc-duration-fast: 150ms;
  --hc-duration-base: 220ms;
  --hc-ease-out: cubic-bezier(.22, 1, .36, 1);
}

@media (min-width: 640px) {
  :root { --hc-gutter: 32px; --hc-section-gap: 96px; }
}
@media (min-width: 1024px) {
  :root { --hc-gutter: 48px; --hc-section-gap: 128px; }
}
@media (min-width: 1440px) {
  :root { --hc-gutter: 64px; }
}

html { scroll-behavior: smooth; }
body {
  background: var(--hc-bg);
  color: var(--hc-fg);
  font-family: var(--hc-font-sans);
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--hc-signal); color: var(--hc-carbon); }
:focus-visible { outline: 2px solid var(--hc-focus); outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 2.4 Contrastes et usage sémantique

- Texte principal : `carbon` sur `chalk` (excellent contraste).
- Texte secondaire lisible : `muted-ink` sur `chalk` (environ **6:1**).
- Bouton `signal` : fond `#D6FF3F`, texte `carbon` (environ **15,9:1**).
- `concrete` et `steel` sur `chalk` : contraste **insuffisant pour du petit texte** ; les réserver aux séparateurs, pictogrammes non essentiels et surfaces décoratives.
- `rust` sur `chalk` peut porter une courte étiquette, avec vérification de contraste.
- Toujours vérifier les compositions sur photo ou fond sombre ; ajouter un aplat/gradient **fonctionnel de lisibilité** si nécessaire, pas décoratif.
- États d'erreur : privilégier un message textuel explicite, pas la couleur seule. Aucun rouge d'erreur arbitraire obligatoire dans la direction visuelle ; étendre les tokens uniquement si la fonctionnalité l'exige.

---

## 03. TYPOGRAPHIE

### 3.1 Familles

- **Space Grotesk** — titres, paragraphes, chiffres. Font principale ouverte et expressive, forte sans être luxueuse.
- **IBM Plex Mono** — labels techniques, index de sections, repères, métadonnées, CTA compacts.
- Charger les deux familles avec `next/font/google` (sous-ensembles nécessaires uniquement), exposées sous forme de variables CSS. **Ne pas multiplier les familles de polices.**

### 3.2 Échelle et styles

| Usage | Taille | Poids | Interlignage | Tracking / casse |
|---|---|---|---|---|
| Hero H1 | `clamp(52px, 11vw, 168px)` | 700 | `0.86` | `-0.075em`, uppercase |
| H2 section | `clamp(42px, 6vw, 88px)` | 700 | `0.96` | `-0.055em` |
| H3 / nom produit | `clamp(24px, 3vw, 42px)` | 600 | `1.05` | `-0.035em` |
| Manifeste / statement | `clamp(24px, 3.8vw, 56px)` | 500 | `1.1` | `-0.04em` |
| Texte principal | `16–18px` | 400 | `1.45–1.6` | normal |
| Texte secondaire | `14–16px` | 400 | `1.5` | normal |
| Label technique | `11–12px` | 500 | `1.25` | `+0.06em`, uppercase |
| Bouton | `12–13px` | 600 | `1` | `+0.04em`, uppercase |

**Règle critique :** le titre « OUTSIDE SYSTEM » doit être composé sur une ou deux lignes selon l'écran, **jamais tronqué**. Employer `overflow-wrap`, ajustement de taille et éventuellement deux `span` contrôlés ; ne pas utiliser un `white-space: nowrap` provoquant du scroll horizontal.

### 3.3 Voix et microcopy

- Phrases courtes, concrètes et non théâtrales.
- Légendes visuelles possibles : `01 / FORM`, `02 / MOVEMENT`, `03 / DETAIL`, `CONSTRUCTION NOTES`.
- Ne jamais écrire `SOLD OUT`, `LIMITED STOCK`, `ONLY 2 LEFT`, `FINAL HOURS`, etc., puisqu'aucune disponibilité n'est confirmée.
- Les produits sont explicitement étiquetés **« Produit de démonstration »**.

---

## 04. GRILLE, ESPACEMENTS ET COMPOSITION

### 4.1 Conteneur et colonnes

- Conteneur centré, `max-width: 1440px`, gouttières fluides avec `--hc-gutter`.
- **Mobile (<640px) :** grille 4 colonnes conceptuelles, réalisation CSS 1 colonne pour les contenus structurants. Gouttières 16px.
- **Tablette (640–1023px) :** grille 6 colonnes, gouttières 32px ; produits en 2 colonnes si l'espace le permet.
- **Desktop (≥1024px) :** grille 12 colonnes, gouttières 48px ; produits en 2 ou 4 colonnes éditoriales selon l'importance des images.
- **Grand écran (≥1440px) :** marges de 64px, largeur plafonnée à 1440px ; ne pas étirer le contenu indéfiniment.

### 4.2 Rythme

- Espacement vertical entre grandes sections : `64px / 96px / 128px` pour mobile / tablette / desktop.
- Espacement entre titre et contenu : `24–40px`.
- Espacement entre éléments liés : `8–16px`.
- Ligne fine de séparation (`1px`) fréquente, mais ne pas transformer chaque section en carte.
- Ajouter du contraste par **échelle et vide**, pas par multiplication des effets.

### 4.3 Formes et profondeur

- Rayons **0–4px maximum** ; boutons en rectangles francs, pas de pill buttons.
- Bordures fines, visibles et intentionnelles.
- Pas de `box-shadow` décorative ; employer fonds et typographie.
- Un seul accent `signal` majeur par zone de lecture lorsque possible.
- Place des images dans des cadres aux ratios constants ; ne pas les déformer.

---

## 05. PHOTOGRAPHIE, VISUELS ET LOOKBOOK

### Direction photo issue du brief

- Silhouettes en mouvement, souvent partielles.
- Cadrages non centrés et angles documentaires.
- Détails de matière, piqûres et construction, sans prétendre montrer une caractéristique non confirmée.
- Lumière froide ou flash direct, imperfections visibles.
- Environnements : béton, métal, bitume, vestiaires, architecture urbaine.
- Éviter les shootings trop propres, trop luxueux ou studio de catalogue.

### Règles de vérité des images

Aucune image officielle n'est livrée avec le brief. **Ne pas présenter une image IA, stock ou empruntée comme une photographie authentique de HORS CHAMP.** Pour le MVP, créer des *placeholders de direction artistique* esthétiques, clairement signalés : trames, blocs monochromes, cadrages abstraits, repères `VISUEL DE DÉMONSTRATION`, `LOOKBOOK / PLACEHOLDER`, etc. Utiliser des images réelles seulement si elles sont fournies ultérieurement et autorisées.

### Ratios recommandés

| Emplacement | Ratio | Traitement |
|---|---|---|
| Hero | Desktop `16:10` ou composition asymétrique | Image/placeholder dominant, texte lisible |
| Hero mobile | `4:5` | Re-cadrage assumé, CTA conservés |
| Lookbook portrait | `3:4` | Silhouette / mouvement |
| Lookbook détail | `1:1` | Matière / zoom |
| Lookbook paysage | `4:3` | Architecture / environnement |
| Produit | `4:5` | Placeholders cohérents, jamais « packshots officiels » fictifs |

---

## 06. BIBLIOTHÈQUE DE COMPOSANTS

Les composants ci-dessous constituent les **contrats visuels et d'interaction** à implémenter dans React/Tailwind. Utiliser des éléments HTML natifs et accessibles avant d'ajouter une bibliothèque. shadcn/ui peut être employé si cela simplifie vraiment le travail.

### 6.1 `AnnouncementBar`

- Hauteur min. 32–40px ; fond `carbon`, texte `chalk`.
- Texte conseillé : `DROP 01 — OUTSIDE SYSTEM / COLLECTION DE DÉMONSTRATION`.
- Petit marqueur `signal` optionnel ; **aucun faux compte à rebours**.
- Lisible sur mobile ; texte centré ou défilant **seulement si contrôlable**. Préférer du texte statique.

### 6.2 `SiteHeader` et `MobileNav`

- Logo texte `HORS CHAMP`, graisse 700, uppercase.
- Navigation : `Collection`, `Manifeste`, `Accès anticipé`.
- CTA secondaire possible : `Accéder au drop` → `#access`.
- Fond chalk ou carbon selon l'architecture, séparateur 1px.
- Hauteur 64px mobile, 76–88px desktop.
- Desktop : nav horizontale ; mobile : bouton menu accessible (`aria-expanded`, `aria-controls`), panneau réel, fermeture au clic.
- Header sticky possible **uniquement** s'il ne cache pas les titres d'ancre (`scroll-margin-top`).

### 6.3 `PrimaryButton`

- Fond `signal`, texte `carbon`, bordure `carbon` si nécessaire.
- Taille min. **44px de hauteur**, padding horizontal 20–28px.
- Police mono ou sans, uppercase, graisse 600.
- Hover : assombrissement subtil de bordure, petite translation d'icône ou changement de contraste sans effet excessif.
- Active : transformation discrète (`translateY(1px)`), disabled : opacité et curseur adaptés.
- Focus : contour visible d'au moins 2px, séparé du fond du bouton.
- Variantes : `primary`, `outline`, `text-link` ; une seule API de composant.

### 6.4 `SecondaryButton`

- Fond transparent, texte carbon, bordure carbon 1px.
- Même taille et alignement que le CTA principal.
- Hover : fond carbon / texte chalk, sans transition trop lente.
- Sur fond sombre : bordure/textes chalk.

### 6.5 `SectionEyebrow`

- Préfixe numéroté : `01 / MANIFESTE`, `02 / LOOKBOOK`…
- Font IBM Plex Mono, 11–12px, uppercase, tracking 0.06em.
- Petite ligne ou carré `signal` facultatif.
- Ne pas utiliser le signal sur toutes les lignes, conserver la retenue.

### 6.6 `HeroSection`

- Index visible : `DROP 01`.
- Titre : **OUTSIDE SYSTEM** (composition contrôlée, immense mais jamais coupée).
- Sous-titre exact : **Des vêtements essentiels, construits pour vivre dehors.**
- Boutons : `Accéder au drop` → `#access` et `Découvrir la collection` → `#collection`.
- Visuel éditorial grand format ou placeholder honnête.
- Version desktop : composition asymétrique texte/image, suffisamment d'air.
- Version mobile : ordre cohérent `eyebrow → H1 → promesse → CTA → visuel` (ou variante avec visuel en arrière-plan **seulement si la lisibilité est garantie**).
- **Interdictions :** date de lancement fictive, faux stock, jauge de disponibilité, urgence artificielle.

### 6.7 `ManifestoSection`

- Titre exact : **Pas une saison. Un système.**
- Texte exact : **Des pièces simples, pensées pour les déplacements, les couches et les usages quotidiens.**
- Texte affiché en grande taille, largeur de lecture maîtrisée.
- Fond chalk, détails carbon et éventuellement une petite marque signal.
- Structure asymétrique possible : index à gauche, manifeste à droite.

### 6.8 `LookbookGrid`

- 3 cadrages distincts : silhouette/mouvement, matière/détail, architecture/usage.
- Desktop : grille éditoriale asymétrique (ex. 6/3/3 ou 7/5 sur deux lignes).
- Mobile : pile verticale avec ratios conservés, marges confortables.
- Légendes monospace : `FORM`, `DETAIL`, `MOVEMENT`.
- Si placeholders : afficher explicitement `VISUEL DE DÉMONSTRATION`.
- Pas de slider/carousel nécessaire au MVP : une grille statique est plus rapide et plus robuste.

### 6.9 `ProductEditorialCard`

- Carte **éditoriale**, pas « carte boutique » : grand visuel/placeholder, nom, courte description, status.
- Pas d'ombre, pas de gros coins arrondis, pas de boutons « Ajouter au panier ».
- Option : fine ligne inférieure et index (`01 / 04`).
- Les quatre produits, dans cet ordre :

| Nom | Description validée | Statut obligatoire |
|---|---|---|
| Field Hoodie | Hoodie oversize en coton lourd, lavé et structuré. | Produit de démonstration |
| Layer Shell | Une couche légère pensée pour protéger sans alourdir. | Produit de démonstration |
| Archive Tee | Un t-shirt ample, marqué par un imprimé discret. | Produit de démonstration |
| Signal Cap | Une casquette souple avec un détail réfléchissant. | Produit de démonstration |

**Ne pas inventer :** prix, stock, tailles, couleurs commerciales, certificats, avis clients, précommandes ou disponibilité.

### 6.10 `ConstructionDetailSection`

- Section documentaire exprimant volumes, superpositions, protection, imperfections et usages quotidiens.
- Layout : rangées numérotées, schémas abstraits non trompeurs, séparateurs fins, légendes techniques.
- Exemple de labels autorisés : `VOLUME`, `LAYERING`, `MOVEMENT`, `EVERYDAY USE`.
- Ne pas transformer des intentions créatives en allégations techniques précises (grammages exacts, étanchéité, certifications, etc.).

### 6.11 `EarlyAccessForm`

- Titre : **Le drop arrive bientôt.**
- Corps : **Inscris-toi pour recevoir l'accès anticipé et les informations de lancement.**
- Champ `<input type="email" required autocomplete="email">`, label visible **Ton adresse email**.
- CTA **Rejoindre la liste**.
- **Mode démonstration** : aucune API, aucun backend, aucune sauvegarde, aucun service d'emailing.
- Valider côté navigateur et n'afficher **que ce message transparent** après soumission valide : `Mode démonstration — aucune adresse email n'a été enregistrée.`
- Le message du brief `Merci. Tu recevras les prochaines informations du drop.` est réservé à une future version **réellement connectée** ; ne pas l'afficher dans cette version.
- Ne pas envoyer l'adresse en analytics, query string, console ou stockage local.
- Message d'état annoncé via `role="status"` / `aria-live="polite"`.
- Champ hauteur ≥48px, focus visible, contraste renforcé.

### 6.12 `SiteFooter`

- Logo + signature + liens : `Collection`, `Manifeste`, `Contact`, `Instagram`, `Mentions légales`, `Politique de confidentialité`.
- Les ancres internes doivent être réelles ; les destinations contact/social/juridiques **ne sont pas fournies** : afficher `À compléter` ou une indication honnête, **pas de faux liens actifs**.
- Ne pas publier de mentions légales inventées pour une marque fictive.
- Footer carbon/chalk au choix, contraste systématiquement vérifié.

### 6.13 Composants transverses

- `EditorialDivider` : 1px, hairline ou carbon selon contraste.
- `ImagePlaceholder` : ratio explicite, caption « Visuel de démonstration », accessible.
- `StatusLabel` : taille 11–12px, uppercase et sans code couleur trompeur.
- `Container` : max-width et gutters du système.
- `Section` : spacing vertical standardisé.
- `InlineArrow` : petite flèche directionnelle en CSS ou Lucide, `aria-hidden` si décorative.

---

## 07. ÉTATS ET MICRO-INTERACTIONS

| Élément | Repos | Hover / focus | Active / réponse |
|---|---|---|---|
| CTA principal | signal + carbon | contraste conservé, déplacement icône max 4px | feedback discret |
| CTA outline | bordure carbon | inversion carbon/chalk | feedback discret |
| Liens de nav | carbon, label compact | soulignement 1px | ancre valide |
| Carte produit | statique, image dominante | léger changement visuel non essentiel | pas de fausse action d'achat |
| Champ email | bordure carbon/hairline | focus 2px visible | validation native + retour démo |
| Menu mobile | fermé | focus clavier lisible | s'ouvre, se ferme, annonce son état |

- Durées `150–220ms`, easing `cubic-bezier(.22, 1, .36, 1)`.
- Pas de reveal-on-scroll obligatoire ; éviter animations bloquantes ou effets de parallax.
- Respecter `prefers-reduced-motion` et l'usage clavier.
- N'utiliser une interaction que si elle accomplit une tâche ; **ne jamais simuler un service absent**.

---

## 08. RESPONSIVE — RÈGLES PRÉCISES

| Largeur | Mise en page | Typographie | Navigation / CTA |
|---|---|---|---|
| 320–639px | 1 colonne de contenu, gutter 16px | H1 min 52px si compatible avec texte, H2 ~42px | Menu mobile, CTA empilés ou pleine largeur |
| 640–767px | 2 colonnes possibles, gutter 32px | Titres fluides | Nav simplifiée si besoin |
| 768–1023px | Lookbook asymétrique simplifié, produits 2 colonnes | Titres progressifs | Contrôler la place du header |
| 1024–1439px | 12 colonnes, split hero, grands médias | Forte hiérarchie | Nav desktop complète |
| ≥1440px | Conteneur 1440px max, marges 64px | Taille H1 plafonnée | Ne pas étirer les lignes |

### Tests de non-régression obligatoires

- **375px** : aucune ligne de « OUTSIDE SYSTEM » coupée, aucun scroll horizontal ; accès anticipé utilisable avec clavier mobile.
- **768px** : images non écrasées, compositions lisibles, produits à 2 colonnes si possible.
- **1440px** : maîtrise du vide, longueur de ligne confortable, hero impactant.
- Tester également 320px et 1024px pour les points de rupture.
- Images dimensionnées avec `object-fit: cover` seulement sur visuels photographiques appropriés ; ne pas couper du texte contenu dans une image.
- Aucun élément essentiel placé derrière le sticky header.
- Taille de cible interactive conseillée : au moins 44×44px.

---

## 09. STRUCTURE DE PAGE IMPOSÉE

Respecter **l'ordre exact** des neuf zones retenues dans le document de l'exercice :

1. **Announcement bar**
2. **Header**
3. **Hero du Drop 01**
4. **Manifeste court**
5. **Silhouettes / lookbook**
6. **Produits**
7. **Système de tailles ou détails techniques** — ici, privilégier des **détails de construction qualitatifs**, sans inventer de taille ni caractéristique réelle
8. **Accès anticipé**
9. **Footer**

### Ancres et informations architecture

- `#collection` : produits ou entrée de collection.
- `#manifesto` : manifeste.
- `#lookbook` : silhouettes.
- `#details` : détails de construction.
- `#access` : formulaire de démonstration.
- Le titre du hero est un `h1` unique ; les sections structurantes reçoivent un `h2`.
- La page doit rester **une seule landing page**, sans multi-page e-commerce inutile.

---

## 10. CONTRAT ÉDITORIAL ET CONTENU YAML

**L'exercice sépare le contenu du design.** Le fichier éditorial `content/content.yaml` doit contenir a minima les clés ci-dessous, reprises du brief et du prompt de l'exercice. Le design system **n'est pas** un substitut à ce fichier : lire le YAML et distribuer ses valeurs dans les composants. Ne pas coder ces valeurs en double.

```yaml
brand:
  name: "HORS CHAMP"
  tagline: "Des vêtements essentiels, construits pour vivre dehors."
  territory:
    - "sobriété parisienne"
    - "volume contemporain"
    - "imperfection assumée"
    - "protection technique"
    - "nostalgie sportswear"

drop:
  name: "Drop 01 — Outside System"
  status: "Collection de démonstration"
  launch_date: "Date à confirmer"
  primary_cta:
    label: "Accéder au drop"
    href: "#access"
  secondary_cta:
    label: "Découvrir la collection"
    href: "#collection"

manifesto:
  title: "Pas une saison. Un système."
  text: "Des pièces simples, pensées pour les déplacements, les couches et les usages quotidiens."

products:
  - name: "Field Hoodie"
    description: "Hoodie oversize en coton lourd, lavé et structuré."
    status: "Produit de démonstration"
  - name: "Layer Shell"
    description: "Une couche légère pensée pour protéger sans alourdir."
    status: "Produit de démonstration"
  - name: "Archive Tee"
    description: "Un t-shirt ample, marqué par un imprimé discret."
    status: "Produit de démonstration"
  - name: "Signal Cap"
    description: "Une casquette souple avec un détail réfléchissant."
    status: "Produit de démonstration"

access:
  title: "Le drop arrive bientôt."
  text: "Inscris-toi pour recevoir l'accès anticipé et les informations de lancement."
  input_label: "Ton adresse email"
  button_label: "Rejoindre la liste"
  confirmation_message: "Merci. Tu recevras les prochaines informations du drop."
  backend_required: false
  demo_notice: "Mode démonstration — aucune adresse email n'a été enregistrée."

footer:
  links: ["Collection", "Manifeste", "Contact", "Instagram"]
  legal: ["Mentions légales", "Politique de confidentialité"]
```

**Application stricte :** parce que `backend_required: false`, ne pas afficher `confirmation_message` après soumission. Il n'est là que pour une éventuelle future version dotée d'un vrai service d'inscription. `launch_date: "Date à confirmer"` n'autorise pas l'affichage d'une date fictive. Les valeurs manquantes (prix, stock, tailles, contacts, réseaux) **doivent rester manquantes**.

---

## 11. STACK ET MODALITÉS D'IMPLÉMENTATION POUR v0

### Stack cible

- **Next.js**, App Router, TypeScript.
- **Tailwind CSS** pour la mise en forme.
- **React Server Components** par défaut ; `"use client"` uniquement pour menu mobile et formulaire démo si nécessaire.
- **next/font/google** pour Space Grotesk et IBM Plex Mono.
- **Lucide** seulement si une icône aide réellement à comprendre une action.
- **Aucun backend, base de données, compte utilisateur, paiement, service email ou variable d'environnement**.
- **Vercel** comme cible de déploiement ; GitHub facultatif pour versionner les itérations.

### Arborescence conseillée

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    button.tsx
    container.tsx
    section-label.tsx
    image-placeholder.tsx
  announcement-bar.tsx
  site-header.tsx
  hero-section.tsx
  manifesto-section.tsx
  lookbook-grid.tsx
  products-section.tsx
  construction-details.tsx
  early-access-form.tsx
  site-footer.tsx
content/
  content.yaml
lib/
  content.ts
DESIGN.md
README.md
```

### Comportement attendu de v0

1. Lire intégralement **ce DESIGN.md** avant de commencer.
2. Créer `content/content.yaml` depuis le contrat éditorial ci-dessus.
3. Charger YAML côté serveur au build ou au rendu serveur, sans serveur métier ; une petite dépendance comme `yaml` est acceptable.
4. Réaliser immédiatement les 9 sections et tous les composants nécessaires.
5. Réutiliser les variables CSS, **pas de palette alternative** ni de composants non harmonisés.
6. Employer des placeholders honnêtes si aucune photographie n'est attachée.
7. Implémenter les vraies ancres et les interactions du MVP.
8. Préférer du CSS/Tailwind simple : pas de librairie d'animation ni de gestion d'état disproportionnée.
9. Vérifier compilation (`npm run build`) et rendu responsive avant publication.
10. Préparer un site **déployable immédiatement** sur Vercel, sans clef API ni configuration supplémentaire.

---

## 12. ACCESSIBILITÉ, PERFORMANCE ET SEO

### Accessibilité

- Langue `<html lang="fr">`.
- Un `h1`, puis titres hiérarchiques.
- Contraste texte normal ≥4.5:1, gros texte ≥3:1, éléments d'interface discernables.
- Focus clavier visible ; états non communiqués par la seule couleur.
- `alt` utile pour images informatives ; `alt=""` pour décorations pures ; les placeholders sont explicitement identifiés dans l'interface.
- Menu mobile avec `aria-expanded`, zone contrôlée et fermeture possible.
- Formulaire avec label explicite, `type=email`, `required`, message d'état annoncé.
- Prise en compte des préférences de réduction du mouvement.

### Performance

- Images statiques et poids limité, dimensions explicites ; `next/image` si images réelles fournies.
- Pas de vidéos de fond automatiques.
- Pas d'animations lourdes ni dépendances inutiles.
- Polices chargées avec `next/font`, poids et sous-ensembles minimaux.
- Éviter JavaScript sur les sections purement éditoriales.

### Métadonnées

- `title`: `HORS CHAMP — Drop 01 / Outside System`.
- `description`: `Des vêtements essentiels, construits pour vivre dehors. Découvrez Drop 01 — Outside System, une collection de démonstration HORS CHAMP.`
- Pas de faux `Product` schema.org avec prix/disponibilités, ni de données structurées commerciales inventées.

---

## 13. CHECKLIST D'ACCEPTATION DU MVP

### Direction artistique

- [ ] Le site ressemble à une **marque streetwear éditoriale**, pas à un SaaS ou un Shopify générique.
- [ ] `Chalk`, `Carbon` et `Signal` dominent de façon **mesurée** ; rust reste ponctuel.
- [ ] Typographies Space Grotesk + IBM Plex Mono, sans polices supplémentaires arbitraires.
- [ ] La hiérarchie, les marges et les détails techniques sont cohérents entre sections.
- [ ] Le hero « OUTSIDE SYSTEM » est spectaculaire **et** lisible sur mobile.

### Fidélité au brief

- [ ] 9 sections présentes dans l'ordre demandé.
- [ ] Promesse, manifeste, 4 produits et deux CTA reprennent les textes validés.
- [ ] `content/content.yaml` est la source de vérité éditoriale.
- [ ] Aucun faux stock, prix, avis, date, disponibilité, urgence ou rareté.
- [ ] Images de démonstration clairement identifiées.
- [ ] Formulaire sans backend avec message **transparent** après soumission.

### Exécution

- [ ] Les ancres `#collection`, `#manifesto`, `#lookbook`, `#details`, `#access` fonctionnent.
- [ ] Menu mobile, focus, formulaire et CTA sont accessibles et interactifs.
- [ ] Vérifications à 375px, 768px et 1440px, sans débordement horizontal.
- [ ] Aucune variable d'environnement requise.
- [ ] `npm run build` passe et l'application est déployable sur **Vercel**.

---

## 14. PROMPT COURT D'ACCOMPAGNEMENT À COLLER DANS v0

> Crée immédiatement la landing page Next.js de **HORS CHAMP — Drop 01 / Outside System**. Le fichier joint `DESIGN.md` constitue la **source de vérité visuelle et d'interaction** : respecte intégralement ses tokens CSS, sa direction **Safety Signal**, ses composants, ses grilles, son accessibilité et ses règles responsive. Crée `content/content.yaml` à partir du contrat éditorial du fichier et utilise ce YAML comme **source de vérité de contenu**. Génère les 9 sections dans l'ordre imposé, avec les deux CTA fonctionnels. N'invente ni photographie officielle, ni prix, ni stock, ni date, ni avis, ni rareté. Le formulaire d'accès anticipé reste une démo sans backend et affiche explicitement qu'aucune adresse n'est enregistrée. Priorise un rendu streetwear éditorial premium, sobre, avec un vert signal précis et ponctuel. Utilise Next.js App Router + TypeScript + Tailwind, sans services externes, et rends le projet compilable avec `npm run build`, prêt à déployer sur Vercel. **Génère le code et l'interface maintenant, pas un plan.**

---

## 15. TRAÇABILITÉ DES DÉCISIONS

**Repris de l'exercice PDF (pages 1 à 7) :** identité HORS CHAMP, territoire de marque, tensions créatives, référence `Quiet utility × worn precision`, **6 couleurs et hex**, principes de typographie, direction photographique, promesse, noms/descriptions des 4 produits, structure de la landing page, deux CTA, YAML, contraintes anti-fausse-rareté et formulaire visuel sans backend.

**Proposé pour cette direction 05 Safety Signal (non prescrit mot pour mot par le PDF) :** association Space Grotesk / IBM Plex Mono, règles quantitatives de proportion du signal, tokens complémentaires d'accessibilité, échelles détaillées de tailles/espacements, noms de composants, interactions et seuils responsive.

**Adaptation demandée pour ton workflow :** génération dans **v0** et déploiement sur **Vercel** (le PDF évoque Google AI Studio et Netlify). Le changement de plateforme **ne modifie pas** les contraintes produit/éditoriales de l'exercice.
