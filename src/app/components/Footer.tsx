import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white py-10 text-center border-t border-[#1A1A1A]">
      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://facebook.com/hawkeye11" target="_blank" className="hover:text-[#D4AF37]">Facebook</Link>
        <Link href="https://instagram.com/hawkeye11" target="_blank" className="hover:text-[#D4AF37]">Instagram</Link>
        <Link href="https://linkedin.com/company/hawkeye11" target="_blank" className="hover:text-[#D4AF37]">LinkedIn</Link>
        <Link href="https://x.com/hawkeye11" target="_blank" className="hover:text-[#D4AF37]">X (Twitter)</Link>
      </div>
      <p className="text-sm text-white/60">
        © {new Date().getFullYear()} Hawkeye 11 Company Limited. All Rights Reserved.
      </p>
    </footer>
  );
}
