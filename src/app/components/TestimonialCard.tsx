export default function TestimonialCard({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <blockquote className="p-5 rounded-lg bg-white dark:bg-[#0b0b0b] border shadow-sm">
      <p className="text-sm">“{quote}”</p>
      <footer className="mt-3 text-sm font-medium">{name} <span className="text-muted-foreground">— {role}</span></footer>
    </blockquote>
  );
}
