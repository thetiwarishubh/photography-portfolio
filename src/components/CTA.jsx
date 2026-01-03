import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <section className="bg-[#C89B3C] text-[#0F0F0F] py-12 px-6 text-center rounded-lg max-w-6xl mx-auto my-16 shadow-lg">
      <h2 className="text-3xl font-bold mb-4">
        Ready to capture your moments?
      </h2>
      <p className="mb-6">
        Contact us now to book your session and create memories that last
        forever.
      </p>
      <button
        onClick={handleClick}
        className="bg-[#0F0F0F] cursor-pointer text-[#C89B3C] font-semibold px-8 py-3 rounded hover:bg-[#1C1C1C] transition"
      >
        Book Now
      </button>
    </section>
  );
};

export default CTA;
