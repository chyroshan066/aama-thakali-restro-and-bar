import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import IonicScripts from "@/utils/IonicScripts";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { menuStructuredData, restaurantStructuredData } from "@/constants";

const forum = localFont({
  src: [
    {
      path: "../../public/fonts/forum/Forum-Regular.woff2",
      weight: "400",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-forum'
});

const dm_sans = localFont({
  src: [
    {
      path: "../../public/fonts/dm-sans/DM_Sans-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/dm-sans/DM_Sans-Bold.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-dm_sans'
});

export const metadata: Metadata = {
  title: "The Meraki Cafe, Restro & Bar - Authentic Nepali Restaurant",
  description: "Experience authentic Nepali BBQ at Meraki Restro. Savor traditional grilled meats, momos, and Himalayan flavors in a warm, welcoming atmosphere. Fresh ingredients, bold spices, and time-honored recipes.",
  keywords: [
  "restaurant in boudha",
  "best restaurant in boudha",
  "restaurants in boudha",
  "top restaurant in boudha",
  "boudha restaurant",
  "boudha dining",
  "restaurant near boudha stupa",
  "dining in boudha",
  "food in boudha",
  "where to eat in boudha",
  "restaurant in kathmandu",
  "best restaurant in kathmandu",
  "restaurants in kathmandu",
  "top restaurant in kathmandu",
  "kathmandu restaurant",
  "kathmandu dining",
  "best dining in kathmandu",
  "where to eat in kathmandu",
  "food in kathmandu",
  "cafe in boudha",
  "best cafe in boudha",
  "cafes in boudha",
  "coffee shop in boudha",
  "boudha cafe",
  "cafe near boudha stupa",
  "cozy cafe boudha",
  "cafe in kathmandu",
  "best cafe in kathmandu",
  "cafes in kathmandu",
  "coffee shop in kathmandu",
  "kathmandu cafe",
  "top cafe kathmandu",
  "bar in boudha",
  "best bar in boudha",
  "bars in boudha",
  "boudha bar",
  "pub in boudha",
  "nightlife in boudha",
  "drinks in boudha",
  "bar in kathmandu",
  "best bar in kathmandu",
  "bars in kathmandu",
  "kathmandu bar",
  "pub in kathmandu",
  "nightlife kathmandu",
  "rooftop bar kathmandu",
  "Meraki Restro",
  "Meraki Restro Boudha",
  "Meraki cafe boudha",
  "Meraki bar boudha",
  "Meraki restaurant kathmandu",
  "Nepali restaurant in boudha",
  "Nepali restaurant in kathmandu",
  "authentic Nepali food boudha",
  "authentic Nepali food kathmandu",
  "momos in boudha",
  "momos in kathmandu",
  "BBQ restaurant boudha",
  "BBQ restaurant kathmandu",
  "Himalayan cuisine kathmandu",
  "grilled food kathmandu",
  "restaurant near me boudha",
  "restaurant near me kathmandu",
  "cafe near me boudha",
  "cafe near me kathmandu",
  "best food near boudha stupa",
  "family restaurant boudha",
  "family restaurant kathmandu",
  "lunch restaurant boudha",
  "dinner restaurant kathmandu",
  "affordable restaurant kathmandu",
],
  authors: [{ name: "The Meraki Cafe, Restro & Bar" }],
  creator: "The Meraki Cafe, Restro & Bar",
  publisher: "The Meraki Cafe, Restro & Bar",
  metadataBase: new URL("https://www.aamathakalirestro.com.np/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,  // Search engine will index this page
    follow: true,  // Search engine will follow its links
    nocache: true,  // Doesn't store cached version of the pages and always check for fresh data/refreshes
    googleBot: {
      index: true,  // Same as above, but specifically for Google
      follow: true,  // Same as above, but specifically for Google
      noimageindex: false,  // Setting it to false shows photos in google images
      "max-video-preview": -1,  // Show full video previews in search (-1 = unlimited)
      "max-image-preview": "large",  // Show large image previews in search
      "max-snippet": -1,  // Show full text snippets in search (-1 = unlimited)
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "The Meraki Cafe, Restro & Bar - Authentic Nepali Restaurant",
    description: "Experience authentic Nepali BBQ at Meraki Restro. Savor traditional grilled meats, momos, and Himalayan flavors in a warm, welcoming atmosphere. Fresh ingredients, bold spices, and time-honored recipes.",
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "The Meraki Cafe, Restro & Bar",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "The Meraki Restro Restaurant & Bar Preview",
      }
    ],
  },
  category: "restaurant",
  classification: "Restaurant",
  referrer: "origin-when-cross-origin",
  applicationName: "The Meraki Cafe, Restro & Bar",
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          // "dangerouslySetInnerHTML" is a way to inject raw HTML content into a React component.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantStructuredData),  // "__html" property accepts raw HTML/text
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(menuStructuredData),
          }}
        />
        {/* Verification tags if needed */}
        {/* <meta name="google-site-verification" content="your-verification-code" />
        <meta name="facebook-domain-verification" content="your-verification-code" /> */}
      </head>

      <body
        className={`${forum.variable} ${dm_sans.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
        <AnalyticsWrapper />
        <IonicScripts />
      </body>
    </html>
  );
}
