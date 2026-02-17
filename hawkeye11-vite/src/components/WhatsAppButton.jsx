import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/254765869184"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="rounded-full shadow-lg flex items-center justify-center w-14 h-14 bg-[#25D366] text-white hover:bg-black hover:text-amber-400 transition-all duration-300"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
