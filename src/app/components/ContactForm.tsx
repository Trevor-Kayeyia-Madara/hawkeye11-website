"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="p-3 rounded border border-yellow-400" />
      <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="p-3 rounded border border-yellow-400" />
      <input value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} placeholder="Service Interested" className="p-3 rounded border border-yellow-400 sm:col-span-2" />
      <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="p-3 rounded border border-yellow-400 sm:col-span-2" />
      <div className="sm:col-span-2">
        <button className="px-5 py-3 rounded bg-yellow-400 text-black font-semibold">Request a Quote</button>
        {status === 'sending' && <span className="ml-3 text-sm">Sending…</span>}
        {status === 'sent' && <span className="ml-3 text-sm text-green-600">Sent — we will contact you shortly.</span>}
        {status === 'error' && <span className="ml-3 text-sm text-red-600">Error sending. Try again later.</span>}
      </div>
    </form>
  );
}
