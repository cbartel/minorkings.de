# minor kings

Statische Bandwebsite mit Astro: Bandpräsentation, drei YouTube-Videos, lokale Fotogalerie und Booking-Kontakt.

## Lokal starten

```sh
nvm use
npm ci
npm run dev
```

Node-Version: `.nvmrc`. `npm run check` prüft Astro und TypeScript, `npm run build` erzeugt `dist/`, `npm run preview` zeigt den Build lokal.

## Inhalte pflegen

- `src/pages/index.astro`: Bandtexte, Mitglieder und Videos.
- `src/data/band.ts`: E-Mail und Instagram-Link.
- `src/data/instagram.json`: manuell gepflegte Fotos, Bildtexte und Links zu Originalbeiträgen.
- `public/media/`: lokale WebP-Fotos und Videovorschauen.
- `public/brand/minor-kings.png`: originales Bandlogo.
- `src/styles/global.css`: Layout und Bandfarben Rot `#BE1636`, Gold `#F8AC14`, Schwarz.
- `src/pages/impressum.astro`, `src/pages/privacy-policy.astro` und `src/components/LegalContact.astro`: rechtliche Angaben und Kontakt.

Die Fotogalerie benötigt keine Instagram-API und keine Zugangsdaten. Für neue Fotos eine WebP-Datei in `public/media/` ergänzen und den Eintrag in `instagram.json` hinzufügen. Das Feld `image` enthält den Dateinamen ohne `.webp`. Hero und Bandfoto werden separat in `index.astro` ausgewählt. Foto-Credits: @pluno.

YouTube wird erst nach Zustimmung beim jeweiligen Video geladen und kann wieder deaktiviert werden. Die Vorschauen werden lokal ausgeliefert. Kein Tracking, kein Kontaktformular, keine externen Schriftarten.

## Veröffentlichung

Repository: https://github.com/cbartel/minorkings.de

Jeder Push auf `main` startet `.github/workflows/pages.yml`: Installation, Astro-Prüfung, Build und Deployment auf GitHub Pages. Ein manueller Start ist unter Actions ebenfalls möglich. In Settings → Pages muss als Quelle **GitHub Actions** ausgewählt sein.

Die Action übernimmt Domain und Unterpfad aus den Pages-Einstellungen. Für einen lokalen Build unter dem Projektpfad:

```sh
SITE_URL=https://cbartel.github.io BASE_PATH=/minorkings.de/ npm run build
```

Die erste Veröffentlichung erfolgt auf der GitHub-Pages-Adresse. Der Wechsel von `minorkings.de` wird separat über Pages und DNS konfiguriert. Das E-Mail-Postfach bleibt bei IONOS; die MX-Einträge müssen erhalten bleiben. Bis zum Domainwechsel bleibt `noindex, nofollow` aktiv, damit die Vorschauseite nicht mit der bisherigen Website konkurriert.

## Redaktion

Keine Emojis und keine austauschbaren Werbeslogans. Bandtexte persönlich und direkt formulieren. Logo und Bandfarben beibehalten. Bei Änderungen an Diensten oder Kontaktdaten die Datenschutzhinweise und das Impressum mitpflegen.
