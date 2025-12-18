import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hello, I want to book a photography-videography session.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <span className="whatsapp-ring"></span>
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
