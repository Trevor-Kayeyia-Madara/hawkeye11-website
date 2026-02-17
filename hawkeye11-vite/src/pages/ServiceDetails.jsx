import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="relative z-10 px-6 max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-gray-200 text-lg">
              {service.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Overview" />
        <div className="mt-10 max-w-4xl mx-auto text-gray-700 space-y-6">
          {service.overview.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 100}>
              <p>{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Key Features" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {service.features.map((feature, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md border-l-4 border-yellow-500 transition-all duration-300">
                {feature}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 bg-yellow-500 text-black text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold">
            {service.cta}
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
