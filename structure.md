Build a complete, production-ready, mobile-first website for an Indian High Court advocate. Single-page site with smooth anchor navigation. Premium dark + gold law-chamber aesthetic. Output ALL files in full (no partial snippets, no "rest remains same").

## TECH STACK
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- next/font: "Marcellus" (headings, serif) + "Inter" (body)
- No heavy UI libraries. Framer Motion allowed only for subtle fade-up on scroll.
- Content lives in /data/site.ts (one config file) so everything is editable in one place.
- Blog/insights: 3 sample posts in /data/posts.ts, each with slug, date, readTime, excerpt, body. Route /insights/[slug].
- Contact: WhatsApp (wa.me link with prefilled message), tel: link, mailto: link. No backend needed.

## DESIGN SYSTEM
- Background: near-black #0A0A0B, alt sections #111114, cards #060607
- Accent gold: #E8A850 (hover #F2BC6B). Gold-colored full-width contact section with black text.
- Text: white #FFFFFF headings, muted warm grey #A8A29A body
- Borders: 1px #26262B, sharp corners (no rounded cards, max 2px radius)
- Eyebrow labels: uppercase, letter-spacing 0.3em, small, muted, preceded by a short gold horizontal line
- Headings: Marcellus, large (clamp 2rem–4rem); highlight 2–4 key words of the hero headline in gold
- Buttons: rectangular, uppercase, letter-spaced, underlined text. Primary = solid gold with black text. Secondary = transparent with 1px light border.
- Gold bullet markers: small filled gold squares for lists
- Generous vertical spacing (py-24 desktop / py-16 mobile), max content width 1200px
- Floating circular WhatsApp button (green #25D366) fixed bottom-right on all screens, links to wa.me
- Fully responsive, tested at 360px width first. Accessible contrast, focus states, alt text, semantic HTML.

## SECTIONS (in this order)

1. NAVBAR
Sticky, transparent → solid black on scroll. Logo monogram + name left. Links: Practice, Approach, Process, Feedback, Insights, Contact. Mobile: hamburger drawer. Gold "Book Consultation" button.

2. HERO (full viewport)
- Background: advocate photo (placeholder /public/hero.jpg) with dark gradient overlay, left-aligned text.
- Small top strip: "[Court Bench] · [High Court Name]"
- Logo monogram (placeholder SVG: scales of justice with initials)
- Eyebrow: "ADVOCATE, HIGH COURT · [CITY]"
- H1: "Strong, reliable representation <gold>when it matters most</gold>"
- Sub: "Criminal defence, civil and property disputes, family matters, writs and appeals before the [Bench] of the [High Court]. Every case researched before it is argued."
- CTA 1 (gold): "BOOK A CONSULTATION" → #contact
- CTA 2 (outline): "WHATSAPP · URGENT BAIL" → wa.me link

3. STATS STRIP
Four stacked/inline stats with big gold numbers (serif) and muted labels, separated by thin lines:
- "5+" years of practice before the High Court
- "60+" matters concluded
- "6" areas of practice, criminal to arbitration
- "1 day" response to every new enquiry
(All values editable in config. Do not use success-rate or "best lawyer" claims.)

4. PRACTICE AREAS
Eyebrow "PRACTICE AREAS". H2 "Complete representation across six areas of law". Sub: "Argued before the High Court and, where required, in the district and sessions courts of [City]."
Six bordered cards (1 col mobile, 2 col tablet, 3 col desktop), each: title (serif), one-line description, gold-square bullet list:
- Criminal defence: Anticipatory and regular bail; Quashing of FIR; Criminal revisions; Trial representation
- Civil & property: Injunctions; Partition suits; Title disputes; RERA complaints
- Family & matrimonial: Divorce; Maintenance; Child custody; Domestic violence
- Writs & appeals: Writ petitions; First and second appeals; Constitutional challenges
- Corporate & commercial: Contract drafting; Due diligence; Compliance
- Arbitration: Arbitral proceedings; Section 9 & 34 applications; Enforcement of awards
Subtle gold border + slight lift on hover.

5. APPROACH
Eyebrow "ABOUT THE CHAMBER". H2 "Courtroom advocacy, explained in plain language".
Paragraph about years at the Bench, matters concluded, and research-first method.
Three pillars, each with a 2px gold left border, title + one line:
- Research-first approach: precedent study and fact-based analysis build the foundation of every argument.
- Clear communication: you always know your next date, your options, and what happened in court.
- Ethical and result-oriented: strict confidentiality and transparent billing, with no hidden charges.
Below: a double-bordered (thin gold outer + inner frame) quote card with the monogram on top, a centered serif quote, and "— [Name], Advocate".

6. CLIENTS
Eyebrow "CLIENTS THE CHAMBER HAS WORKED WITH". Logo strip with grayscale logos + a "Private clients across [State]" item. Make this array optional; if empty, hide the section. (Use only logos the advocate has written permission to show.)

7. PROCESS
Eyebrow "HOW A MATTER PROCEEDS". H2 "From first call to final order". Four numbered steps (gold circle outline with number), vertical on mobile, horizontal with connecting line on desktop:
1 Consultation: you explain the situation and share what papers you have; the chamber tells you plainly whether and how it can help.
2 Research & strategy: precedents and documents are examined and a course of action, with cost and timeline, is proposed.
3 Drafting & filing: petitions and applications are drafted, reviewed with you and filed; you receive a copy of everything.
4 Hearings & updates: you are informed of each listing, what was argued, what the court said, and what comes next.

8. CLIENT FEEDBACK
Eyebrow "CLIENT FEEDBACK". H2 "What clients say about the chamber". Cards with large gold quote mark, quote text, divider, initials only (e.g., "R. S."), and "Matter type · City" in italic muted. Load from config. Put 3 clearly-marked PLACEHOLDER entries with a code comment: "REPLACE WITH REAL, CONSENTED TESTIMONIALS ONLY". Do not invent fake reviews in production.

9. INSIGHTS
Eyebrow "INSIGHTS". Three cards: date · "2 MIN READ", title, excerpt, "READ →" link to /insights/[slug]. Sample topics: how anticipatory bail works, documents to bring to a first consultation, what to do when an FIR is registered. Write original, accurate general-information posts (no legal advice tone) with a short disclaimer.

10. CONTACT (full-width gold background, black text)
H2 "Speak with the chamber about your matter". Text: "Consultations are by appointment, in person or by phone. Send copies of any FIR, notice, order or agreement in advance so the first meeting counts."
- Big black button "CALL +91 XXXXX XXXXX" (tel:)
- Labeled rows: WHATSAPP number, EMAIL, CHAMBERS address (left black border accent)
- Embed a Google Maps link button for the chamber address.

11. FOOTER
Centered gold monogram logo, divider, disclaimer: "This website provides general information about the advocate and his areas of practice as permitted by the Bar Council of India. It is not legal advice or a solicitation, and no advocate–client relationship is created by visiting it." Then "© 2026 [Name], Advocate".

## CONFIG PLACEHOLDERS (/data/site.ts)
name, shortName/initials, court, bench, city, state, phone, whatsapp, email, chamberAddress, mapsUrl, heroImage, stats[], practiceAreas[], pillars[], quote, clients[], process[], testimonials[], posts[].

## SEO & EXTRAS
- Metadata (title, description, OG image), sitemap.xml, robots.txt
- JSON-LD schema: LegalService + Attorney with address and phone
- Lighthouse 90+ on mobile: next/image, lazy loading, font display swap
- Smooth scroll, prefers-reduced-motion respected, 404 page, favicon from monogram
- Include a README with setup, how to edit content, and deployment steps for Vercel

## DELIVERABLE
Complete file tree and the full code of every file, ready to run with `npm install && npm run dev`. Create the monogram as an original inline SVG (scales of justice + initials), not a copy of any existing logo.