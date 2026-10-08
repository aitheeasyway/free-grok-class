# Free Grok 101 · landing + registration (preview)

Top-of-funnel free class page for AI the Easy Way. Static site on GitHub Pages.

- `config.js`: **edit this only.** Sessions (in person / Zoom, dates), the Google Form `formResponse` URL + entry ids, links.
- `index.html`: landing + registration. `thanks.html`: post-registration page (noindex).
- Live at http://free.mysihelpers.com/ (CNAME file). `index.html` is indexable; `thanks.html` stays `noindex`.
- Canonical/og:url use http until GitHub issues the HTTPS cert, then switch to https.

Grok is a trademark of xAI. Independent class, not affiliated with xAI.

## Event QR / tracking
- Event QR codes point to `http://free.mysihelpers.com/?src=chamber#register`. The page scrolls to the form and focuses "Your name".
- `?src=chamber` adds " (via chamber QR)" to the Session answer in the Google Form (any other `src=xyz` adds " (via xyz)"). Remembered for the browser session.
- Print files (QR PNG/SVG, letter sign, 4x6 card) are kept outside the repo in `/workspace/class/free-grok/qr/`.

## Next level
- "Ready for the next level?" section + thanks-page line link to `SALES_PAGE_URL` (the paid class sales page), not straight to Stripe checkout.
