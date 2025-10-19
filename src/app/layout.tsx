import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Hawkeye 11 Company Limited",
  description: "Licensed Kenyan private security company — guards, K9, CCTV, alarms, and CIT services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <html>
  <body>
    <Navbar />
      <main>{children}</main>
    <Footer />
    <WhatsAppButton />
  </body>
</html>
  );
}
