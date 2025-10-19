import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
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
  authors: [{ name: "Hawkeye 11 Company Limited", url: "https://hawkeye11-website.vercel.app" }],
  creator: "Hawkeye 11 Company Limited",
  publisher: "Hawkeye 11 Company Limited",
  metadataBase: new URL("https://hawkeye11-website.vercel.app"),
  alternates: {
    canonical: "https://hawkeye11-website.vercel.app",
  },

  openGraph: {
    title: "Hawkeye 11 Company Limited — Licensed Kenyan Private Security Firm",
    description:
      "Professional security services: guards, K9, CCTV, alarms, and cash-in-transit across Kenya.",
    url: "https://hawkeye11-website.vercel.app",
    siteName: "Hawkeye 11 Security Kenya",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // replace with your actual image in /public folder
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
    creator: "@Hawkeye11", // replace with your Twitter/X handle if available
    images: ["/og-image.jpg"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
