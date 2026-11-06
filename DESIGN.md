# HORS CHAMP — DESIGN SYSTEM & PROMPT DE CORRECTION v0

**Version :** 2.0 — corrigée, 06/11/2026  
**Direction :** 05 / SAFETY SIGNAL  
**Projet :** HORS CHAMP — Drop 01 / Outside System  
**Destination :** v0 → Next.js / TypeScript / Tailwind CSS → Vercel  
**Langue :** français  
**Fichiers à générer dans le projet :** composants React + `content/content.yaml` + images réellement affichées  

> **MISSION IMMÉDIATE POUR v0 : CORRIGER ET LIVRER LE SITE, PAS UNE MAQUETTE.**
>
> Si un projet HORS CHAMP existe déjà dans cette conversation v0, **modifie-le en place** : conserve sa structure fonctionnelle, corrige les erreurs visuelles et ajoute toutes les photographies de vêtements manquantes. Ne te contente pas de commenter le design ou de générer ce document. Si le projet est vierge, construis directement la landing page entière.
>
> **PRIORITÉ ABSOLUE : DES VÊTEMENTS VISIBLES SUR LE SITE.** Le précédent `DESIGN.md` demandait des blocs et des placeholders abstraits. Cette règle est ANNULÉE. Le hero, le lookbook et les quatre produits doivent utiliser de **véritables visuels représentant clairement des vêtements**, chargés et visibles dans la preview v0 ET après déploiement. Les photographies de référence ne sont **pas** des visuels officiels de HORS CHAMP : leur statut illustratif doit être mentionné discrètement et honnêtement.

---

## 0. AUDIT DES ERREURS ET DES EXIGENCES DU PDF

Le PDF d'exercice impose une **landing page de mode désirable**, et non une page de texte ou une interface remplie de rectangles. Il demande explicitement d'analyser la place de l'image, de rendre les silhouettes désirables, de montrer des matières et d'employer des silhouettes en mouvement, des cadrages partiels, des détails matières et des environnements urbains (pages 1, 3 et 4). Il autorise les visuels de démonstration lorsqu'aucune photo officielle n'est fournie, mais interdit de les présenter comme de vrais visuels de la marque (pages 5 à 7).

| Point du PDF | Problème de la précédente version | Correction impérative dans ce fichier |
|---|---|---|
| La marque vend un point de vue, une **silhouette** et une appartenance (p. 3) | Site surtout graphique, pas de vêtements visibles | Hero avec mannequin en vêtement + lookbook photographique |
| Montrer les produits du Drop 01 (p. 2) | Cartes sans photographies produit | **4 images réelles et identifiables** : hoodie, veste, t-shirt, casquette |
| Image : mouvement, cadrages partiels, matières, béton / bitume / architecture (p. 4) | Placeholders abstraits substitués aux photos | Photos éditoriales + macro textile + silhouette urbaine |
| Pas de vraies photos HORS CHAMP fournies (p. 5–7) | Ancienne règle interdisant pratiquement toute photographie | Utiliser des **photos libres de réutilisation à titre d'inspiration**, sans usurper la marque ; mention claire « visuels d'inspiration » |
| Architecture de landing page précise (p. 4 et 7) | Risque de sections manquantes ou trop abstraites | Conserver les **9 zones** dans l'ordre du brief |
| Prix / stock / date non confirmés (p. 2–7) | Risque de fiction commerciale | Aucun prix, stock, fausse rareté, compte à rebours, panier ou paiement |
| Contenu indépendant en YAML (p. 5–6) | Risque de texte dupliqué dans les composants | `content/content.yaml` source de vérité **éditoriale et média** |
| Formulaire visuel sans backend (p. 6–7) | Risque d'annoncer un enregistrement inexistant | Validation locale + message honnête de démonstration |
| Itérations et déploiement (p. 7–8) | PDF utilise Google AI Studio et Netlify | Adaptation demandée : **v0 + GitHub facultatif + Vercel** |

**Cette version remplace toutes les instructions contradictoires de l'ancien fichier.** En particulier, ne réutilise pas de composant `ImagePlaceholder` pour le hero, le lookbook ou les quatre cartes produits.

---

## 1. OBJECTIF PRODUIT

Créer une landing page **premium, éditoriale, mobile-first** pour la marque fictive de streetwear parisien **HORS CHAMP**, à l'occasion de sa collection de démonstration **Drop 01 — Outside System**.

**Promesse exacte :** « Des vêtements essentiels, construits pour vivre dehors. »

**CTA principal exact :** `Accéder au drop` → `#access` (accès anticipé ; **pas** une boutique active).  
**CTA secondaire exact :** `Découvrir la collection` → `#collection`.

**Territoire de marque :** minimalisme parisien, silhouettes premium amples, imperfections assumées, détail technique, nostalgie sportswear, vêtements portés/usés/recontextualisés.

