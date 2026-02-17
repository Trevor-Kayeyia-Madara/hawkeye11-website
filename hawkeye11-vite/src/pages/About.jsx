import SectionHeader from "../components/SectionHeader";
import AccreditationCard from "../components/AccreditationCard";
import Button from "../components/Button";

export default function About() {
  const certifications = [
    {
      title: "Private Security Regulatory Authority (PSRA)",
      description:
        "Licensed and compliant under the Private Security Regulation Act of Kenya.",
      link: "https://psra.go.ke",
    },
    {
      title: "Protective & Safety Association of Kenya (PROSAK)",
      description:
        "Proud member of PROSAK, promoting professionalism and safety in the security industry.",
      link: "https://prosak.or.ke",
    },
    {
      title: "Kenya Civil Aviation Authority (KCAA)",
      description:
        "Certified for aviation-related security operations, meeting national safety standards.",
      link: "https://kcaa.or.ke",
    },
  ];

  return (
    <main className="bg-white text-black">

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/about-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold-gradient">
            About Hawkeye 11
          </h1>
          <p className="text-gray-200 text-lg">
            Professional Security Excellence — Trusted by Kenyans for Over a Decade
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Who We Are" />
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Text Block */}
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              <span className="font-semibold">Hawkeye 11 Company Limited</span> is a 
              fully licensed and PSRA-certified private security firm headquartered 
              in Nairobi, Kenya. We provide professional, disciplined, and 
              technology-driven security services designed to safeguard lives, 
              property, and high-value assets.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our operations are built on reliability, integrity, and continuous 
              improvement — combining human vigilance with modern systems 
              to deliver superior protection for our clients across all sectors.
            </p>
            <div className="mt-8">
              <Button
                text="Explore Our Services"
                href="/services"
                variant="black"
                size="md"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="/images/escort.jpeg"
              alt="Hawkeye 11 Team"
              className="rounded-lg shadow-md w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Our Mission & Vision" />
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gold">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide professional, reliable, and customer-focused security
              solutions that protect people, assets, and organizations through
              discipline, technology, and teamwork.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gold">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be Kenya’s most trusted and innovative private security partner,
              leading in service excellence, technology integration, and social
              responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-20 px-6 md:px-16 bg-black text-white">
        <SectionHeader title="Certifications & Accreditations" textColor="text-white" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-gold/30 p-6 rounded-lg hover:bg-white hover:text-black transition-all duration-500"
            >
              <h4 className="font-semibold text-lg mb-2 text-gold">{cert.title}</h4>
              <p className="text-sm mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-black font-medium transition-colors"
              >
                Visit Website →
              </a>
            </div>
          ))}
        </div>

        {/* Accreditation Card */}
        <div className="mt-12">
          <AccreditationCard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 bg-gold text-black text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Partner with Kenya’s Most Reliable Security Experts
        </h2>

        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <Button text="Contact Us" href="/contact" variant="black" size="md" />
          <Button
            text="Chat on WhatsApp"
            href="https://wa.me/254765869184"
            newTab
            variant="white"
            size="md"
          />
        </div>
      </section>
    </main>
  );
}
