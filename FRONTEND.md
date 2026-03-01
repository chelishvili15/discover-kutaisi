# Discover Kutaisi Website - Complete Build Specification

## Project Overview

**Website Name:** Discover Kutaisi  
**Domain:** discoverkutaisi.com  
**Type:** Travel & Tourism Website  
**Target Audience:** International tourists visiting Kutaisi, Georgia

**Mission:** Help travelers discover the best of Kutaisi and Western Georgia through expert-guided tours and reliable private transfers.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Astro (static generation) with TypeScript |
| **Styling** | Tailwind CSS |
| **Observability** | Vercel Analytics + Vercel Speed Insights (Astro integrations) |

---

## Website Structure

### Pages

| Page | Tour | Purpose |
|------|-------|---------|
| Home | `/` | Hero, services overview, featured tours, testimonials |
| Blog | `/blog` | Paginated blog listing with latest published articles |
| Blog Detail | `/blog/[slug]` | Individual blog article page |
| Blog Pagination | `/blog/page/[page]` | Additional blog index pages after page 1 |
| Tours | `/tours` | All tour listings with filters and details |
| Tour Detail | `/tours/[slug]` | Individual tour page with itinerary, pricing, booking |
| Places to Visit | `/places-to-visit` | Attractions guide with info cards |
| Place Detail | `/places-to-visit/[slug]` | Detailed attraction information |
| Transfers | `/transfers` | Transfer services and booking |
| About | `/about` | Company story, team, values |
| Contact | `/contact` | Contact form, map, contact info |

### Navigation Structure

```
Header (Sticky)
+-- Logo (Left) - Links to Home
+-- Navigation Links (Center)
    +-- Home
    +-- About
    +-- Tours
    +-- Transfers
    +-- Places
    +-- Contact
    +-- Blog

Footer
+-- Contact Info
+-- Quick Links
+-- Social Media Links
```

**Navigation Note:**
- Header navigation starts with links from `frontend/src/data/site.ts` (Home, About, Contact, Blog) and extends in header with: Tours, Transfers, Places.
- Active page link gets a highlighted visual state (`aria-current="page"` + orange-tinted active styling).
- On mobile, navigation uses a CSS-only dropdown menu triggered by `three-horizontal-lines-icon.svg`.
- Mobile header shows a "Now Viewing: {Current Page}" indicator to clarify current location.
- Mobile menu closes on outside click via a full-screen CSS overlay (no JavaScript).

---

## Design System

### Color Palette

| Color Name | HEX | Tailwind | Usage |
|------------|-----|----------|-------|
| **Primary Orange (Main Brand)** | `#e49c24` | `brandOrange` | Primary actions, highlights, active nav state |
| **Light Orange** | `#e99e31` | `brandOrangeLight` | Gradients, hover states |
| **White** | `#ffffff` | `white` | Backgrounds, text on dark |
| **Dark** | `#1a1a1a` | `brandDark` | Body text, headings |
| **Gray Light** | `#f3f4f6` | `gray-100` | Section backgrounds |
| **Gray Border** | `#d1d5db` | `gray-300` | Borders, dividers |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| **H1** | Century751Custom (`tt1184m.ttf`) | 48px / 3rem | 700 (Bold) |
| **H2** | Century751Custom (`tt1184m.ttf`) | 36px / 2.25rem | 700 (Bold) |
| **H3** | Century751Custom (`tt1184m.ttf`) | 24px / 1.5rem | 700 (Bold) |
| **H4** | Century751Custom (`tt1184m.ttf`) | 20px / 1.25rem | 700 (Bold) |
| **Body** | Times New Roman | 16px / 1rem | 400 (Regular) |
| **Small** | Times New Roman | 14px / 0.875rem | 400 (Regular) |
| **Caption** | Times New Roman | 12px / 0.75rem | 400 (Regular) |

**Typography Source of Truth:**
- Global font families are centrally managed in `frontend/src/styles/global.css` via `--font-title` and `--font-body`.
- Tailwind aliases are mirrored in `frontend/tailwind.config.mjs` as `font-title` and `font-body`.

### Components

#### Buttons

