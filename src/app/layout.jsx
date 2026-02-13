import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

// Metadata object
export const metadata = {
  metadataBase: new URL("https://hawkeye11companylimited.com"),

  title: {
    default: "Hawkeye 11 Company Limited",
    template: "%s | Hawkeye 11 Security Kenya",
  },

  description:
    "Hawkeye 11 Company Limited is a licensed Kenyan private security company offering professional guarding, K9, CCTV, alarm, and cash-in-transit services nationwide.",

  keywords: [
    "Hawkeye 11",
    "security company Kenya",
    "private security services",
    "guarding services",
    "CCTV installation",
    "alarm response",
    "K9 security",
    "cash in transit",
    "Kenyan security firm",
  ],

  authors: [{ name: "Hawkeye 11 Company Limited", url: "https://hawkeye11companylimited.com" }],
  creator: "Hawkeye 11 Company Limited",
  publisher: "Hawkeye 11 Company Limited",

  alternates: {
    canonical: "https://hawkeye11companylimited.com",
  },

  openGraph: {
    title: "Hawkeye 11 Company Limited — Licensed Kenyan Private Security Firm",
    description:
      "Professional security services: manned guarding, K9 dog unit, CCTV, alarm response, and cash-in-transit across Kenya.",
    url: "https://hawkeye11companylimited.com",
    siteName: "Hawkeye 11 Company Limited",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "https://hawkeye11companylimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hawkeye 11 Company Limited Security Team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hawkeye 11 Company Limited",
    description:
      "Trusted private security company in Kenya — manned guarding, K9, CCTV, alarm response, and CIT services.",
    creator: "@Hawkeye11", // replace with your actual handle
    images: ["https://hawkeye11companylimited.com/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* ✅ Structured Data (Organization Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hawkeye 11 Company Limited",
              url: "https://hawkeye11companylimited.com",
              logo: "https://hawkeye11companylimited.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jeupe House, Utawala, Embakasi",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+254765869184",
                  contactType: "customer service",
                  areaServed: "KE",
                },
              ],
              sameAs: [
                "https://www.facebook.com/hawkeye11companylimited",
                "https://www.linkedin.com/company/hawkeye11companylimited",
                "https://x.com/Hawkeye11",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