**Tensions créatives issues de l'exercice :**
- *Parisian restraint* — retenue parisienne.
- *Elevated essentials* — essentiels haut de gamme.
- *Worn-in imperfection* — patine et imperfection.
- *Technical protection* — protection fonctionnelle.
- *Old-school futurism* — nostalgie sportswear et volume.

**Direction d'ensemble recommandée par le PDF :** *Quiet utility × worn precision.*  
**Application spécifique Safety Signal :** base minimaliste et graphique, avec touches de vert fluo pour hiérarchiser l'action, **jamais** pour masquer la mode ou concurrencer les photos.

Références évoquées par le PDF : A.P.C., Fear of God, Golden Goose, New Balance Protection Pack et Yeezy old school **uniquement pour comprendre des tensions**. Ne reproduire ni leur logo, ni leurs pages, ni leurs produits.

---

## 2. EXIGENCE PHOTO NON NÉGOCIABLE — LE CORRECTIF ESSENTIEL

### 2.1 Nombre et présence des photos

Le résultat final doit comporter **au minimum huit emplacements photographiques réellement remplis** :

1. **Hero : 1** grande photo éditoriale d'une silhouette habillée ; le vêtement doit être clairement visible.
2. **Lookbook : 3** images de nature différente : silhouette en mouvement/urbaine, détail textile ou vêtement, vue éditoriale d'ensemble.
3. **Produits : 4** photos montrant réellement chacune sa catégorie : hoodie, veste légère, t-shirt, casquette.
4. **Détails de construction :** une macro photo de tissu ou de zip est vivement recommandée, en plus des huit images précédentes.

**Aucune de ces zones ne doit être un rectangle uni, une trame CSS, un SVG d'attente, une icône de vêtement ou `/placeholder.svg`.** Des surfaces `chalk/carbon/steel` peuvent structurer la mise en page, mais ne remplacent jamais les photographies attendues.

### 2.2 Banque de photos de référence sélectionnées pour amorcer le MVP

Les URL ci-dessous correspondent à des photos Unsplash décrites comme **« free to use under the Unsplash License »** sur leurs pages sources. Ce sont des **images d'inspiration illustratives**, pas des photographies de créations HORS CHAMP. Vérifier visuellement le cadrage et les éventuels logos visibles avant de les conserver. **Ne jamais les créditer comme une campagne HORS CHAMP.**

**Important pour v0 :** essaie d'abord d'**enregistrer chaque photo réellement utilisée dans `public/images/`** avec les noms ci-dessous, puis référence le fichier local. Si ton environnement ne peut pas télécharger le média, utilise la **URL CDN complète** dans `src` (avec `next/image` + `remotePatterns` pour `images.unsplash.com`), en vérifiant que la preview charge vraiment le visuel. Les pages sources sont incluses pour retrouver ou remplacer la photo, pas pour servir comme `src` d'une image.

| Emplacement / fichier local visé | Sujet devant être visible | URL CDN (source utilisable dans `src`) | Page de la photo / auteur |
|---|---|---|---|
| `hero-streetwear.jpg` | Silhouette streetwear dans un environnement de béton / urbain | `https://images.unsplash.com/photo-1590330297626-d7aff25a0431?auto=format&fit=crop&w=1800&q=85` | https://unsplash.com/photos/2UTk-Nip5aM — Mike Von |
| `product-field-hoodie.jpg` | **Véritable hoodie noir porté** | `https://images.unsplash.com/photo-1647797819874-f51a8a8fc5c0?auto=format&fit=crop&w=1100&q=85` | https://unsplash.com/photos/r-fZqxXDG-8 — MEHRAX |
| `product-layer-shell.jpg` | **Veste / outerwear à zip portée** | `https://images.unsplash.com/photo-1578964046312-69d266a3e739?auto=format&fit=crop&w=1100&q=85` | https://unsplash.com/photos/kBoAgvwb2X8 — Nafis Al Sadnan |
| `product-archive-tee.jpg` | **T-shirt oversize porté**, corps et volume reconnaissables | `https://images.unsplash.com/photo-1780566759977-ff8b5d53731c?auto=format&fit=crop&w=1100&q=85` | https://unsplash.com/photos/Su_IaoGIjBg — Anton K Wibowo |
| `product-signal-cap.jpg` | **Casquette de baseball noire** reconnaissable | `https://images.unsplash.com/photo-1557225451-b03ada84e645?auto=format&fit=crop&w=1100&q=85` | https://unsplash.com/photos/IVb43vObfMA — Julian Faist |
| `lookbook-movement.jpg` | Silhouette urbaine / T-shirt en extérieur, photographie de mode | `https://images.unsplash.com/photo-1779040620498-d0698c9afd97?auto=format&fit=crop&w=1200&q=85` | https://unsplash.com/photos/tO-NFxrfmo8 — sammy swae |
| `lookbook-detail.jpg` | **Matière textile en gros plan**, texture palpable | `https://images.unsplash.com/photo-1742113041820-ba5b9da08f9a?auto=format&fit=crop&w=1000&q=85` | https://unsplash.com/photos/mXU4q6Oei6E — Olga Kovalski |
| `lookbook-cap.jpg` | Casquette portée / détail de silhouette, complément photographique | `https://images.unsplash.com/photo-1776501496576-f89b3e14e7ac?auto=format&fit=crop&w=1200&q=85` | https://unsplash.com/photos/Li_j8esIwLo — Tina Devidze |