**Primary Button (Orange)**
- Background: `brandOrange` (`#e49c24`)
- Text: White
- Padding: `px-6 py-3`
- Border Radius: `rounded-full`
- Hover: Darker orange (`brandDark`-leaning tone)
- Shadow: `shadow-lg`

**Secondary Button (White/Outline)**
- Background: White
- Text: `brandOrange`
- Border: `border-brandOrange border-[1px]`
- Padding: `px-6 py-2`
- Border Radius: `rounded-full`
- Shadow: `shadow-md shadow-gray-700`

#### Cards

**Tour Card**
- White background
- Rounded corners: `rounded-xl`
- Shadow: `shadow-lg`
- Image: 16:9 ratio, rounded top
- Content padding: `p-5`
- Hover: Scale up slightly, shadow increase

**Place Card**
- Full-width image
- Gradient overlay at bottom
- Title overlaid on image
- Rounded: `rounded-lg`

---

## Homepage Sections

### Section 1: Hero

**Layout:**
- Full viewport height (`min-h-screen`)
- Background: Hero image/video of Kutaisi or Georgian landscape
- Dark gradient overlay for text readability
- Content centered vertically and horizontally

**Content:**
- Main Headline: "Discover Kutaisi"
- Subheadline: "Tours & Transfers in Georgia's Cultural Capital"
- Description: Brief welcome text (1-2 sentences)
- CTA Buttons: "Explore Tours", "Book Transfer"
- Bottom hint: animated down-arrow icon

**Logo:**
- `logo.svg` positioned in header

### Section 2: Featured Tours

**Layout:**
- Background: Light gray or white
- Section title centered
- 4-column grid on desktop, 1-column on mobile

**Content:**
- Title: "Popular Tours"
- Subtitle: "Explore the best of Western Georgia"
- Cards for:
  1. Prometheus Cave Tour
  2. Martvili Canyon Tour
  3. Okatse Canyon Tour
  4. Kutaisi City Tour

Each card includes:
- Tour image
- Tour name
- Duration
- Short description
- Price (`$USD (N &#x20BE;)`)
- Section CTA below cards: "See All Tours" (links to `/tours`)

### Section 3: Why Choose Us

**Layout:**
- Background: White or light gradient
- 4-column icon grid

**Features:**
1. **Expert Local Guides** - Knowledgeable, English-speaking guides
2. **Comfortable Transport** - Modern vehicles with AC
3. **Flexible Itineraries** - Customize your experience
4. **Best Prices** - Competitive rates, no hidden fees

### Section 4: Places to Visit Preview

**Layout:**
- Masonry or grid layout
- Image-heavy with overlay text

**Content:**
- Title: "Must-See Destinations"
- Featured places with images:
  - Gelati Monastery
  - Bagrati Cathedral
  - Sataplia Nature Reserve
  - Prometheus Cave
  - Martvili Canyon

### Section 5: Transfer Services

**Layout:**
- Two-column layout:
  - Left: Popular Transfers
  - Right: Service Features

**Content:**
- Title: "Private Transfers"
- Description: Reliable airport and inter-city transfers
- Popular tours use compact cards:
  - Left tour icon (no colored icon background)
  - Tour direction icon: `previous-arrow-icon.svg`
  - Row 1: from -> to (centered arrow)
  - Row 2: duration + price (`$USD (N &#x20BE;)`)
  - Home page shows top tours preview; Kutaisi -> Telavi is excluded from home preview but remains on `/transfers`
- Service Features are rendered as icon list items with primary + secondary text
- Section CTA below tour/feature columns: "See All Transfers" (links to `/transfers`)

### Section 6: Testimonials

**Layout:**
- 3-card grid on desktop (`md`/`xl` responsive)
- Quote cards with generated initials avatars

**Content:**
- Home page displays 3 featured Google reviews (selected IDs: `t2`, `t4`, `t16`)
- Cards show reviewer name, quote text, and star rating
- Review dates are stored in data but intentionally not shown on cards
- Avatar backgrounds use Google-like color palette variants with reviewer initials
- Star ratings
- "See All Reviews" CTA links to Google Maps profile

