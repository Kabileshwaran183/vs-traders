import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const BookNowNew = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="min-w-screen  relative">
                
                    <img className="w-full md:max-h-[180px] object-cover" src="/booknow2.gif" />
                    <div className="left-[31%] top-1/3 md:top-1/4 absolute h-[30%] md:h-[50%] w-[22%]  ">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="h-full w-full">
                    </button>
                    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </section>
        </>
    )
}

const SpringModal = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
        name: "", number: "", email: "", date: "", location: "", message: ""
    });

    const formFields = [
        { label: "Name", name: "name", type: "text" },
        { label: "Mobile Number", name: "number", type: "tel" },
        { label: "Email", name: "email", type: "email" },
        { label: "Date", name: "date", type: "date" },
        { label: "Location", name: "location", type: "text" }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendWhatsAppMessage = () => {
        if (Object.values(formData).some(value => value.trim() === "")) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        const url = `https://wa.me/919600417117?text=${encodeURIComponent(
            `📝 *Wedding Inquiry*\n\n${Object.entries(formData).map(([key, value]) => `🔹 ${key.replace(/([A-Z])/g, ' $1')}: ${value}`).join("\n")}`
        )}`;
        window.open(url, "_blank");
    };
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    style={{width:"100%"}}
                    className="bg-slate-900/20  backdrop-blur  fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "45deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        style={{}}
                        className="bg-gradient-to-br rounded-[27px] from-teal-600 to-teal-400 text-white p-2 md:p-6 w-[90%] shadow-xl cursor-default relative"
                    >
                        
                        <div className="relative z-10">
                            
                        <section className="bg-white text-black rounded-[27px] py-5 md:py-10 shadow-md md:px-20 px-6 " id="Contact">
            <h2 className="text-center text-xl md:text-2xl font-bold text-gray-700 mb-5">Book Our Services</h2>
            <p className="text-[8px] md:text-[12px] text-gray-400 mb-6">"Every love story is unique, and so is the way we capture it. Let us turn your most precious moments into timeless memories with our expert wedding photography services. Whether it’s your pre-wedding shoot, wedding day, or post-wedding celebrations, we ensure every emotion, smile, and heartfelt moment is beautifully preserved. Book us today and let’s create magic together!"</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {formFields.map(({ label, name, type }) => (
                    <div key={name} className="mb-2 md:mb-4 text-base md:text-lg">
                        <label className="block text-gray-700 font-semibold mb-2">{label}:</label>
                        <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full p-1 border bg-gray-100 rounded focus:outline-none focus:border-gray-500"
                        />
                    </div>
                ))}
                
                <div className="mb-2 md:mb-4 text-base md:text-lg">
                    <label className="block text-gray-700 font-semibold mb-2">Select Event:</label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full  p-1 border bg-gray-100 rounded focus:outline-none focus:border-gray-500"
                    >
                        <option value="" disabled>Select Event</option>
                        <option value="New Mexico">Wedding</option>
                        <option value="Missouri">Reception</option>
                        <option value="Texas">Pre wedding</option>
                        <option value="Texas">Engagement</option>
                        <option value="Texas">Maapillai Alaipu</option>
                        <option value="Texas">Couple portrait session</option>
                        <option value="Texas">Others</option>
                    </select>
                </div>
            </div>

            {/* Message Box */}
            <div className="mb-4 mt-4 text-base md:text-lg">
                <label className="block text-gray-700 font-semibold mb-2">Tell us more...</label>
                <textarea
                    name="message"
                    className="w-full p-3 border optional: bg-gray-100 rounded focus:outline-none focus:border-gray-500"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                />
            </div>

            {/* Send Inquiry Button */}
            <div className="text-center text-lg">
                <button
                    className="bg-green-500 text-white font-bold px-6 py-3 mb-5 rounded-full hover:scale-105 transition-transform"
                    onClick={sendWhatsAppMessage}
                >
                    Send Inquiry
                </button>
            </div>
        </section>
                            <div className="flex justify-center gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent w-full  hover:bg-[rgb(206,142,59)] transition-colors text-white font-semibold text-lg md:text-3xl py-2 rounded"
                                >
                                    Go back 
                                </button>
                                
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
export default BookNowNew;