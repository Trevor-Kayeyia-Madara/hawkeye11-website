export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#1A1A1A] py-10 text-center text-white/70 text-sm font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#D4AF37] font-semibold">
            Hawkeye 11 Company Limited
          </span>
          . All rights reserved.
        </p>
        <p className="text-white/50">
          Licensed under PSRA License No. PSRA/HCL/19/82  |  Member of PROSAK
        </p>
      </div>
    </footer>
  );
}
