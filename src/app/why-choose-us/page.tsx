import SectionHeader from "../components/SectionHeader";

export default function WhyChoosePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeader title="Why Choose Hawkeye 11" subtitle="Trusted, local, and reliable" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white dark:bg-[#0f0f0f] border-l-4 border-yellow-400">
            <h4 className="font-semibold">Experienced Teams</h4>
            <p className="text-sm text-muted-foreground mt-2">Over 10 years of professional service across Kenya.</p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-[#0f0f0f] border-l-4 border-yellow-400">
            <h4 className="font-semibold">Technology Driven</h4>
            <p className="text-sm text-muted-foreground mt-2">CCTV, monitoring, and patrol tracking integrated.</p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-[#0f0f0f] border-l-4 border-yellow-400">
            <h4 className="font-semibold">Compliant & Certified</h4>
            <p className="text-sm text-muted-foreground mt-2">PSRA licensed and PROSAK membership.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
