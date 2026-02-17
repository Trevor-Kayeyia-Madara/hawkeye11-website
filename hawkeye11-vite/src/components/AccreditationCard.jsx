export default function AccreditationCard() {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-gold/30 p-6 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-500 opacity-0 animate-fade-in">
      <p className="font-medium text-base text-center md:text-left">
        Accredited by{" "}
        <a
          href="https://prosak.or.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline hover:text-black transition-colors"
        >
          PROSAK
        </a>{" "}
        (Protective & Safety Association of Kenya) and{" "}
        <a
          href="https://kcaa.or.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline hover:text-black transition-colors"
        >
          KCAA
        </a>{" "}
        (Kenya Civil Aviation Authority)
      </p>
    </div>
  );
}
