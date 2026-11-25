# Evergreen Landscapes — Modern Landscaping Business Website

A premium, modern, lightweight, and fully responsive landscaping business website built with **Astro**, **TypeScript**, and **Vanilla CSS**, featuring complete integration with **MyFormConnect** / **MyFormCapture**.

Built as a demonstration of how a genuine landscaping business captures project enquiries, provides itemized estimate requests, and schedules on-site design consultations seamlessly.

---

## 🌲 Business Identity

- **Business Name:** Evergreen Landscapes
- **Tagline:** Thoughtful landscapes. Beautiful outdoor living.
- **Main Proposition:** *"Transform your outdoor space into something extraordinary. From garden design to complete landscape installations, we bring your vision to life."*
- **Primary Capabilities Demonstrated:**
  1. **Never Miss a Lead:** High-converting detailed estimate and general enquiry forms.
  2. **Smart Scheduling:** Interactive calendar booking widget for 30-minute site consultations.
  3. **Lead Analytics:** Clean structured data capture with zero SaaS clutter.

---

## 🛠️ Technology Stack

- **Framework:** Astro 5.x (Static Site Generation)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Vanilla CSS (Tailored Design Tokens & Natural Green Palette)
- **Interactivity:** Vanilla JavaScript (Zero heavy framework overhead)
- **Icons:** Inline SVG Lucide Icons
- **Images:** High-resolution optimized imagery with responsive dimensions
- **Form & Scheduling Engine:** [MyFormConnect](https://myformcapture.com)

---

## 📁 Project Structure

```text
evergreen-landscapes/
├── public/
│   ├── booking-widget.css     # Themed MyFormConnect booking widget stylesheet
│   ├── booking-widget.js      # Booking widget client runtime script
│   ├── favicon.svg            # Custom Evergreen Landscapes brand icon
│   ├── robots.txt             # Search engine crawling rules
│   ├── sitemap.xml            # XML Sitemap
│   └── images/                # High-res curated landscape & garden photography
│       ├── hero.jpg
│       ├── intro.jpg
│       ├── og-image.jpg
│       ├── service-*.jpg
│       └── project-*.jpg
├── src/
│   ├── components/
│   │   ├── Header.astro           # Sticky navigation with mobile drawer
│   │   ├── Footer.astro           # Editorial footer with company details & hours
│   │   ├── Hero.astro             # Full-width photographic hero with trust badges
│   │   ├── ServiceCard.astro      # Feature-rich service cards
│   │   ├── ProjectCard.astro      # Portfolio card with category tags
│   │   ├── QuoteForm.astro        # Comprehensive estimate request form
│   │   ├── ContactForm.astro      # Streamlined general inquiry form
│   │   ├── BookingWidget.astro    # Smart scheduling container & noscript fallback
│   │   ├── FormAttribution.astro  # Standardized MyFormConnect attribution
│   │   ├── CTASection.astro       # High-conversion call-to-action blocks
│   │   └── SectionHeading.astro   # Standardized section headings
│   ├── config/
│   │   └── forms.ts               # Centralized MyFormConnect URLs & company data
│   ├── layouts/
│   │   └── MainLayout.astro       # Base HTML document, OpenGraph, JSON-LD schema
│   ├── pages/
│   │   ├── index.astro            # Homepage (Hero, Services, Projects, Why Us)
│   │   ├── services.astro         # 7 Detailed service categories & scopes
│   │   ├── projects.astro         # Curated 8-project portfolio with filtering
│   │   └── contact.astro          # Primary conversion hub (Quote, Booking, Contact)
│   ├── scripts/
│   │   └── form-handler.ts        # AJAX handler adhering to the 6 Golden Rules
│   └── styles/
│       └── global.css             # Design tokens, typography & layout resets
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 📋 Centralized MyFormConnect Configuration

All endpoints are centralized in `src/config/forms.ts`:

```typescript
export const FORM_URLS = {
  enquiry: 'https://myformcapture.com/f/116ef20f-1391-4133-9f53-f2813b89e3db',
  booking: 'https://myformcapture.com/f/8363d4a9-e0bd-44f3-bd51-ff8a180b485e',
};
```

### The 6 Golden Rules Implemented
1. **Always use FormData:** Submissions use `new FormData(form)`. No `JSON.stringify()`.
2. **Never set Content-Type manually:** Allows browser to compute multi-part boundary.
3. **Include the 2 AJAX headers:** `Accept: application/json` and `X-Requested-With: XMLHttpRequest`.
4. **All inputs have name attributes:** Ensures proper serialization into dashboard.
5. **Calls e.preventDefault():** Seamless SPA experience without page reloading.
6. **Hidden honeypot input:** `<input type="text" name="_gotcha" style="display:none;" />`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Static Build
```bash
npm run preview
```

---

## 📄 License & Attribution

Demonstration project created for **MyFormConnect** / **MyFormCapture**.
All business details for Evergreen Landscapes are fictional.
Attribution: [MyFormConnect](https://myformcapture.com)
