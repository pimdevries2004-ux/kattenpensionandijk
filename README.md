# Kattenpension Andijk — website

Statische website voor **Kattenpension Andijk** (Visserspad 4, 1619 GB Andijk).
Geen build-stap, geen frameworks: platte HTML, CSS en een klein beetje JavaScript.

## Structuur

```
.
├── index.html          # Home
├── voorwaarden.html    # Voorwaarden (inentingen, medicijnen, betaling)
├── voeding.html        # Voeding
├── tarieven.html       # Tarieven
├── reserveren.html     # Reserveren + contact
├── galerij.html        # Fotogalerij met lightbox
└── assets/
    ├── css/style.css   # Alle styling (kleuren staan bovenin als CSS-variabelen)
    ├── js/main.js      # Mobiel menu, scroll-animatie, lightbox
    └── img/            # Logo, favicon en pootafdrukken (SVG)
```

## Lokaal bekijken

Open `index.html` in de browser, of start een servertje:

```bash
python3 -m http.server 8000
# -> http://localhost:8000
```

## Online zetten

De site staat op **Netlify**, gekoppeld aan deze GitHub-repo. Elke push naar `main`
zet automatisch een nieuwe versie live. Er is geen build-stap: Netlify publiceert
de map zoals hij is.

| Instelling | Waarde |
|---|---|
| Repository | `github.com/pimdevries2004-ux/kattenpensionandijk` |
| Productiebranch | `main` |
| Build command | leeg |
| Publish directory | `/` (de hoofdmap) |
| Domein | `kattenpensionandijk.nl`, met `www` als doorverwijzing |

Een tekst of foto aanpassen doe je door het bestand in deze repo te wijzigen en de
wijziging te committen; een paar minuten later staat het online.

## Foto's

De twaalf eigen foto's staan lokaal in `assets/img/`. Elke foto heeft twee versies:

* `naam.jpg` — max 1600px, gebruikt op de pagina's en in de lightbox
* `naam-800.jpg` — max 800px, gebruikt als thumbnail in de galerij

| Bestand | Waar te zien |
|---|---|
| `woonkamer-banken` | Home (woonkamer-sectie), galerij |
| `woonkamer-doorloop` | Home (uitgelicht), galerij |
| `kat-blauwe-kamer` | Home (speciale zorg), galerij |
| `aparte-kamer` | Galerij |
| `buitenren-zon` | Home (uitgelicht), galerij |
| `buitenren-overdekt` | Galerij |
| `buitenren-speelplek` | Galerij |
| `kat-op-speelhuis` | Galerij |
| `hangmatten-mandjes` | Galerij |
| `buitenren-uitzicht` | Home (uitgelicht), galerij |
| `etenstijd` | Voeding, galerij |
| `ontvangstruimte` | Reserveren, galerij |
| `huis` | Home (hero), galerij (laatste foto) |

De foto van het pand staat als `huis.jpg` / `huis-800.jpg` in dezelfde map, en wordt
gebruikt als eerste beeld op de homepage en als laatste foto in de galerij. De site
haalt niets meer op bij de oude website: alles staat lokaal.

## Facebook

De Facebookpagina (`https://www.facebook.com/kattenpensionandijk`) staat op drie plekken:
als knop in het groene blok onderaan elke pagina, als contactkaart op *Reserveren*,
en als icoon in de footer.

## Kleuren aanpassen

Alle kleuren staan als variabelen bovenin `assets/css/style.css`:

```css
--terracotta: #e07a5f;   /* hoofdkleur, knoppen  */
--sage:       #81b29a;   /* accent, CTA-blok     */
--zon:        #f2cc8f;   /* highlights           */
--creme:      #fff8f0;   /* achtergrond          */
--bruin:      #3d2b24;   /* tekst en footer      */
```

## Teksten aanpassen

Alle teksten staan direct in de HTML-bestanden. Let op: het menu en de footer staan
in elk bestand apart — pas je die aan, doe het dan in alle zes de pagina's.