**Sélection éditoriale :** si une photo ne ressemble pas à la pièce attendue, contient un gros logo étranger, ne fonctionne pas, ou cadre le vêtement hors de l'image, **remplace-la par une photo pertinente, autorisée et chargée**. Le critère est la visibilité d'un vêtement, pas la fidélité absolue à ces URL. Les photos n'établissent **aucun** attribut réel des quatre produits fictifs (couleur, composition, coupe exacte, etc.).

### 2.3 Comportement obligatoire en cas de chargement défaillant

1. Tester **chaque** `src` dans la preview : image chargée, pas d'icône cassée.
2. Si le téléchargement en `public/images/` réussit, privilégier le chemin local `/images/…` ; ce chemin doit exister dans le projet.
3. Sinon utiliser la photo distante et autoriser explicitement `images.unsplash.com` dans `next.config.ts` via `images.remotePatterns`.
4. Si un CDN retourne une erreur, choisir une autre photographie de vêtement (Unsplash / Pexels, licence adaptée) et mettre à jour la source dans le YAML.
5. Si l'outil de génération d'images de v0 est disponible, il peut créer des visuels **explicitement fictifs / de démonstration** et enregistrer de vraies images ; ne jamais les présenter comme photos réelles de HORS CHAMP.
6. **Ne pas déclarer le travail terminé tant que le hero + les 4 produits + les 3 médias lookbook ne sont pas visibles.** Un fond coloré, un composant vide et un simple texte `PHOTO HERE` ne constituent pas une image.

### 2.4 Traitement et légende honnête

- Sous la grille produit, intégrer une petite ligne lisible : **« Visuels d'inspiration — les produits HORS CHAMP présentés sont fictifs. »**
- Dans le lookbook, employer **« Moodboard de démonstration »** ou **« Photographies d'inspiration »** comme petite mention de section.
- Ne pas apposer de faux logo HORS CHAMP sur une pièce appartenant à une autre marque ; ne pas retoucher des photos pour suggérer une campagne officielle.
- Ne pas mettre un watermark géant « DEMO » sur chaque photo : cela ruine le rendu éditorial. Une discrète légende de contexte suffit ; le statut des fiches produits reste « Produit de démonstration ».
- Utiliser des `alt` décrivant honnêtement **ce que l'image montre**, pas un nom commercial inventé : exemple « Personne portant un hoodie sombre, photographie d'inspiration ».
- Si les photos sont réutilisées publiquement, conserver dans le projet leurs URL de source / auteurs et vérifier les conditions applicables. Crédit visible discret recommandé dans un fichier `CREDITS.md` ou le footer.

---

## 3. DESIGN TOKENS — COULEURS

**Palette exacte du PDF**, à préserver :

| Nom | Hex | Utilisation Safety Signal |
|---|---|---|
| Chalk | `#E8E7E2` | Fond clair, surfaces papier/minéral |
| Carbon | `#151515` | Typographie, grandes surfaces sombres |
| Concrete | `#898985` | Détails secondaires non essentiels, surfaces de média |
| Steel | `#8B8B87` | Structures techniques, séparateurs |
| Signal | `#D6FF3F` | CTA primaire, repères sélectionnés, focus local |
| Rust | `#8D4936` | Accent de patine **rare** |

**Couleurs de support ajoutées pour l'interface, non prescrites par le PDF :** `white #FFFFFF`, `ink-muted #555550`, `hairline #C7C6BF`, `carbon-soft #202020`.

**Règle d'équilibre :** les photos de vêtements, la typographie et la mise en page produisent le désir. Le vert fluo est une **signalisation**. Viser ~60 % fonds clairs, ~30 % noir/photos sombres, <10 % gris et accents visuels. Ne pas employer le vert sur des fonds couvrant de grandes surfaces de la page.

