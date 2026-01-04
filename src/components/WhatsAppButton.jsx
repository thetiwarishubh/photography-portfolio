import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919905170994";

  const message = `
This message is auto-generated from the website,
Please do not edit this message
  
-----------------------------------------------------
Hello DS Photography
I would like to book a photography & videography session.
Please share packages and availability.
-----------------------------------------------------

Source: Website
Time: ${new Date().toLocaleString()};
  `;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");

  return (
    <a
      href={whatsappURL}
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
