export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle ? <p className="text-sm text-muted-foreground mt-1">{subtitle}</p> : null}
      </div>
      <div className="flex-1 ml-6 h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent" />
    </div>
  );
}