```css
:root {
  --hc-chalk: #E8E7E2;
  --hc-carbon: #151515;
  --hc-concrete: #898985;
  --hc-steel: #8B8B87;
  --hc-signal: #D6FF3F;
  --hc-rust: #8D4936;
  --hc-white: #FFFFFF;
  --hc-ink-muted: #555550;
  --hc-hairline: #C7C6BF;
  --hc-carbon-soft: #202020;

  --hc-bg: var(--hc-chalk);
  --hc-fg: var(--hc-carbon);
  --hc-bg-dark: var(--hc-carbon);
  --hc-fg-on-dark: var(--hc-chalk);
  --hc-accent: var(--hc-signal);
  --hc-accent-fg: var(--hc-carbon);
  --hc-border: var(--hc-hairline);

  --hc-font-sans: "Space Grotesk", Arial, sans-serif;
  --hc-font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --hc-space-1: 4px;
  --hc-space-2: 8px;
  --hc-space-3: 12px;
  --hc-space-4: 16px;
  --hc-space-6: 24px;
  --hc-space-8: 32px;
  --hc-space-10: 40px;
  --hc-space-12: 48px;
  --hc-space-16: 64px;
  --hc-space-20: 80px;
  --hc-space-24: 96px;
  --hc-space-32: 128px;

  --hc-radius: 2px;
  --hc-gutter: 16px;
  --hc-container: 1440px;
  --hc-section-space: 64px;
  --hc-speed: 200ms;
  --hc-ease: cubic-bezier(.22,1,.36,1);
}
@media (min-width: 640px) {
  :root { --hc-gutter: 32px; --hc-section-space: 96px; }
}
@media (min-width: 1024px) {
  :root { --hc-gutter: 48px; --hc-section-space: 128px; }
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
:focus-visible { outline: 2px solid var(--hc-carbon); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
```

**Contrastes :** carbon sur chalk / signal ; clair sur carbon ; `concrete` et `steel` **pas** pour du petit texte sur chalk. Le texte secondaire doit utiliser `ink-muted` sur fond clair. Boutons de 44 px de hauteur minimum.

---

## 4. TYPOGRAPHIE & VOIX DE MARQUE

**Paire de typographies proposée pour Safety Signal :**
- **Space Grotesk** — titrage, corps, noms des produits (poids 400/500/600/700).
- **IBM Plex Mono** — labels techniques, petits repères, numérotation, micro-informations et certains boutons (poids 400/500/600).

Importer avec `next/font/google`. Pas de troisième police arbitraire.

| Style | Taille | Poids / interligne | Autres règles |
|---|---|---|---|
| Hero H1 | `clamp(3.25rem, 10.5vw, 10rem)` | 700 / 0.88 | uppercase, tracking négatif mesuré ; **jamais coupé sur mobile** |
| H2 sections | `clamp(2.5rem, 6vw, 5.5rem)` | 700 / 0.98 | proportions éditoriales |
| Manifeste | `clamp(1.5rem, 3.8vw, 3.5rem)` | 500 / 1.14 | longueur de ligne maîtrisée |
| Noms produits | `clamp(1.5rem, 2.8vw, 2.4rem)` | 600 / 1.1 | protagonistes avec image |
| Corps | `16–18px` | 400 / 1.55 | lisibilité, pas de colonnes trop larges |
| Labels | `11–12px` | 500 / 1.3 | IBM Plex Mono, uppercase, tracking +0.06em |
| CTA | `12–14px` | 600 / 1.1 | uppercase léger, largeur confortable |

**Ton :** concret, court, net, sans clichés luxueux, sans exclusivité artificielle. Le texte met la photographie en valeur ; éviter de couvrir les vêtements avec des pavés rédactionnels.

---

## 5. GRILLES & MEDIA — RÈGLES DE COMPOSITION

- **Conteneur :** `max-width: 1440px`, marges variables via `--hc-gutter`.
- **Mobile `<640px` :** 1 colonne de contenu, gouttières 16px ; pas d'images écrasées ni coupées au mauvais endroit.
- **Tablette `640–1023px` :** 2 colonnes produits, lookbook simplifié, 32px de gouttière.
- **Desktop `≥1024px` :** grille 12 colonnes ; hero split ou image éditoriale dominante ; lookbook asymétrique, produits en 2×2 (grandes images) ou 4 colonnes si leur lisibilité reste excellente.
- **Grand écran `≥1440px` :** conteneur plafonné, gouttières 64px, sections verticales généreuses.
- **Sections :** séparation verticale 64 / 96 / 128px selon largeur.
- **Formes :** rayons 0–4px max, pas de cartes en pilules ou d'ombres systématiques.
- **Bordures :** 1px, minimalistes. Parfois des filets horizontaux, mais pas autour de chaque élément.

### Ratios photographiques

| Média | Desktop | Mobile | Recadrage |
|---|---|---|---|
| Hero | 16:10 ou 4:5 selon composition | 4:5 ou 3:4 | Priorité à la silhouette et au vêtement, `object-position` ajusté |
| Lookbook silhouette | 3:4 | 4:5 | Personne et vêtement dans le cadre |
| Lookbook texture | 1:1 | 1:1 | Macro / fibres reconnaissables |
| Lookbook contexte | 4:3 ou 3:4 | 4:5 | Environnement urbain mais tenue visible |
| Produits | **4:5 partout** | **4:5 partout** | Chaque type de vêtement doit être immédiatement reconnaissable |

**Ne pas couper une capuche, un bas de t-shirt ou la visière d'une casquette au point qu'on ne reconnaisse plus l'article.** Utiliser `object-fit: cover` avec `object-position` dédié selon photo, éventuellement `contain` pour un packshot réel de produit. Les photos sont les éléments centraux du site.

---

