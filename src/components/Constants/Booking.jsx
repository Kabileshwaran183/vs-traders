import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Booking() {
    return (
        <div className="bg-teal-600 text-white py-4 md:py-10 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
            <div className=" md:mb-0">
                <h2 className="text-xl md:text-3xl font-semibold">BOOK US NOW</h2>
                <p className="mt-2 text-sm md:text-base">
                    Get in touch with us and let us make your special day an event of your lifetime using our digital eye.
                </p>
            </div>

            
            <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-xl md:text-2xl" />
                <a href="tel:+919840767566" className="text-lg md:text-lg mt-3 font-semibold">
                    +91 9840767566
                </a>
            </div>
        </div>
    );
}
