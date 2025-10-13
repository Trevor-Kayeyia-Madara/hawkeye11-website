export default function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="p-6 rounded-lg bg-white dark:bg-[#0b0b0b] shadow border">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded bg-yellow-600 flex items-center justify-center text-white font-bold">S</div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </article>
  );
}