## 6. COMPOSANTS OBLIGATOIRES

### 6.1 `AnnouncementBar`

- Fond carbon, texte chalk, hauteur 36–40px.
- Texte : `DROP 01 — OUTSIDE SYSTEM / COLLECTION DE DÉMONSTRATION`.
- Petit repère signal seulement si utile. Aucun faux compte à rebours.

### 6.2 `SiteHeader` / `MobileNav`

- Logo texte **HORS CHAMP**, bien lisible.
- Liens : `Collection` → `#collection`, `Manifeste` → `#manifesto`, `Accès anticipé` → `#access`.
- Header 64–80px, mobile menu accessible au clavier ; pas de lien fictif actif.
- Sticky facultatif, avec `scroll-mt` pour les ancres.

### 6.3 `HeroSection` — priorité photographique n° 1

Composition préférée sur desktop : **très grande photographie éditoriale** occupant au minimum 45–60 % de la largeur du hero, texte net sur fond carbon ou chalk, asymétrie. Le mannequin **porte visiblement un vêtement**. Sur mobile, conserver une vraie photo de tenue sans recadrage destructeur.

Contenu exact :
- Label : `DROP 01`.
- H1 : `OUTSIDE SYSTEM`.
- Baseline : `Des vêtements essentiels, construits pour vivre dehors.`
- Bouton Signal : `Accéder au drop` → `#access`.
- Bouton contour : `Découvrir la collection` → `#collection`.

**Ne pas faire un hero purement typographique sans vêtement.** Ne pas placer un aplat vert sur la totalité de la photo. Éviter de couvrir le corps ou les matières par des éléments UI.

### 6.4 `ManifestoSection`

- Titre exact : `Pas une saison. Un système.`
- Texte exact : `Des pièces simples, pensées pour les déplacements, les couches et les usages quotidiens.`
- Disposition éditoriale asymétrique, espaces libres, éventuellement une photographie de matière adjacente si cela apporte du sens.

### 6.5 `LookbookGrid` — priorité photographique n° 2

**Trois véritables photos obligatoires.** Une grande image de silhouette / mouvement, une macro matière, une image de vêtement urbain ou détail de casquette. Grille asymétrique desktop, pile mobile. Légendes `01 / FORM`, `02 / TEXTURE`, `03 / MOVEMENT`. Petite mention **« Moodboard de démonstration »**. Ne pas utiliser de carrousel au MVP.

### 6.6 `ProductEditorialCard` + `ProductsSection` — priorité n° 3

**Quatre cartes, chacune avec une photographie pleine largeur et visuellement pertinente**, ratio **4:5**, occupante principale de la carte. L'ordre est figé :

1. **Field Hoodie** — « Hoodie oversize en coton lourd, lavé et structuré. » ; photo d'une personne portant un hoodie.
2. **Layer Shell** — « Une couche légère pensée pour protéger sans alourdir. » ; photo d'une veste légère / zip-up outerwear.
3. **Archive Tee** — « Un t-shirt ample, marqué par un imprimé discret. » ; photo d'un t-shirt ample (la photo illustrative peut être uni : ne pas prétendre que l'imprimé du produit est réel).
4. **Signal Cap** — « Une casquette souple avec un détail réfléchissant. » ; photo d'une casquette reconnaissable (ne pas prétendre qu'un détail réfléchissant montré par la photo est authentique).

Chaque carte comprend : index `01 / 04`, photo, nom, description, label **`Produit de démonstration`**. Aucun prix, sélecteur de taille fictif, stock, avis, panier, badge sold-out ou bouton acheter. Les interactions hover ne doivent pas masquer les photos.

Ajouter sous la section : **« Visuels d'inspiration — les produits HORS CHAMP présentés sont fictifs. »**

### 6.7 `ConstructionDetailsSection`

Section de détails qualitatifs, avec 3–5 items (grille / filets fins) : `VOLUME`, `SUPERPOSITION`, `PROTECTION`, `IMPERFECTION`, `USAGE`. Montrer si possible **une photo macro de tissu/zip**. Ne pas inventer de poids de coton, certification, imperméabilité ou taille. Tout détail technique visuel est une référence de direction artistique, non une spécification avérée.

### 6.8 `EarlyAccessForm`

- Titre : **Le drop arrive bientôt.**
- Texte : **Inscris-toi pour recevoir l'accès anticipé et les informations de lancement.**
- Champ : **Ton adresse email** ; `type="email"`, `required`, `autocomplete="email"`, label associé.
- Bouton : **Rejoindre la liste**.
- **AUCUN backend, base, emailing, stockage, compte utilisateur ou soumission à un serveur.**
- Après validation locale : **`Mode démonstration — aucune adresse email n'a été enregistrée.`** via `role="status"` / `aria-live="polite"`.
- Ne pas afficher `Merci. Tu recevras les prochaines informations du drop.` en l'absence de collecte réelle, même si ce message existe dans le contenu YAML issu du brief.

### 6.9 `SiteFooter`

