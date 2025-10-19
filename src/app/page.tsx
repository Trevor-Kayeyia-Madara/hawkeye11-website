"use client";

import { motion } from "framer-motion";
import HeroSectionComponent from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import SectionHeader from "./components/SectionHeader";
import AccreditationCard from "./components/AccreditationCard";


export default function HomePage() {
  return (
    <main className="bg-white text-black">
      {/* 🦅 Hero Section */}
      <HeroSectionComponent
        title="Securing Today. Safeguarding Tomorrow."
        subtitle="Professional, Licensed, and Trusted Security Solutions in Kenya."
        buttonPrimary={{ text: "Our Services", link: "/services" }}
        buttonSecondary={{ text: "Contact Us", link: "/contact" }}
        backgroundImage="/images/escort.jpeg" // Place your hero image here
      />

      {/* 🖤 Who We Are Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Who We Are" />

        <div className="grid md:grid-cols-2 gap-12 mt-10 items-center">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg leading-relaxed text-gray-700">
              Established in 2013, <span className="font-semibold">Hawkeye 11 Company Limited</span> is a fully
              licensed private security firm providing comprehensive guarding,
              K9, surveillance, and alarm response services across Kenya.  
              <br /><br />
              With over a decade of excellence, our reputation stands on discipline, technology-driven operations, and
              unwavering commitment to protecting people and property.
            </p>
            <a
              href="/about"
              className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gold hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              Learn More
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="/images/escort.jpeg"
              alt="About Hawkeye 11"
              className="rounded-lg shadow-md w-full md:w-4/5 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* 🟨 Our Services */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Our Security Services" />

        <motion.div
          className="grid md:grid-cols-3 gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            {
              title: "Manned Guarding",
              description:
                "Professional and disciplined guards offering round-the-clock protection for homes, offices, and institutions.",
              link: "/services/guarding",
              image: "/images/guarding.jpg",
            },
            {
              title: "K9 Dog Unit",
              description:
                "Highly trained security dogs and handlers for patrol, detection, and crowd control.",
              link: "/services/k9",
              image: "/images/k9.jpg",
            },
            {
              title: "Alarm & CCTV Systems",
              description:
                "Smart surveillance systems with rapid response and 24/7 monitoring.",
              link: "/services/alarm-cctv",
              image: "/images/cctv.jpg",
            },
            {
              title: "VIP Escort",
              description:
                "Executive protection services for dignitaries, executives, and high-value clients.",
              link: "/services/vip",
              image: "/images/escort.jpeg",
            },
            {
              title: "Security Consultancy",
              description:
                "Comprehensive risk assessment, investigations, and training solutions.",
              link: "/services/consultancy",
              image: "/images/consultant.jpg",
            },
            {
              title: "Cash In Transit (CIT)",
              description:
                "Secure transport of cash and valuables with armored vehicles and professional escorts.",
              link: "/services/cit",
              image: "/images/cit.jpg",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ⚫ Why Choose Us */}
      <section className="py-20 px-6 md:px-16 bg-black text-white">
        <SectionHeader title="Why Choose Hawkeye 11" textColor="text-white" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {[
        "10+ Years of Proven Experience",
        "PSRA Licensed & Certified",
        "Professional, Vetted Personnel",
        "Nationwide Coverage",
        "Technology-Driven Operations",
      ].map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white/10 backdrop-blur-sm border border-gold/30 p-6 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-500"
        >
          <p className="font-medium text-base">{point}</p>
        </motion.div>
      ))}

      {/* Accreditation Card */
      <AccreditationCard />
}
              </motion.div>
      </section>

      {/* 🟨 CTA Section */}
      <section className="py-20 px-6 md:px-16 bg-gold text-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-heading font-bold"
        >
          Partner with Kenya’s Most Trusted Security Professionals
        </motion.h2>

        <motion.div
          className="mt-8 flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us
          </a>
          <a
            href="https://wa.me/254765869184"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black text-black px-8 py-3 rounded-md hover:bg-black hover:text-gold transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>
    </main>
  );
}
