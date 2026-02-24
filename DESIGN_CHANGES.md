# Landing page redesign – summary of changes

## index.html
- **Sticky header (desktop):** Brand + phone + “Request Advisory Review” anchor linking to `#request-review`.
- **Trust strip:** Four items – Independent · No commission · Written recommendation · Adelaide-based.
- **Hero:** Headline updated to cost anchor: “Before You Spend $20,000+ on Solar or Battery, Get an Independent Written Opinion.” Subline: “If we determine it does not make financial sense, we will state that clearly — in writing.”
- **New section “Why this matters”:** Intro line + two-column compare block – “Sales quote” (quote, savings sheet, system size) vs “Independent advisory” (load modelling, tariff/export analysis, battery lifecycle review). Closing line: “This is where expensive mistakes happen.”
- **Pricing:** $690 primary, $990 struck-through; “Limited advisory capacity”; “Adelaide Pilot Round” and “Founding Client Rate” kept.
- **Steps:** Numbered circles (1–4), same copy, layout as timeline/cards.
- **FAQ:** New Q&A: “Are you affiliated with any solar installer?” → “No. We do not receive commissions, referral fees, or installation revenue from this advisory.”
- **Before form:** “What you receive” micro-section (Written PDF recommendation; Clear go/no-go on battery; Next-step guidance) + “We typically respond within 1 business day.”
- **CTA:** Section heading and button text changed to “Request Advisory Review” (form field names and POST payload unchanged).
- **Script:** Sticky header class toggle on scroll; submit button label reset to “Request Advisory Review”.

## styles.css
- **Design system:** CSS variables for colours, spacing, radius, shadows, font stack (system fonts). Max-width ~1040px, section spacing 4rem.
- **Header:** Fixed on desktop, relative on mobile; “is-stuck” shadow on scroll.
- **Trust strip:** Centred items with dot separators; extra top padding on desktop for fixed header.
- **Compare block:** Two cards, left border accent on “Independent advisory”.
- **Pricing block:** Prominent card with $690 primary, $990 secondary struck-through, badge “Limited advisory capacity”.
- **Steps:** Grid with numbered circles, 4→2→1 columns on smaller screens.
- **Form:** Premium inputs (focus ring, hover border), clear labels, error state; accessibility-friendly focus-visible.
- **Thank-you:** `.btn-back` primary button style.

## thank-you.html
- **Title:** “Application received”.
- **Body:** “We will review your request and contact you to arrange payment and booking. If you need to reach us sooner, call 0493 208 540.”
- **CTA:** “Back to main page” as a button (`.btn-back`) linking to `/`.

## Unchanged
- Form field names and IDs; POST to `/api/apply-advisory`; JSON payload and UTM capture.
- No payment flow, no new frameworks, no backend contract changes.