- Logo + signature de marque.
- Navigation `Collection`, `Manifeste`, `Contact`, `Instagram`, `Mentions légales`, `Politique de confidentialité`.
- Les liens inconnus ne doivent pas être de faux liens actifs : indiquer discrètement `À compléter` pour contacts et destinations non renseignées.
- Mention de transparence sur les visuels d'inspiration accessible depuis footer, si nécessaire.

### 6.10 Composants transversaux

- `EditorialImage` : véritable `<Image>` Next.js ou `<img>` avec `src` valide, `alt`, ratio, `object-position`, état de chargement, dimensions; **ne pas remplacer par un bloc vide**.
- `PrimaryButton` : fond Signal / texte Carbon, hauteur min 44px.
- `SecondaryButton` : contour Carbon / transparent, même hauteur.
- `SectionEyebrow` : IBM Plex Mono uppercase, numérotation discrète.
- `Container` / `Section` / `EditorialDivider` / `StatusLabel`.
- `ImageCredit` facultatif, très discret.

---

## 7. STRUCTURE DE PAGE — ORDRE STRICT DU PDF

Ne pas réorganiser :

1. Announcement bar
2. Header
3. Hero du Drop 01 **avec photo de tenue**
4. Manifeste court
5. Silhouettes / Lookbook **avec 3 vraies images**
6. Produits **avec 4 vraies images de vêtements**
7. Détails de construction / caractéristiques qualitatives
8. Accès anticipé
9. Footer

Ancres : `#manifesto`, `#lookbook`, `#collection`, `#details`, `#access`.  
`#collection` doit viser le titre de la grille des quatre produits.  
Un seul `<h1>` dans le hero ; sections suivantes en `<h2>`.  
**Une seule landing page**, pas de routes produit ni tunnel e-commerce.

---

## 8. CONTENU EXACT À CRÉER DANS `content/content.yaml`

Le YAML est la source de vérité pour **les textes ET les visuels**. Les noms des produits, descriptions, CTA et manifeste proviennent du PDF. La clé `media` ci-dessous est **l'adaptation corrective ajoutée**, afin d'empêcher que v0 oublie les images.

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

# Les champs media sont obligatoires.
# v0 doit remplacer les URLs CDN par /images/nom.jpg SI les fichiers ont effectivement été téléchargés.
media:
  hero:
    src: "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?auto=format&fit=crop&w=1800&q=85"
    alt: "Silhouette streetwear en veste sombre dans un décor urbain, photographie d'inspiration"
    credit: "Mike Von / Unsplash"
    source: "https://unsplash.com/photos/2UTk-Nip5aM"
  lookbook:
    - id: "movement"
      src: "https://images.unsplash.com/photo-1779040620498-d0698c9afd97?auto=format&fit=crop&w=1200&q=85"
      alt: "Silhouette portant un t-shirt sur une route urbaine, photographie d'inspiration"
      caption: "01 / MOVEMENT"
      source: "https://unsplash.com/photos/tO-NFxrfmo8"
    - id: "texture"
      src: "https://images.unsplash.com/photo-1742113041820-ba5b9da08f9a?auto=format&fit=crop&w=1000&q=85"
      alt: "Gros plan d'une matière textile tissée, photographie d'inspiration"
      caption: "02 / TEXTURE"
      source: "https://unsplash.com/photos/mXU4q6Oei6E"
    - id: "cap"
      src: "https://images.unsplash.com/photo-1776501496576-f89b3e14e7ac?auto=format&fit=crop&w=1200&q=85"
      alt: "Casquette portée en gros plan, photographie d'inspiration"
      caption: "03 / FORM"
      source: "https://unsplash.com/photos/Li_j8esIwLo"

products:
  - name: "Field Hoodie"
    description: "Hoodie oversize en coton lourd, lavé et structuré."
    status: "Produit de démonstration"
    image:
      src: "https://images.unsplash.com/photo-1647797819874-f51a8a8fc5c0?auto=format&fit=crop&w=1100&q=85"
      alt: "Personne portant un hoodie noir, visuel d'inspiration non officiel"
      source: "https://unsplash.com/photos/r-fZqxXDG-8"
  - name: "Layer Shell"
    description: "Une couche légère pensée pour protéger sans alourdir."
    status: "Produit de démonstration"
    image:
      src: "https://images.unsplash.com/photo-1578964046312-69d266a3e739?auto=format&fit=crop&w=1100&q=85"
      alt: "Personne portant une veste sombre zippée, visuel d'inspiration non officiel"
      source: "https://unsplash.com/photos/kBoAgvwb2X8"
  - name: "Archive Tee"
    description: "Un t-shirt ample, marqué par un imprimé discret."
    status: "Produit de démonstration"
    image:
      src: "https://images.unsplash.com/photo-1780566759977-ff8b5d53731c?auto=format&fit=crop&w=1100&q=85"
      alt: "Personne portant un t-shirt oversize, visuel d'inspiration non officiel"
      source: "https://unsplash.com/photos/Su_IaoGIjBg"
  - name: "Signal Cap"
    description: "Une casquette souple avec un détail réfléchissant."
    status: "Produit de démonstration"
    image:
      src: "https://images.unsplash.com/photo-1557225451-b03ada84e645?auto=format&fit=crop&w=1100&q=85"
      alt: "Casquette noire, visuel d'inspiration non officiel"
      source: "https://unsplash.com/photos/IVb43vObfMA"

