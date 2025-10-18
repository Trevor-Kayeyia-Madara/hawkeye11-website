import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
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
          <Footer />
        </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
