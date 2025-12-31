import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918298246846";
  const message = `Hello,
I’d like to book a photography & videography session with DS Photography.
Please share the details.
Thank you.`;

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
