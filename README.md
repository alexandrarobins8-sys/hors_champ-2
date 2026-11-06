# HORS CHAMP — Drop 01

Landing page de démonstration, Next.js App Router / React / TypeScript / Tailwind CSS. Aucun compte, backend, collecte, analytics ou variable d’environnement.

## Développement local

Avec Node.js 22+ et pnpm : `pnpm install --frozen-lockfile`, puis `pnpm dev` (localhost:3000).

Validation production : `npm run build`. Lancement production : `pnpm start`.

## Contenu et design

Tous les contenus éditoriaux sont dans `content/content.yaml`, chargé côté serveur pour le prérendu statique. Les tokens et compositions sont dans `app/globals.css`. Le design system fourni est conservé dans `DESIGN.md`.

Le formulaire utilise la validation HTML native et affiche uniquement `demo_notice`. Aucune adresse n’est envoyée ou sauvegardée. `confirmation_message` est réservé à une future intégration réelle.

Les visuels représentent des vêtements : un hero, trois images lookbook, quatre photos produit et une macro textile. Les images sont locales dans `public/images/` et toutes leurs sources, crédits, textes alternatifs et cadrages sont centralisés dans le YAML (`media` et `products[].image`). Les photos Unsplash sont des références illustratives ; les deux images de casquettes sont générées, sans marque. Aucune n’est une photographie officielle HORS CHAMP. Les crédits sont accessibles dans le footer. Les coordonnées et liens juridiques manquants sont indiqués « À compléter ».

## Déploiement Vercel

Utiliser Publish dans v0, ou importer le dépôt GitHub connecté dans Vercel. Le framework Next.js est détecté automatiquement. Aucune variable d’environnement n’est nécessaire.
