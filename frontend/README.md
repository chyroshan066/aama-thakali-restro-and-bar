# The Meraki Cafe Restaurant & Bar Website

A modern, responsive restaurant website built for The Meraki Cafe Restaurant & Bar, featuring online reservations, menu showcase, and customer engagement features.

## 🍽️ About

The Meraki Cafe Restaurant & Bar is a premium restaurant website designed to provide customers with an exceptional digital dining experience. The site features elegant design, smooth animations, and intuitive navigation to showcase the restaurant's offerings and facilitate easy reservations.

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Online Reservations** - Easy table booking system with form validation
- **Menu Showcase** - Beautiful presentation of food items with pricing
- **Gallery** - High-quality images of dishes and restaurant ambiance
- **Contact Information** - Easy-to-find location, hours, and contact details
- **Performance Optimized** - Fast loading times and smooth user experience
- **SEO Friendly** - Optimized for search engines and local discovery

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS / Custom CSS
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form with validation
- **Performance**: Image optimization and lazy loading
- **Deployment**: Vercel with custom domain support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd gurung-bbq
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

## 🏗️ Project Structure

```
gurung-bbq/
├── .github/
├── public/
│   ├── fonts/
│   │   ├── dm-sans/
│   │   │   ├── DM_Sans-Bold.woff2
│   │   │   └── DM_Sans-Regular.woff2
│   │   └── forum
│   │       └── Forum-Regular.woff2
│   ├── images/
│   │   ├── about/
│   │   ├── ...
│   │   └── testimonials/
│   └── favicon_io/
│       ├── favicon.ico
│       ├── ...
│       └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── sitemap.ts
│   │   └── page.tsx
│   ├── components/
│   │   ├── utility/
│   │   │   ├── Button/
│   │   │   ├── ....
│   │   │   └── IonIcon.tsx
│   │   ├── About.tsx
│   │   ├── ...
│   │   └── TopBar.tsx
│   ├── constants/
│   │   ├── index.ts
│   │   ├── ...
│   │   └── testimonials.ts
│   ├── middlewares/
│   │   └── schema.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── clsx.ts
│       ├── ...
│       └── subscriptionData.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── LICENSE
└── README.md
```

## 🎨 Key Components

### Reservation System
- Form validation with error handling
- Date selection with future date enforcement
- Real-time form feedback
- Mobile-optimized interface

### Menu Display
- Categorized menu items
- High-quality food photography
- Price display
- Easy navigation between sections

### Gallery
- Optimized image loading
- Mobile-friendly viewing

## 📱 Responsive Design

The website is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuration

### Custom Domain Setup

The website is configured for the custom domain `hiddenhutrestaurant.com`:

1. DNS records are configured for the domain
2. SSL certificates are automatically provisioned
3. www and non-www versions are handled

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Tailwind CSS with unused style purging
- **SEO**: Meta tags, structured data, and sitemap

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Check code quality:
```bash
npm run lint
npm run type-check
```

## 📈 SEO Features

- Meta tags
- Open Graph support
- Structured data for restaurant information
- Local business schema markup
- Sitemap generation

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments:

- **Production**: https://hiddenhutrestaurant.com
- **Preview**: Automatic preview deployments for pull requests

### Manual Deployment

```bash
npm run build
npm run export  # if using static export
```

## 📞 Support & Maintenance

### Client Information
- **Restaurant**: The Meraki Cafe Restaurant & Bar
- **Domain**: hiddenhutrestaurant.com
- **Deployment**: Vercel

### Developer Contact
For technical support or website updates, contact the developer.

## 📝 License

This project is proprietary software developed specifically for The Meraki Cafe Restaurant & Bar.

---

**Built with ❤️ for Gurung BBQ**

*For any questions or support regarding this website, contact **[chyroshan066](https://github.com/chyroshan066)**.*