access:
  title: "Le drop arrive bientôt."
  text: "Inscris-toi pour recevoir l'accès anticipé et les informations de lancement."
  input_label: "Ton adresse email"
  button_label: "Rejoindre la liste"
  confirmation_message: "Merci. Tu recevras les prochaines informations du drop."
  demo_notice: "Mode démonstration — aucune adresse email n'a été enregistrée."
  backend_required: false

footer:
  links: ["Collection", "Manifeste", "Contact", "Instagram"]
  legal: ["Mentions légales", "Politique de confidentialité"]
  image_disclaimer: "Visuels d'inspiration — les produits HORS CHAMP présentés sont fictifs."
```

**Règle de code :** les composants doivent accéder aux photos depuis `media.hero`, `media.lookbook` et `products[i].image`. **Ne jamais réintroduire des URLs `/placeholder.svg` ou dupliquer des sources photo dans les composants.**

---

## 9. STACK, ARCHITECTURE ET MEDIA LOADING

- Next.js App Router + React + TypeScript + Tailwind.
- `next/font/google` pour Space Grotesk et IBM Plex Mono.
- `yaml` (ou paquet léger équivalent) pour lire `content/content.yaml` **côté serveur**.
- Server Components par défaut ; Client Components seulement menu et formulaire.
- `next/image` pour photos, avec `sizes`, priorité du hero et lazy-load des images sous le pli.
- Si photos distantes, ajouter :

```ts
// next.config.ts — exemple à adapter à la configuration déjà existante
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};
export default nextConfig;
```

**Ne pas utiliser à la fois un fichier local inexistant et sa version distante.** Le chemin `public/images/x.jpg` se référence par `/images/x.jpg` seulement après confirmation que le fichier existe. Une URL de page Unsplash (`unsplash.com/photos/...`) n'est **pas** une URL image et ne doit jamais être utilisée comme `src`.

**Composant photo recommandé :** container avec `position: relative` + `aspect-ratio` + `<Image fill sizes="..." style={{objectFit:'cover'}}>` + `alt` approprié + option de recadrage. On peut utiliser `unoptimized` ponctuellement si les médias distants ne fonctionnent pas via l'optimiseur, mais vérifier le chargement réel. L'UI ne doit jamais reposer sur un faux fallback statique coloré.

Arborescence proposée :

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  announcement-bar.tsx
  site-header.tsx
  hero-section.tsx
  manifesto-section.tsx
  lookbook-grid.tsx
  product-editorial-card.tsx
  products-section.tsx
  construction-details.tsx
  early-access-form.tsx
  site-footer.tsx
  editorial-image.tsx
content/
  content.yaml
lib/
  content.ts
public/
  images/               # Facultatif si photos réellement téléchargées
DESIGN.md
README.md
```

**MVP sans suringénierie :** pas de DB, pas de CMS, pas de compte, pas d'API métier, pas de paiement, pas de newsletter active, pas de variable d'environnement nécessaire. Le déploiement Vercel doit être direct.

---

## 10. RESPONSIVE ET INTERACTIONS

### À 375px

- Hero avec **photo visible** et non réduite à un bandeau microscopique.
- `OUTSIDE SYSTEM` lisible sur 1–2 lignes, sans débordement horizontal.
- CTA primaire et secondaire accessibles, empilés si nécessaire.
- Produits en **une colonne**, belles grandes photos 4:5.
- Lookbook en pile de 3 vraies photos, jamais un défilement horizontal cachant des médias.
- Menu mobile réellement ouvrable/fermable.

### À 768px

- Produits en **deux colonnes** ; textes, photos et titres sans collision.
- Hero photo et texte peuvent être disposés en split uniquement si l'image garde du poids visuel.
- Lookbook en grille adaptée, sans recadrage destructeur.

### À 1440px

- Hero éditorial fort, image **dominante** et typographie monumentale sans empiéter sur le vêtement.
- Produits en **deux colonnes larges** par défaut : plus premium que quatre miniatures serrées ; possibilité de quatre colonnes si photos suffisamment grandes et lisibles.
- Lookbook asymétrique et respirant.

### Interactions

- Focus visible, navigation clavier, `prefers-reduced-motion`, contrastes WCAG AA.
- Hover sur les images : zoom max 1.02–1.04 (léger), **sans** recouvrir le produit d'une carte UI.
- CTA Signal sur Carbon ou Chalk, hauteur min 44px.
- Pas de sliders ou vidéos obligatoires, ni de parallax coûteux.
- `loading="eager"` / `priority` pour le hero, lazy loading des autres visuels.

