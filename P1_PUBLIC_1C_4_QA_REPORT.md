# P1-PUBLIC.1C.4 — Final Website QA, Metadata & Launch Lock

## Scope of this closure hotfix
This update intentionally does **not** redesign the approved website.

It adds only:
- canonical URL metadata
- generic Open Graph sharing metadata
- a 1200×630 social preview card
- Organization structured data
- explicit search indexing metadata
- sitemap.xml
- sitemap reference in robots.txt
- improved no-index 404 page
- keyboard focus visibility

## Static QA results

### Required files
- PASS — `assets/favicon.png`
- PASS — `assets/polderline-games-icon.png`
- PASS — `assets/polderline-games-logo.png`
- PASS — `assets/paths-of-kin-logo.png`
- PASS — `assets/social-card.png`
- PASS — `styles.css`
- PASS — `404.html`
- PASS — `robots.txt`
- PASS — `sitemap.xml`

### Internal anchors/assets
- PASS — `/assets/favicon.png` (asset)
- PASS — `/assets/polderline-games-icon.png` (asset)
- PASS — `/styles.css` (stylesheet)
- PASS — `#top` (internal anchor)
- PASS — `#studio` (internal anchor)
- PASS — `#paths-of-kin` (internal anchor)
- PASS — `#follow` (internal anchor)
- PASS — `#contact` (internal anchor)
- PASS — `#paths-of-kin` (internal anchor)

## Live checks still required after upload
1. Open `https://polderlinegames.com/`
2. Open a deliberately invalid URL such as `https://polderlinegames.com/not-a-real-page`
3. Confirm the custom Polderline Games 404 page appears
4. Open `https://polderlinegames.com/robots.txt`
5. Open `https://polderlinegames.com/sitemap.xml`
6. Reconfirm the five social links and three mail links
7. Reconfirm HTTPS remains enforced

If these pass, P1-PUBLIC.1C.4 can be formally locked.