### Section 7: Latest from Blog

**Layout:**
- Card grid preview (up to 3 latest published posts)
- Metadata row for category, date, and reading time
- Tag badges on each blog card

**Content:**
- Title and subtitle from home page content JSON
- "Read All Articles" CTA linking to `/blog`

### Section 8: CTA Section

**Layout:**
- Full-width background image
- Uses `/content/img/cta-bg-kutaisi.jpg`
- Taller visual block (`min-h-[110vh]`)
- Centered content

**Content:**
- Headline: "Ready to Explore Kutaisi?"
- Subtext: "Book your tour today and create unforgettable memories"
- CTA Button: "Start Your Adventure"

### Section 9: Footer

**Content:**
- Logo
- Quick Links (Home, About, Contact, Blog, Tours, Places, Transfers)
- Contact Information:
  - Email
  - Phone/WhatsApp
  - Address (Kutaisi, Georgia)
- Social Media Icons:
  - WhatsApp
  - YouTube
  - Google Maps
  - Instagram (`#` placeholder link)
  - TripAdvisor (`#` placeholder link)
  - GetYourGuide (`#` placeholder link)
- "Made in Georgia" footer badge icon (`made-in-georgia-icon.svg`)
- Copyright: "2026 Discover Kutaisi. All rights reserved."

---

## Tours Page

### Layout
- Page header with background image
- Filter sidebar or top bar (Category, Duration, Price)
- Tour grid: 3 columns desktop, 1 column mobile

### Tour Card Structure
```
[Tour Image]
[Tour Name]
[Duration] [Difficulty]
[Short Description - 2 lines]
[Price: From: $USD (N &#x20BE;)]
[Book Now Button]
```

### Filter Options
- Category: Nature, History, Adventure, All
- Duration: Half-day, Full-day, Multi-day
- Price Range: Slider or presets

### Tours Data

See "content" directory for details

---

## Blog Pages

### Blog Index (`/blog`)
- Shows published blog posts only
- Sorted by published date (newest first)
- Uses card grid with category, date, reading time, tags, and excerpt
- First page displays up to 6 posts

### Blog Detail (`/blog/[slug]`)
- Hero section with post title and metadata
- JSON block renderer supports:
  - Paragraphs
  - Headings
  - Ordered/unordered lists
  - Quotes
  - Images with optional captions
- Related articles section by category

### Blog Pagination (`/blog/page/[page]`)
- Generated for page 2 and above
- Previous/Next pagination controls
- Page size is 6 posts per page

### Blog Data Source
- Blog content files are JSON under `frontend/src/content/blog/`
- Only posts with `isPublished: true` are rendered on public blog pages

---

## Tour Detail Page

### Layout
- Hero image (full-width)
- Sticky booking sidebar or bottom CTA
- Tabbed content or scroll sections

### Sections

1. **Overview**
   - Tour title
   - Duration
   - Price (per person or group)
   - "Book This Tour" button
   - Quick info (group size, language, pickup)

2. **Description**
   - Detailed tour description
   - What to expect
   - Story/narrative of the experience

3. **Itinerary**
   - Timeline of the day
   - Stop-by-stop breakdown
   - Time spent at each location

4. **What's Included**
   - Professional guide
   - Transportation
   - Entry fees (if applicable)
   - Bottled water
   - Hotel pickup/dropoff

5. **What's Not Included**
   - Meals (unless specified)
   - Personal expenses
   - Tips/gratuities

6. **Important Information**
   - What to bring
   - Dress code (for monasteries)
   - Physical requirements
   - Weather considerations

7. **Gallery**
   - Photo gallery of the tour/destinations

8. **Reviews**
   - Customer testimonials specific to this tour

9. **Similar Tours**
   - Related tour recommendations

---

## Places to Visit Page

### Layout
- Grid of destination cards
- Filter by: Caves, Canyons, Monasteries, Nature

### Place Cards
- Image
- Name
- Location (town/region)
- Entry fee if applicable
- Short description
- "Learn More" link

### Destinations Data

See "content" directory for details

