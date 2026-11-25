# Advocate Naman Mishra — Legal Chamber Website & Portfolio

A production-ready, mobile-first website for **Advocate Naman Mishra**, practicing before the **High Court of Judicature at Allahabad** (Principal Seat at Prayagraj). Built with a law-chamber aesthetic (near-black and warm gold palette), compliant with the Bar Council of India guidelines.

---

## 🏛️ Professional Profile

- **Advocate:** Naman Mishra
- **Enrolment Number:** `UP25047/26`
- **Bar Council:** Bar Council of Uttar Pradesh
- **Primary Court:** High Court of Judicature at Allahabad (Principal Seat, Prayagraj)
- **Practice Areas:** Criminal Defence, Anticipatory & Regular Bail, FIR Quashing (482 CrPC / 528 BNSS), Civil Writs (Article 226/227), Property Disputes, Family Law, Arbitration

---

## ⚡ Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS (Custom law-chamber theme)
- **Typography:** Marcellus (Headings, Serif) + Inter (Body text) via `next/font`
- **Icons:** Lucide React
- **Configuration:** Single source of truth in `/data/site.ts`
- **Insights/Articles:** Static blog structure in `/data/posts.ts` with dynamic routes at `/insights/[slug]`

---

## 📂 Project Structure

```
naman_portfolio/
├── app/
│   ├── globals.css                # Custom scrollbar, gold accents, theme variables
│   ├── layout.tsx                 # Root layout, Google fonts, SEO & JSON-LD LegalService schema
│   ├── not-found.tsx              # Law-chamber themed 404 page
│   ├── page.tsx                   # Main single-page scroll layout
│   ├── robots.ts                  # Robots.txt configuration
│   ├── sitemap.ts                 # XML sitemap generator
│   └── insights/
│       └── [slug]/
│           └── page.tsx           # Dynamic legal insight article pages
├── components/
│   ├── Approach.tsx               # About chamber, 3 pillars, framed quote
│   ├── Clients.tsx                # Client representation badges
│   ├── Contact.tsx                # Full-width gold section with direct CTAs
│   ├── Feedback.tsx               # Client testimonials (compliant format)
│   ├── Footer.tsx                 # BCI disclaimer, copyright & details
│   ├── Hero.tsx                   # Hero section with portrait overlay & CTAs
│   ├── InsightsSection.tsx        # 3 legal guides preview grid
│   ├── Monogram.tsx               # Custom SVG (Scales of justice + NM initials)
│   ├── Navbar.tsx                 # Sticky nav, mobile drawer, quick links
│   ├── PracticeAreas.tsx          # 6 core practice area cards
│   ├── Process.tsx                # 4-stage judicial workflow
│   ├── SectionHeading.tsx         # Eyebrow + Marcellus heading component
│   ├── Stats.tsx                  # High Court credentials & practice stats
│   └── WhatsAppButton.tsx         # Fixed bottom-right WhatsApp quick link
├── data/
│   ├── posts.ts                   # Legal commentary articles
│   └── site.ts                    # Single configuration file for all site copy
├── public/
│   ├── favicon.svg                # Scalable monogram favicon
│   ├── hero.jpg                   # Extracted portrait of Advocate Naman Mishra
│   └── naman_mishra.png           # Original portrait asset
├── tailwind.config.ts             # Custom palette: #0A0A0B, #111114, #060607, #E8A850
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content

All personal details, phone numbers, addresses, practice areas, testimonials, and stats are centralized in **`/data/site.ts`**:

- **Phone / WhatsApp Number:** Edit `phone`, `phoneFormatted`, and `whatsapp` fields.
- **Chamber Address:** Edit `chamberAddress` (Line 1, Line 2, City, Pincode).
- **Practice Areas:** Modify or add points in the `practiceAreas` array.
- **Pillars & Quote:** Customize chamber philosophy in `pillars` and `quote`.
- **Insights & Articles:** Add or edit articles in **`/data/posts.ts`**.

---

## 🌐 Deployment to Vercel

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Advocate Naman Mishra portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel will automatically detect **Next.js**.
4. Click **Deploy**. Your portfolio will be live in under a minute with global CDN and automated SSL!

---

## ⚖️ Regulatory Compliance

In accordance with the **Bar Council of India Rules**, this website serves as an informational resource regarding areas of practice and chamber details. It does not constitute legal solicitation or advertising.
