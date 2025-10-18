import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ClientLayout } from "./components/ClientLayout";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggleFixed } from "./components/ThemeToggle";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Hawkeye 11 Company Limited | Private Security in Kenya",
  description:
    "Hawkeye 11 Company Limited – Licensed by PSRA, member of PROSAK. Professional guarding, K9, CCTV & VIP security services across Kenya.",
  openGraph: {
    title: "Hawkeye 11 Company Limited",
    description:
      "Elite private security services built on discipline, integrity & innovation.",
    url: "https://www.hawkeye11companylimited.com",
    siteName: "Hawkeye 11 Company Limited",
    images: ["/og-image.png"],
    locale: "en_KE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans transition-colors duration-500`}
      >
        <ThemeProvider>
        <ClientLayout>
          <Navbar />
          <ThemeToggleFixed />
          <main className="flex-grow">{children}</main>
          <Link
            href="https://wa.me/254765869184" // Replace with your official number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.91 11.91 0 0012.04 0 12 12 0 000 12a11.88 11.88 0 001.64 6.08L0 24l6.2-1.62A12 12 0 0012.04 24a11.91 11.91 0 008.48-3.52A12 12 0 0024 12a11.91 11.91 0 00-3.48-8.52zM12.04 22a9.94 9.94 0 01-5.08-1.38l-.36-.2-3.68.96.98-3.58-.24-.36A9.93 9.93 0 012.04 12a10 10 0 0110-10 9.94 9.94 0 017.08 2.92A10 10 0 0122 12a9.94 9.94 0 01-2.92 7.08A9.94 9.94 0 0112.04 22zm5.76-7.12c-.32-.16-1.9-.94-2.2-1.04s-.5-.16-.72.16-.82 1.04-1 1.26-.36.24-.68.08a8.09 8.09 0 01-2.36-1.46 9.21 9.21 0 01-1.7-2.1c-.18-.3 0-.46.14-.62.14-.14.32-.36.48-.54s.22-.3.32-.5.06-.38-.02-.54-.72-1.76-1-2.42c-.26-.62-.52-.54-.72-.54H7a1.36 1.36 0 00-1 .46A4.1 4.1 0 005.04 9a7.06 7.06 0 001.62 3.7 16.19 16.19 0 006.34 5.1c.88.38 1.56.6 2.1.76a5 5 0 002.32.14c.72-.1 2.22-1 2.54-1.92a2 2 0 00.14-1.92c-.12-.28-.44-.44-.78-.6z"/>
            </svg>
          </Link>
          <Footer />
        </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
