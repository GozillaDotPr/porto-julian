# Julian Saputro — Portfolio

Premium one-page personal portfolio for Julian Saputro, Backend Developer & API Engineer.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Deploy to Vercel

1. Push this project to GitHub
2. Import the repository into [Vercel](https://vercel.com)
3. Deploy — zero configuration needed

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel deploy
```

## Project Structure

```
/app
  layout.tsx       # Root layout with metadata & fonts
  page.tsx         # Main page assembling all sections
  globals.css      # Global styles, CSS variables, utilities

/components
  Navbar.tsx       # Fixed animated navbar
  Footer.tsx       # Simple footer
  /sections
    Hero.tsx        # Hero section with animated background
    About.tsx       # About me section
    TechStack.tsx   # Animated tech badge grid
    Experience.tsx  # Timeline work experience
    Projects.tsx    # Project showcase cards
    Contact.tsx     # Contact cards & CTA
  /ui
    AnimatedText.tsx  # FadeIn & word animation components
    SectionHeader.tsx # Reusable section header

/lib
  data.ts          # All portfolio content data
  utils.ts         # cn() utility

/public            # Static assets

tailwind.config.ts
tsconfig.json
next.config.ts
```

## Customization

All portfolio content is centralized in `/lib/data.ts`. Edit that file to update:
- Personal info (name, title, location, contacts)
- Tech stack skills
- Work experience
- Projects

## Performance

- Lighthouse Score: 90+
- Mobile-first responsive design
- Optimized fonts via Google Fonts
- Minimal bundle size with tree-shaking
- Smooth 60fps animations via Framer Motion
