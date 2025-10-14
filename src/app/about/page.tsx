/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
const M: any = motion;

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-white dark:bg-[#070707] text-black dark:text-white">
			<main className="max-w-5xl mx-auto px-6 py-12">
				<M.section className="min-h-[30vh] flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
					<div className="mx-auto text-center">
						<h1 className="text-4xl sm:text-5xl font-extrabold">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">About Hawkeye 11</span>
						</h1>
						<p className="mt-4 text-slate-600 dark:text-slate-300">Professional security services combining people, process and tech.</p>
					</div>
				</M.section>

				<section className="mt-12">
					<SectionHeader title="Company Overview" subtitle="Who we are" />
					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
						<div>
							<p className="text-slate-700 dark:text-slate-300">
								Hawkeye 11 provides a range of security services across commercial and residential sectors. We combine
								locally recruited teams with modern surveillance and monitoring to deliver reliable protection at scale.
							</p>
							<ul className="mt-4 space-y-2 text-sm text-muted-foreground">
								<li>• Nationwide coverage with rapid response teams</li>
								<li>• Certified and continuously trained personnel</li>
								<li>• Integrated technology and incident reporting</li>
							</ul>
						</div>
						<div className="rounded-lg overflow-hidden">
							<div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
								<span className="text-sm text-slate-500 dark:text-slate-300">[Office / Team Photo Placeholder]</span>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-12">
					<SectionHeader title="Vision, Mission & Core Values" subtitle="Our guiding principles" />
					<div className="mt-4 border-t border-yellow-400/40 pt-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="p-4 rounded bg-white dark:bg-[#0f0f0f]">
								<h4 className="font-semibold">Vision</h4>
								<p className="text-sm text-muted-foreground mt-2">To be the trusted security partner for communities and businesses.</p>
							</div>
							<div className="p-4 rounded bg-white dark:bg-[#0f0f0f]">
								<h4 className="font-semibold">Mission</h4>
								<p className="text-sm text-muted-foreground mt-2">Deliver disciplined, technology-enabled security solutions that protect people and assets.</p>
							</div>
							<div className="p-4 rounded bg-white dark:bg-[#0f0f0f]">
								<h4 className="font-semibold">Core Values</h4>
								<ul className="mt-2 text-sm text-muted-foreground space-y-1">
									<li>Integrity</li>
									<li>Professionalism</li>
									<li>Responsiveness</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-12">
					<SectionHeader title="Core Objectives" />
					<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
						{[
							{ title: "Reduce Risk", desc: "Proactive detection and deterrence." },
							{ title: "Fast Response", desc: "Local teams ready 24/7." },
							{ title: "Client Focus", desc: "Tailored plans and regular reporting." },
						].map((o) => (
							<div key={o.title} className="p-6 rounded-lg bg-white dark:bg-[#0f0f0f] shadow-sm">
								<h4 className="font-semibold">{o.title}</h4>
								<p className="text-sm text-muted-foreground mt-2">{o.desc}</p>
							</div>
						))}
					</div>
				</section>

				<section className="mt-12">
					<SectionHeader title="Licensing & Memberships" />
					<div className="mt-6 flex flex-wrap gap-4">
						{["Private Security Authority", "Industry Association", "ISO:9001"].map((b) => (
							<div key={b} className="p-4 rounded-lg border border-yellow-400/30 bg-white dark:bg-[#0f0f0f] shadow-md">
								<div className="px-4 py-3 rounded-md border-2 border-yellow-400/30 hover:shadow-[0_0_18px_rgba(250,204,21,0.25)] transition-shadow">
									<div className="text-sm font-semibold">{b}</div>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="mt-12">
					<SectionHeader title="Timeline" subtitle="2013 — Present" />
					<div className="mt-6">
						<M.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
							<div className="p-4 rounded-lg bg-white dark:bg-[#0f0f0f] border-l-4 border-yellow-400/60">
								<div className="text-sm font-semibold">2013 — 2018</div>
								<div className="text-sm text-muted-foreground mt-1">Company founded and regional expansion; core services established.</div>
							</div>
							<div className="p-4 rounded-lg bg-white dark:bg-[#0f0f0f] border-l-4 border-yellow-400/60">
								<div className="text-sm font-semibold">2019 — 2022</div>
								<div className="text-sm text-muted-foreground mt-1">Technology integration and national contracts awarded.</div>
							</div>
							<div className="p-4 rounded-lg bg-white dark:bg-[#0f0f0f] border-l-4 border-yellow-400/60">
								<div className="text-sm font-semibold">2023 — Present</div>
								<div className="text-sm text-muted-foreground mt-1">Service refinement, training programs, and community outreach.</div>
							</div>
						</M.div>
					</div>
				</section>
			</main>
		</div>
	);
}

