"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hawkeye11coltd@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Could not copy email. Please copy manually: hawkeye11coltd@gmail.com");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      alert("Please fill all required fields.");
      return;
    }

    const mailtoLink = `mailto:hawkeye11coltd@gmail.com?subject=${encodeURIComponent(
      subject || "New Message from Website"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    try {
      const win = window.open(mailtoLink, "_blank");
      if (win) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Mailto failed:", err);
      setStatus("error");
    }
  };

  return (
    <main className="bg-white text-black min-h-screen">
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

          <Button text="Send Message" variant="black" size="md" className="w-full md:w-auto" />

          {/* Success or Error Feedback */}
          {status === "success" && (
            <p className="text-green-600 mt-4 animate-fadeIn">
              ✅ Mail app opened — please confirm and send your message.
            </p>
          )}

          {status === "error" && (
            <div className="mt-4 p-4 border border-red-300 rounded-lg bg-red-50">
              <p className="text-red-600 mb-2">
                ⚠️ Could not open mail app. You can still contact us directly:
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
    </main>
  );
}
