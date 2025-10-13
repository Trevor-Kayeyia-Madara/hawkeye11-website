import Hero from "./components/Hero";
import SectionHeader from "./components/SectionHeader";
import ServiceCard from "./components/ServiceCard";
import MapSection from "./components/MapSection";
import TestimonialCard from "./components/TestimonialCard";

const services = [
  { title: "Manned Guarding", desc: "Visible, trained officers to deter and respond." },
  { title: "K-9 Patrol Units", desc: "Canine teams for detection and rapid interception." },
  { title: "CCTV Monitoring", desc: "Live monitoring with incident verification and escalation." },
  { title: "Perimeter Systems", desc: "Alarms and electric fences for proactive perimeter defence." },
  { title: "VIP Protection", desc: "Discreet, specialised protection for high-profile clients." },
  { title: "Security Consulting", desc: "Practical risk assessments and tailored security plans." },
];

const testimonials = [
  { name: "M. Odhiambo", role: "Facilities Manager", quote: "Professional, reliable, and always on point." },
  { name: "A. Njoroge", role: "CEO", quote: "Their rapid response made all the difference." },
  { name: "L. Kamau", role: "Operations Lead", quote: "Smart tech plus disciplined guards increased safety." },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#070707] text-slate-900 dark:text-white">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />

        {/* Trust / quick stats bar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-[#0f0f0f] rounded shadow flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-yellow-600 flex items-center justify-center text-white font-bold">10+</div>
            <div>
              <div className="text-sm font-semibold">Years in Service</div>
              <div className="text-xs text-muted-foreground">Serving Kenya&apos;s communities</div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-[#0f0f0f] rounded shadow flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-black flex items-center justify-center text-yellow-400 font-bold">✓</div>
            <div>
              <div className="text-sm font-semibold">Certified Teams</div>
              <div className="text-xs text-muted-foreground">Vetted, trained, insured</div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-[#0f0f0f] rounded shadow flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-white font-bold">24/7</div>
            <div>
              <div className="text-sm font-semibold">24/7 Support</div>
              <div className="text-xs text-muted-foreground">Monitoring & rapid response</div>
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="mt-10">
          <SectionHeader title="Featured Services" subtitle="Disciplined, reassuring solutions for every security need." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.desc} />
            ))}
          </div>
        </section>

        {/* Why choose */}
        <section className="mt-12">
          <SectionHeader title="Why Choose Hawkeye 11" subtitle="Local expertise, disciplined teams, modern tech." />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-[#0f0f0f] rounded shadow">
              <h4 className="font-semibold">Vetted Personnel</h4>
              <p className="text-sm text-muted-foreground mt-2">Strict recruitment, continuous training and supervision.</p>
            </div>
            <div className="p-4 bg-white dark:bg-[#0f0f0f] rounded shadow">
              <h4 className="font-semibold">Technology First</h4>
              <p className="text-sm text-muted-foreground mt-2">Integrated CCTV, alarms and real-time monitoring.</p>
            </div>
            <div className="p-4 bg-white dark:bg-[#0f0f0f] rounded shadow">
              <h4 className="font-semibold">Rapid Response</h4>
              <p className="text-sm text-muted-foreground mt-2">Local teams positioned for fast deployment.</p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="mt-12">
          <SectionHeader title="Coverage Map" subtitle="Where we operate across Kenya" />
          <MapSection />
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <SectionHeader title="What Our Clients Say" subtitle="Real feedback from protected organisations" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} name={t.name} role={t.role} quote={t.quote} />
            ))}
          </div>
        </section>

        {/* CTA footer */}
        <section className="mt-14 rounded-lg overflow-hidden">
          <div className="bg-black text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready to protect what matters most?</h3>
              <p className="text-sm text-white/90 mt-1">Request a tailored quote and security assessment today.</p>
            </div>
            <div className="flex gap-3">
              <a href="#contact" className="bg-yellow-400 text-black px-5 py-3 rounded font-semibold">Request Quote</a>
              <a href="mailto:info@hawkeye11.co.ke" className="border border-white/30 px-4 py-3 rounded">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
