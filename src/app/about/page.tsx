"use client";

import { motion } from "framer-motion";
import { Shield, Target, HeartHandshake, Users } from "lucide-react";
import { Button } from "../components/Button";

export default function AboutPage() {
  return (
    <main className="bg-[#0B0B0B] text-white overflow-hidden font-sans">
      {/* HERO / INTRO */}
      <section className="relative py-36 text-center bg-[#0B0B0B]">
        <div className="absolute inset-0 bg-[url('/security-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-[#0B0B0B]/85"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#D4AF37] leading-tight">
            About Hawkeye 11
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6 max-w-3xl mx-auto font-sans">
            Professional. Disciplined. Reliable.  
            Hawkeye 11 Company Limited has redefined private security in Kenya
            through innovation, integrity, and over a decade of proven excellence.
          </p>
        </motion.div>
      </section>

      {/* COMPANY OVERVIEW */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 text-center px-6 bg-[#0B0B0B]"
      >
        <h2 className="text-4xl font-serif font-bold mb-10 text-[#D4AF37]">
          Company Overview
        </h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-white/80 space-y-6">
          <p>
            <span className="font-semibold text-white">
              Hawkeye 11 Company Limited
            </span>{" "}
            is a licensed and registered private security firm established in
            2013 issued by the Private Security Regulation Authority (PSRA), we are
            also proud members of the{" "}
            <span className="font-semibold text-white">
              Protective and Safety Association of Kenya (PROSAK)
            </span>.
          </p>
          <p>
            For over a decade, Hawkeye 11 has earned its position as one of
            Kenya’s most reliable and professional security providers, serving
            both corporate and private clients nationwide. Our philosophy is
            rooted in{" "}
            <span className="text-[#D4AF37] font-semibold">
              integrity, discipline, and innovation
            </span>
            — supported by continuous training, cutting-edge technology, and a
            highly skilled workforce.
          </p>
        </div>
      </motion.section>

      {/* VISION & MISSION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#111111] px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Target className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-sans">
              To be a leading force in private security — recognized for
              professionalism, innovation, and disciplined service delivery
              across Kenya and beyond.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Shield className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-sans">
              To mitigate security threats by delivering cost-effective,
              reliable, and responsive security services that safeguard people,
              property, and peace of mind.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CORE VALUES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#0B0B0B] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-12 text-[#D4AF37]">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: HeartHandshake,
              title: "Integrity",
              desc: "We operate with honesty, transparency, and moral discipline in every engagement.",
            },
            {
              icon: Users,
              title: "Teamwork",
              desc: "Collaboration and trust define our strength, enabling us to deliver consistently high standards.",
            },
            {
              icon: Shield,
              title: "Professionalism",
              desc: "Our staff embody discipline, accountability, and unwavering commitment to duty.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="border border-[#1A1A1A] rounded-3xl p-8 hover:border-[#D4AF37] transition"
            >
              <Icon className="w-12 h-12 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-xl font-serif font-semibold text-white mb-3 tracking-tight">
                {title}
              </h3>
              <p className="text-white/70 font-sans">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* OBJECTIVES */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#111111] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-12 text-[#D4AF37]">
          Our Objectives
        </h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-lg text-white/80 font-sans leading-relaxed text-left md:text-center">
          <li>• Build and maintain close, trust-based relationships with our clients.</li>
          <li>• Continuously train and upskill our personnel in modern vigilance practices.</li>
          <li>• Monitor and advise clients on emerging security threats and trends.</li>
          <li>• Share vital security awareness and preventive strategies with stakeholders.</li>
          <li>• Collaborate with national security agencies to enhance public safety.</li>
        </ul>
        <div className="mt-12">
          <Button variant="solid" href="/services">
            Explore Our Services
          </Button>
        </div>
      </motion.section>
    </main>
  );
}
