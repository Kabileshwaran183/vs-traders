
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
const WhatsAppButton = () => {
    return (
        <button onClick={scrollToTop}>
            <a
                href="https://wa.me/your-number"
                target="_blank"

                className="fixed bottom-8 left-9 hover:bg-green-500 bg-white hover:text-white p-4 rounded-full shadow-lg text-green-400 transition duration-300 flex items-center justify-center"
                style={{ width: "40px", height: "40px" }}
            >
                <FaWhatsapp size={40} />
            </a>
        </button>
       
    );
};

export default WhatsAppButton;
