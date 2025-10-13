import Image from "next/image";

export default function Hero() {
  return (
    <header className="rounded-lg bg-gradient-to-br from-black to-yellow-600 text-white p-10 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Kenya’s Trusted Shield: Vigilant Protection, Unmatched Security
        </h1>
        <p className="mt-3 max-w-xl">
          Safeguarding your people, property, and reputation with expertly trained guards and
          advanced technology—delivering peace of mind through unwavering professionalism and
          reliability.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#contact" className="bg-white text-black px-4 py-2 rounded font-semibold">Request a Security Assessment</a>
          <a href="mailto:info@hawkeye11.co.ke" className="border border-white/60 px-4 py-2 rounded">Speak to Our Experts</a>
        </div>
      </div>

      <div className="w-48 h-48 relative hidden md:block">
        <Image src="/next.svg" alt="security" fill className="object-contain" />
      </div>
    </header>
  );
}
