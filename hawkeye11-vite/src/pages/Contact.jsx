import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import FadeIn from "../components/FadeIn";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const EMAIL = "hawkeye11coltd@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Could not copy email. Please copy manually.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailSubject = encodeURIComponent(
      subject || "New Message from Website"
    );

    const mailto = `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${mailSubject}&body=${mailBody}`;

    try {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const prefersGmail =
        navigator.userAgent.includes("Chrome") ||
        navigator.userAgent.includes("Android");

      if (prefersGmail || isMobile) {
        window.open(gmailLink, "_blank");
      } else {
        window.location.href = mailto;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      window.location.href = mailto;
    }
  };

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white text-center py-20 px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-4 text-gray-300">
            We’re ready to assist you with professional security solutions.
          </p>
        </FadeIn>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-16">

        {/* CONTACT INFO */}
        <div>
          <SectionHeader title="Get in Touch" />

          <div className="mt-10 space-y-6 text-gray-700">

            <div className="flex items-center space-x-4">
              <Mail />
              <div>
                <p className="font-semibold">Email</p>
                <button
                  onClick={handleCopyEmail}
                  className="text-blue-600 hover:underline"
                >
                  {EMAIL}
                </button>
                {copied && (
                  <span className="ml-2 text-green-600 text-sm">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+254765869184" className="hover:underline">
                  +254 765 869 184
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin />
              <div>
                <p className="font-semibold">Location</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://wa.me/254765869184"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <MessageCircle />
              </a>

              <a
                href="#"
                className="hover:text-pink-600"
              >
                <Instagram />
              </a>

              <a
                href="#"
                className="hover:text-blue-700"
              >
                <Linkedin />
              </a>
            </div>

          </div>
        </div>

        {/* CONTACT FORM */}
        <div>
          <SectionHeader title="Send a Message" />

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Send Message
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-2">
                Email client opened successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 mt-2">
                Something went wrong. Please try again.
              </p>
            )}

          </form>
        </div>

      </section>

    </main>
  );
}