### Place Detail Experience
- Hero section includes full place description
- Inline image gallery with left/right navigation
- Image click opens PhotoSwipe modal with swipe and zoom
- YouTube video player is embedded when a place has a video URL

---

## Transfers Page

### Layout
- Hero section
- Section 1: two-column layout (Popular Tours + Service Features)
- Section 2: two-column layout (Vehicle Types + Booking Form)

### Content

**Header:** Private Transfers in Georgia

**Description:** Comfortable, reliable private transfers with professional English-speaking drivers.

**Popular Tours:**
- Compact tour cards with:
  - Left tour icon (no colored icon background)
  - Tour direction icon: `previous-arrow-icon.svg`
  - Row 1: from -> to
  - Row 2: duration + price (`$USD (N &#x20BE;)`)

**Features:**
- Modern, air-conditioned vehicles
- Professional, English-speaking drivers
- Flight tracking for airport pickups
- 24/7 availability
- Free waiting time at airport (60 min)
- No hidden fees

**Vehicle Types:**
- Shown as icon cards with title + secondary text
- Displayed to the left of the booking form
- Current icon mapping:
  - Sedan -> `sedan-car-icon.svg`
  - Minivan -> `suv-car-icon.svg`
  - Minibus -> `passanger-van-icon.svg`

---

## Booking System

### Booking Form Fields

**Tour Booking:**
- Select Tour (dropdown)
- Date (date picker)
- Number of Adults
- Number of Children (with ages)
- Full Name
- Email
- Phone/WhatsApp
- Pickup Location
- Special Requests (textarea)

**Transfer Booking:**
- Transfer Type (Airport/City-to-City)
- From Location
- To Location
- Date
- Time
- Flight Number (if airport pickup)
- Number of Passengers
- Luggage Count
- Full Name
- Email
- Phone
- Special Requests

### Booking Flow
1. Select service/date
2. Enter details
3. Review booking
4. Submit request
5. Confirmation email sent
6. Follow-up with payment link or details

---

## About Page

### Sections

1. **Our Story**
   - How Discover Kutaisi started
   - Mission and vision
   - Love for Georgian culture and nature

2. **Why We Started**
   - Gap in quality tourism services
   - Passion for sharing Kutaisi's beauty
   - Supporting local community

3. **Our Team**
   - Guide profiles with photos
   - Experience and expertise

4. **Our Values**
   - Sustainable tourism
   - Supporting local businesses
   - Authentic experiences
   - Customer satisfaction

5. **Gallery**
   - Behind-the-scenes photos
   - Tour moments

### About Page Icon Mapping
- CTA info icon uses `bulb-icon.svg`.

---

## Contact Page

### Layout
- Two-column layout on large screens: Contact Info + Booking Form

### Contact Information

- Email row uses `gmail-icon.svg`
- WhatsApp and YouTube rows use branded icons
- Contact rows are vertically centered (icon + label + link alignment)
- Contact list also includes Instagram, TripAdvisor, GetYourGuide, and Google Maps as inline link rows
- Current link labels:
  - Instagram: "DM on Instagram"
  - TripAdvisor: "Visit TripAdvisor"
  - GetYourGuide: "Find us on GetYourGuide"
  - Google Maps: "See details on Google Maps"
- Booking form is rendered on Contact page in tour mode (`mode="tour"`)

### Map
- Embedded Google Map showing Kutaisi

---

## Animations & Interactions

### Page Load Animations
- Hero content fade-in with slight upward movement

### Scroll Animations
- Sections fade in as they enter viewport
- Cards stagger animation
- Sticky WhatsApp floating action button is shown site-wide

### Hover Effects
- Cards: Scale 1.02, shadow increase
- Buttons: Background color darken
- Images: Slight zoom
- Header nav links: hover lift/tint and active-page highlight styling

### Custom Animations
- Hero down-arrow uses bounce animation as a scroll hint.
- Floating WhatsApp button uses a white pill style with orange border and heartbeat CSS animation

### Transitions
- Page transitions: Slide fade
- Modal/overlay: Fade with scale
- Mobile navigation is visible inline in the header (no slide-out drawer)

---

## SEO Requirements

