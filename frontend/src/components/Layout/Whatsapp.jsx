import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    const phoneNumber = "18325884481"; // Replace with your actual number (no + sign)
    const message = "Hello! I saw your portfolio and would like to connect.";
  
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-green-500 hover:underline"
      >
        <FaWhatsapp size={34} className="transition-transform duration-300 hover:scale-125" />
       
      </a>
    );
  };

export default Whatsapp;