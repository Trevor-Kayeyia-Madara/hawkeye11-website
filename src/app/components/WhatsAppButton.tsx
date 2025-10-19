import { FaWhatsapp } from 'react-icons/fa'; // Requires installing react-icons (npm install react-icons)

type WhatsAppButtonProps = {
  phoneNumber: string;
  message: string;
};

const WhatsAppButton = ({ phoneNumber, message }: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

// Example usage and export with default props
const DefaultWhatsAppButton = () => (
  <WhatsAppButton 
    phoneNumber="YOUR_PHONE_NUMBER" // e.g., 1234567890123
    message="Hello! I saw your website and would like to know more."
  />
);

export default DefaultWhatsAppButton;