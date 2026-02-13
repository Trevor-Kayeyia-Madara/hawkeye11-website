"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.namedItem("name")?.value || "";
    const email = form.elements.namedItem("email")?.value || "";
    const subject = form.elements.namedItem("subject")?.value || "";
    const message = form.elements.namedItem("message")?.value || "";

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailSubject = encodeURIComponent(subject || "New Message from Website");

    const mailto = `mailto:hawkeye11coltd@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hawkeye11coltd@gmail.com&su=${mailSubject}&body=${mailBody}`;

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
    }
  };

  const handleSubmitManually = () => {
    const form = document.querySelector("form");

    const name = form?.elements.namedItem("name")?.value || "";
    const email = form?.elements.namedItem("email")?.value || "";
    const subject = form?.elements.namedItem("subject")?.value || "";
    const message = form?.elements.namedItem("message")?.value || "";

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailSubject = encodeURIComponent(subject || "New Message from Website");

    const mailto = `mailto:hawkeye11coltd@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hawkeye11coltd@gmail.com&su=${mailSubject}&body=${mailBody}`;

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
      form?.reset();
    } catch {
      setStatus("error");
      window.location.href = mailto;
    }
  };

  return (
    <main className="bg-white text-black">
      {/* Your JSX remains exactly the same below */}
    </main>
  );
}