### Meta Tags (Per Page Template)
```html
<title>{pageTitle} | Discover Kutaisi - Tours & Transfers in Georgia</title>
<meta name="description" content="{pageDescription}">
<meta name="keywords" content="{relevantKeywords}">
<meta property="og:title" content="{pageTitle}">
<meta property="og:description" content="{pageDescription}">
<meta property="og:image" content="{featuredImage}">
<meta property="og:url" content="{pageUrl}">
<meta property="og:type" content="{ogType}">
<meta property="og:site_name" content="{siteName}">
<meta name="twitter:card" content="{twitterCard}">
<meta name="twitter:title" content="{pageTitle}">
<meta name="twitter:description" content="{pageDescription}">
<meta name="twitter:image" content="{featuredImage}">
```

### URL Structure
- Use kebab-case for slugs
- Include target keywords
- Example: `/tours/prometheus-cave-kutaisi`

### Keywords by Page

**Homepage:**
- Primary: "Kutaisi tours", "Discover Kutaisi"
- Secondary: "Georgia tours", "Kutaisi transfers", "things to do in Kutaisi"

**Tours Page:**
- Primary: "Kutaisi day trips", "tours from Kutaisi"
- Secondary: "Prometheus Cave tour", "Martvili Canyon tour"

**Transfers Page:**
- Primary: "Kutaisi airport transfer", "Kutaisi to Tbilisi transfer"
- Secondary: "private transfer Georgia", "Kutaisi taxi service"

### Structured Data (Implemented)
- Organization schema (TravelAgency)
- Breadcrumb schema
- TouristAttraction schema for place detail pages
- TouristTrip schema for tour detail pages
- BlogPosting schema for blog detail pages
- ItemList schema for blog index and blog pagination pages

### Crawl Assets
- `robots.txt` is served from `public`
- Sitemap is generated via Astro sitemap integration during build
- Sitemap is available in preview/production builds (not typically available in plain `npm run dev`)

### Image SEO
- Descriptive alt text for all images
- Filename format: `destination-name-keyword.jpg`
- Compress images for web (WebP format preferred)
- Lazy loading for below-fold images

---

## Content Guidelines

### Tone of Voice
- **Friendly and welcoming** - Georgian hospitality
- **Professional but approachable** - Expert but not stuffy
- **Enthusiastic** - Share the love for Georgia
- **Clear and concise** - Easy to scan

### Writing Style
- Use active voice
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Include practical details (times, prices, tips)
- Use "we" to create personal connection

### Content Source
- Website content is JSON-driven under `frontend/src/content/` (pages, blog, tours, places, transfers)

### Georgian Terms (Use Sparingly)
- Gamarjoba - Hello
- Madloba - Thank you
- Gaumarjos - Cheers

---

## Images & Media

### Required Images

**Hero Images:**
- Kutaisi cityscape (day and sunset)
- Bagrati Cathedral
- Gelati Monastery
- Prometheus Cave interior
- Martvili Canyon boat
- Okatse Canyon walkway
- Georgian landscape

See "content" directory for details

**Tour Images:**
- Each tour needs 5-10 high-quality photos
- Mix of landscapes and experiences
- Include people when possible

**Team Photos:**
- Professional headshots
- Guides in action

### Image Specifications
- Hero: 1920x1080px minimum
- Cards: 800x600px (4:3) or 1200x675px (16:9)
- Thumbnails: 400x300px
- Format: WebP with JPEG fallback
- Optimization: Compress to <200KB per image

---

## Legal & Compliance

### Required Pages
- **Terms of Service** - `/terms`
- **Privacy Policy** - `/privacy`

---

## Performance Requirements

### Page Speed Targets
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.8s
- Cumulative Layout Shift: <0.1

### Optimization
- Lazy load images
- Code splitting
- Minify CSS/JS
- Use CDN for assets
- Enable Gzip/Brotli compression

### Mobile-First
- Design mobile layouts first
- Touch-friendly buttons (min 44x44px)
- Readable font sizes (min 16px)
- Responsive images

---

## Browser Support

**Target Browsers:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## Contact Information Template

See "content" directory for details
