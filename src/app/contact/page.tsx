import SectionHeader from "../components/SectionHeader";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <SectionHeader title="Contact Us" subtitle="Reach out for inquiries or a quote" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">Office</h4>
            <p className="text-sm text-muted-foreground mt-2">Jeupe House, next to Capital Shopping Mall, Utawala, Nairobi</p>
            <p className="mt-4 text-sm">Phone: +254 721 822 869 / 765 869 184</p>
            <p className="mt-2 text-sm">Email: info@hawkeye11companylimited.com</p>
            <div className="mt-6 h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">[Google Map Embed Placeholder]</div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
