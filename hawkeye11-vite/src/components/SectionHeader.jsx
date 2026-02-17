export default function SectionHeader({ title, textColor }) {
  return (
    <div className={`text-center ${textColor || "text-black"} opacity-0 animate-fade-in`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold">{title}</h2>
      <div className="mt-3 mx-auto w-20 h-1 bg-gold rounded-full" />
    </div>
  );
}
