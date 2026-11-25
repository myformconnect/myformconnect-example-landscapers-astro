# Evergreen Landscapes

A demonstration landscaping business website built with Astro, TypeScript, and Vanilla CSS, showing integration with MyFormConnect for lead capture and consultation booking.

## Tech Stack

- Framework: Astro (Static Site Generation)
- Language: TypeScript
- Styling: Vanilla CSS (custom design tokens in `src/styles/global.css`)
- Forms & Booking: MyFormConnect

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
├── public/
│   ├── booking-widget.css   # Styling for the MyFormConnect booking widget
│   ├── booking-widget.js    # MyFormConnect booking widget script
│   └── images/              # Optimized static image assets
├── src/
│   ├── components/          # Reusable UI, forms, and layout components
│   ├── config/
│   │   └── forms.ts         # Centralized form endpoints and company info
│   ├── layouts/
│   │   └── MainLayout.astro # Base HTML layout and SEO metadata
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   ├── services.astro   # Services overview
│   │   ├── projects.astro   # Portfolio with category filtering
│   │   └── contact.astro    # Estimate request form and booking widget
│   ├── scripts/
│   │   └── form-handler.ts  # Client-side AJAX submission handler
│   └── styles/
│       └── global.css       # Global styles and design variables
```
