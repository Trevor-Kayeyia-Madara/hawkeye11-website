import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";

export default function Services() {
  const services = [
    {
      title: "Manned Guarding",
      description:
        "Trained and vetted guards providing 24/7 protection for residential, corporate, and institutional clients.",
      image: "/images/guarding.jpg",
      link: "/services/guarding",
    },
    {
      title: "K9 Dog Unit",
      description:
        "Highly trained security dogs and certified handlers delivering effective patrol and detection.",
      image: "/images/k9.jpg",
      link: "/services/k9",
    },
    {
      title: "Alarm & CCTV Systems",
      description:
        "Advanced surveillance systems with 24/7 monitoring and rapid response integration.",
      image: "/images/cctv.jpg",
      link: "/services/alarm-cctv",
    },
    {
      title: "VIP Escort",
      description:
        "Discreet escort services ensuring safety of executives and dignitaries.",
      image: "/images/vip.jpg",
      link: "/services/vip",
    },
    {
      title: "Security Consultancy",
      description:
        "Customized risk assessments and training for comprehensive safety strategies.",
      image: "/images/consultancy.jpg",
      link: "/services/consultancy",
    },
    {
      title: "Cash In Transit (CIT)",
      description:
        "Secure transportation of cash and valuables using armored vehicles.",
      image: "/images/cit.jpg",
      link: "/services/cit",
    },
  ];

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 px-6 max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Security Services
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-gray-200 text-lg">
              Professional Security Solutions Tailored to Your Needs
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="What We Offer" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 bg-yellow-500 text-black text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold">
            Need a Custom Security Solution?
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
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
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