---

## 11. TESTS ET CONDITIONS DE LIVRAISON

**Ne considère pas le site « terminé » sans contrôler ces points.**

### Audit photos — bloquant

- [ ] Hero : **1 photo réellement affichée** avec une tenue visible, pas juste du texte.
- [ ] Lookbook : **3 photographies réellement affichées** (silhouette / matière / urbain).
- [ ] Field Hoodie : photo d'un hoodie identifiable.
- [ ] Layer Shell : photo d'une veste identifiable.
- [ ] Archive Tee : photo d'un t-shirt identifiable.
- [ ] Signal Cap : photo d'une casquette identifiable.
- [ ] Aucune URL cassée ni image 404/403 visible.
- [ ] Aucune référence à `placeholder.svg`, `ImagePlaceholder`, ou carte avec aplat de couleur à la place d'un vêtement.
- [ ] Les photos ne sont pas présentées comme produits authentiques HORS CHAMP ; mentions de démonstration présentes.

### Audit brief — bloquant

- [ ] Les **9 sections du PDF** sont présentes, dans l'ordre.
- [ ] Textes, CTA, manifeste, 4 produits conformes au YAML.
- [ ] CTA `Accéder au drop` → `#access` ; `Découvrir la collection` → `#collection`.
- [ ] Pas de faux prix, faux stock, fausse date, faux avis, fausse urgence, fausse rareté.
- [ ] Formulaire d'inscription **purement visuel** : aucun email sauvegardé ; retour de démonstration explicite.
- [ ] Contenu et images modifiables par YAML, sans devoir modifier JSX.

### Audit technique — bloquant

- [ ] Aucun scroll horizontal à **375px**, **768px**, **1440px**.
- [ ] Les images ont des proportions maîtrisées et ne cachent pas les pièces.
- [ ] Le menu mobile et les liens fonctionnent.
- [ ] `npm run build` passe sans erreur.
- [ ] Le site est compatible Vercel **sans** variable d'environnement ou serveur métier.
- [ ] Preview et version déployée affichent les mêmes visuels.

---

## 12. PROMPT D'EXÉCUTION À COLLER DANS LE CHAT v0 AVEC CE FICHIER

> **Corrige le site HORS CHAMP existant en suivant intégralement le `DESIGN_HORS_CHAMP_V2.md` joint.** Le défaut majeur du rendu actuel est l'**absence de photographies de vêtements**. Ne modifie pas seulement les couleurs : remplace les placeholders par de vraies photos de mode et assure-toi qu'elles sont chargées dans la preview.
>
> Affiche impérativement **une grande silhouette habillée dans le hero, trois photos lookbook et quatre photos produit**, exactement une pour Field Hoodie, Layer Shell, Archive Tee et Signal Cap. Utilise les URL de visuels de démonstration et leurs sources listées dans la section 2, idéalement téléchargées dans `public/images` ; si tu utilises les URLs distantes, configure `next/image` et vérifie le chargement. Si une image ne fonctionne pas ou ne montre pas le bon type de vêtement, remplace-la, ne laisse jamais un bloc vide.
>
> Conserve l'identité **Safety Signal** (Chalk `#E8E7E2`, Carbon `#151515`, Signal `#D6FF3F`, Space Grotesk + IBM Plex Mono), le positionnement parisien/technique, les 9 sections du PDF et l'esthétique éditoriale premium. Crée ou corrige `content/content.yaml` avec les photos et les textes comme source de vérité. Ne présente aucune photo de stock comme une image officielle HORS CHAMP ; affiche discrètement « Visuels d'inspiration — les produits HORS CHAMP présentés sont fictifs. » Respecte toutes les interdictions : aucun prix, stock, faux avis, fausse urgence, paiement ni backend. Le formulaire est une démo honnête.
>
> Génère immédiatement le **code exécutable et la page corrigée**, pas un compte rendu. Contrôle les images à 375 / 768 / 1440px, vérifie `npm run build`, puis rends le projet déployable sur Vercel. **Le site n'est pas fini tant que tous les vêtements sont clairement visibles.**

---

## 13. TRAÇABILITÉ

**Source :** PDF « Atelier TAs — Product Building End to End — Application Deployment D4 », 8 pages, transmis dans la conversation. Du PDF viennent : identité HORS CHAMP, manifeste, promesse, références comme tensions (non copies), palettes, principes d'image, 4 produits, structure en 9 zones, YAML, exclusion des faux arguments commerciaux et du backend.

**Correction demandée par l'utilisateur :** faire apparaître **de véritables images de vêtements sur le site** et aligner le rendu sur les consignes photographiques du PDF. Les URL de photos, leurs auteurs, le manifeste `media` du YAML et le protocole de vérification sont de nouvelles décisions d'exécution ; **pas** des éléments du PDF.

**Adaptation du workflow :** v0 / Vercel remplace Google AI Studio / Netlify mentionnés dans le document d'atelier.
