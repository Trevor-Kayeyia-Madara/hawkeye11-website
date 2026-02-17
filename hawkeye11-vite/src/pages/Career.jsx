import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

export default function CareersPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/careers-banner.jpg')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">
            Join Our Team
          </h1>
          <p className="text-gray-200 text-lg">
            Build your career with one of Kenya’s most trusted security service providers.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Why Work With Hawkeye 11" />
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-center mt-8 animate-fadeUp">
          <p>
            At <strong>Hawkeye 11 Company Limited</strong>, we believe in professionalism,
            discipline, and continuous growth. We empower our employees with the right tools,
            training, and environment to thrive while upholding our commitment to excellence and
            client safety.
          </p>
          <p className="mt-4">
            From security officers and K9 handlers to control room operators and managers, we offer
            meaningful roles that make an impact in protecting lives and assets across Kenya.
          </p>
        </div>
      </section>

      {/* Job Advertisement */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Current Openings" />
        <div className="mt-12 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-sm border-l-4 border-amber-400 p-8 animate-fadeUp">
          <h3 className="text-2xl font-semibold text-amber-500 mb-4">
            Security Officers
          </h3>
          <p className="text-gray-700 mb-6">
            We are seeking disciplined, physically fit, and responsible individuals to join our team
            as <strong>Security Officers</strong>. Applicants must demonstrate professionalism,
            honesty, and readiness to serve in diverse environments.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Must be between 25–35 years old</li>
            <li>Have a valid Certificate of Good Conduct</li>
            <li>Completed basic security training (PROSAK/KPSA/PSRA certified)</li>
            <li>Physically fit with excellent communication skills</li>
            <li>Ready to work flexible shifts</li>
          </ul>

          <p className="text-gray-700">
            Successful candidates will undergo vetting, orientation, and deployment training at our
            training facility. Applications can be submitted via email or delivered to our office.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <Button
              text="Apply Now"
              href="#apply"
              variant="black"
              size="md"
            />
            <Button
              text="Chat on WhatsApp"
              href="https://wa.me/254765869184"
              variant="white"
              size="md"
              newTab
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Application Form" />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-3xl mx-auto mt-12 space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fadeUp"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-amber-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-amber-400"
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-amber-400"
          />

          <input
            type="text"
            placeholder="Position Applying For"
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-amber-400"
          />

          <textarea
            rows={5}
            placeholder="Briefly describe your experience..."
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-amber-400"
          ></textarea>

          <div className="flex justify-center md:justify-start">
            <Button text="Submit Application" variant="black" size="md" />
          </div>
        </form>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 bg-amber-400 text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold animate-fadeUp">
          Become a Part of the Hawkeye 11 Family
        </h2>

        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <Button text="Apply Now" href="#apply" variant="black" size="md" />
          <Button
            text="Chat HR on WhatsApp"
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
