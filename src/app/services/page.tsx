"use client";

import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";

export default function ServicesPage() {
  const services = [
    {
      title: "Manned Guarding",
      description:
        "Trained and vetted guards providing 24/7 protection for residential, corporate, and institutional clients. Our officers uphold discipline, vigilance, and professionalism at every post.",
      image: "/images/services/guarding.jpg",
      link: "/services/guarding",
    },
    {
      title: "K9 Dog Unit",
      description:
        "Highly trained security dogs and certified handlers delivering effective patrol, detection, and crowd control solutions for high-risk environments.",
      image: "/images/services/k9.jpg",
      link: "/services/k9",
    },
    {
      title: "Alarm & CCTV Systems",
      description:
        "Advanced surveillance systems with 24/7 monitoring, rapid response integration, and remote access for real-time protection.",
      image: "/images/services/cctv.jpg",
      link: "/services/alarm-cctv",
    },
    {
      title: "VIP Escort",
      description:
        "Discreet, professional escort services ensuring the safety of dignitaries, executives, and high-profile clients throughout transit.",
      image: "/images/services/vip.jpg",
      link: "/services/vip",
    },
    {
      title: "Security Consultancy",
      description:
        "Customized risk assessments, training, and investigations to help organizations develop comprehensive safety strategies.",
      image: "/images/services/consultancy.jpg",
      link: "/services/consultancy",
    },
    {
      title: "Cash In Transit (CIT)",
      description:
        "Secure transportation of cash, documents, and valuables using armored vehicles and trained escorts to guarantee total asset safety.",
      image: "/images/services/cit.jpg",
      link: "/services/cit",
    },
  ];

  return (
    <main className="bg-white text-black">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/services-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Security Services
          </motion.h1>
          <p className="text-gray-200 text-lg">
            Professional Security Solutions Tailored to Your Needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="What We Offer" />
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-16 bg-gold text-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-heading font-bold"
        >
          Need a Custom Security Solution?
        </motion.h2>
        <motion.div
          className="mt-8 flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            text="Request a Quote"
            href="/contact"
            variant="black"
            size="md"
          />
          <Button
            text="Chat on WhatsApp"
            href="https://wa.me/254765869184"
            newTab
            variant="white"
            size="md"
          />
        </motion.div>
      </section>
    </main>
  );
}
