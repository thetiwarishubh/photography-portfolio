import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hello, I want to book a photography session.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50 
        bg-green-500 text-white 
        p-4 rounded-full 
        shadow-lg 
        animate-pulse
        hover:bg-green-600 
        hover:scale-110 
        transition-transform duration-300
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
