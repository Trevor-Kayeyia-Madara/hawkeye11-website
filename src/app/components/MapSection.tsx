export default function MapSection() {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="h-48 w-full bg-gradient-to-br from-slate-900 via-slate-700 to-black relative flex items-center">
        <div className="p-6 text-white">
          <div className="font-semibold text-lg">Nationwide Coverage</div>
          <div className="text-sm mt-1">Nairobi • Mombasa • Kisumu • Nakuru • Eldoret</div>
        </div>
        <svg className="absolute right-4 bottom-4 w-36 h-36 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="3" fill="#FFD700" />
          <circle cx="60" cy="60" r="3" fill="#FFD700" />
        </svg>
      </div>
    </div>
  );
}
