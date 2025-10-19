"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hawkeye11coltd@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Could not copy email. Please copy manually.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const handleSubmitManually = () => {
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=hawkeye11coltd@gmail.com";
  window.open(gmailLink, "_blank");
};

    const mailSubject = encodeURIComponent(subject || "New Message from Website");
    const mailto = `mailto:hawkeye11coltd@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hawkeye11coltd@gmail.com&su=${mailSubject}&body=${mailBody}`;

    try {
      // ✅ detect if Gmail web should be opened (for Chrome or Android)
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const prefersGmail =
        navigator.userAgent.includes("Chrome") || navigator.userAgent.includes("Android");

      if (prefersGmail || isMobile) {
        window.open(gmailLink, "_blank");
      } else {
        window.location.href = mailto;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  function handleSubmitManually() {
    const form = document.querySelector("form") as HTMLFormElement | null;

    const name = (form?.elements.namedItem("name") as HTMLInputElement | null)?.value ?? "";
    const email = (form?.elements.namedItem("email") as HTMLInputElement | null)?.value ?? "";
    const subject = (form?.elements.namedItem("subject") as HTMLInputElement | null)?.value ?? "";
    const message = (form?.elements.namedItem("message") as HTMLTextAreaElement | null)?.value ?? "";

    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailSubject = encodeURIComponent(subject || "New Message from Website");
    const mailto = `mailto:hawkeye11coltd@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hawkeye11coltd@gmail.com&su=${mailSubject}&body=${mailBody}`;

    try {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const prefersGmail = navigator.userAgent.includes("Chrome") || navigator.userAgent.includes("Android");

      if (prefersGmail || isMobile) {
        window.open(gmailLink, "_blank");
      } else {
        // fall back to the user's default mail client
        window.location.href = mailto;
      }

      setStatus("success");
      form?.reset();
    } catch {
      setStatus("error");
      // last-resort fallback
      window.location.href = mailto;
    }
  }

  return (
    <main className="bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/contact-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>
          <p className="text-gray-200 text-lg">
            Let’s discuss how Hawkeye 11 can safeguard your people, assets, and operations.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Reach Us" />
        <div className="grid md:grid-cols-3 gap-10 mt-12 text-center md:text-left">
          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold"
          >
            <Phone className="mx-auto md:mx-0 text-gold mb-3" />
            <h3 className="font-semibold text-lg mb-2">Call / WhatsApp</h3>
            <p className="text-gray-700">+254 765 869 184</p>
            <a
              href="https://wa.me/254765869184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-gold hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold"
          >
            <Mail className="mx-auto md:mx-0 text-gold mb-3" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p
              className="text-gray-700 cursor-pointer hover:text-gold transition"
              onClick={handleCopyEmail}
            >
              hawkeye11coltd@gmail.com {copied && <span className="text-green-600">✔ Copied</span>}
            </p>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold"
          >
            <MapPin className="mx-auto md:mx-0 text-gold mb-3" />
            <h3 className="font-semibold text-lg mb-2">Office Location</h3>
            <p className="text-gray-700">
              Nairobi, Kenya — Near Wilson Airport<br />
              (Head Office)
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Send a Message" />
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message..."
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
          ></textarea>

          <Button text="Send Message" variant="black" size="md" className="w-full md:w-auto" onClick={() => handleSubmitManually()} />

          {/* FEEDBACK */}
          {status === "success" && (
            <p className="text-green-600 mt-4 animate-fadeIn">
              ✅ Your mail client or Gmail has opened — please confirm and send.
            </p>
          )}
          {status === "error" && (
            <div className="mt-4 p-4 border border-red-300 rounded-lg bg-red-50">
              <p className="text-red-600 mb-2">
                ⚠️ Could not open email client. You can reach us directly:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:hawkeye11coltd@gmail.com"
                  className="underline text-gold font-semibold"
                >
                  hawkeye11coltd@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-sm px-3 py-1 border border-gray-400 rounded-md hover:bg-gray-100 transition"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 px-6 md:px-16 bg-black text-white text-center">
        <SectionHeader title="Find Us" textColor="text-white" />
        <div className="mt-10 max-w-5xl mx-auto border-4 border-gold rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815813826807!2d36.97053067318379!3d-1.284439835620368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6d88a269ec31%3A0x7d90ea5716ce440a!2sHawkeye%2011%20Company%20Limited!5e0!3m2!1sen!2ske!4v1760888789410!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* SOCIALS */}
        <div className="mt-10 flex justify-center gap-6 text-gold">
          <Link href="https://wa.me/254765869184" target="_blank">
            <MessageCircle className="w-6 h-6 hover:text-white transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/11.hawkeye/" target="_blank">
            <Instagram className="w-6 h-6 hover:text-white transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/martin-musa-21545a1a6" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
          </Link>
        </div>
      </section>
    </main>
  );
}
