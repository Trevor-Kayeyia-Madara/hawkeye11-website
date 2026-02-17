import { Link } from "react-router-dom";
import HeroSectionComponent from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import SectionHeader from "../components/SectionHeader";
import AccreditationCard from "../components/AccreditationCard";
import FadeIn from "../components/FadeIn";

export default function Home() {
  const services = [
    {
      title: "Manned Guarding",
      description:
        "Professional and disciplined guards offering round-the-clock protection.",
      link: "/services/guarding",
      image: "/images/guarding.jpg"
    },
    {
      title: "K9 Dog Unit",
      description:
        "Highly trained security dogs and handlers for patrol and detection.",
      link: "/services/k9",
      image: "/images/k9.jpg"
    },
    {
      title: "Alarm & CCTV Systems",
      description:
        "Smart surveillance systems with rapid response monitoring.",
      link: "/services/alarm-cctv",
      image: "/images/cctv.jpg"
    },
    {
      title: "VIP Escort",
      description:
        "Executive protection services for dignitaries.",
      link: "/services/vip",
      image: "/images/escort.jpeg"
    },
    {
      title: "Security Consultancy",
      description:
        "Comprehensive risk assessment and training solutions.",
      link: "/services/consultancy",
      image: "/images/consultant.jpg"
    },
    {
      title: "Cash In Transit (CIT)",
      description:
        "Secure transport of cash and valuables.",
      link: "/services/cit",
      image: "/images/cit.jpg"
    }
  ];

  const whyChoosePoints = [
    "10+ Years of Proven Experience",
    "PSRA Licensed & Certified",
    "Professional, Vetted Personnel",
    "Nationwide Coverage",
    "Technology-Driven Operations"
  ];

  return (
    <main className="bg-white text-black">

      <HeroSectionComponent
        title="Securing Today. Safeguarding Tomorrow."
        subtitle="Professional, Licensed, and Trusted Security Solutions in Kenya."
        buttonPrimary={{ text: "Our Services", link: "/services" }}
        buttonSecondary={{ text: "Contact Us", link: "/contact" }}
        backgroundImage="/images/escort.jpeg"
      />

      {/* WHO WE ARE */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Who We Are" />

        <div className="grid md:grid-cols-2 gap-12 mt-10 items-center">
          <FadeIn direction="left">
            <p className="text-lg leading-relaxed text-gray-700">
              Established in 2013,{" "}
              <span className="font-semibold">
                Hawkeye 11 Company Limited
              </span>{" "}
              is a fully licensed private security firm providing guarding, K9,
              surveillance, and alarm response services across Kenya.
              <br /><br />
              With over a decade of excellence, our reputation stands on
              discipline and innovation.
            </p>

            <Link
              to="/about"
              className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </FadeIn>

          <FadeIn direction="right">
            <img
              src="/images/escort.jpeg"
              alt="About Hawkeye 11"
              className="rounded-lg shadow-md w-full md:w-4/5 object-cover hover:scale-105 transition-transform duration-500"
            />
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Our Security Services" />

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-16 bg-black text-white">
        <SectionHeader title="Why Choose Hawkeye 11" textColor="text-white" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {whyChoosePoints.map((point, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white hover:text-black transition-all duration-500">
                <p className="font-medium text-base">{point}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={500}>
            <AccreditationCard />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 bg-yellow-500 text-black text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold">
            Partner with Kenya’s Most Trusted Security Professionals
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/254765869184"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black px-8 py-3 rounded-md hover:bg-black hover:text-yellow-500 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
