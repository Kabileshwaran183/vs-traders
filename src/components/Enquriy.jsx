import { useState } from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleWhatsAppSend = (e) => {
        e.preventDefault(); // 

        const { name, email, phone, message } = formData;
        const phoneNumber = "919600417117"; // 
        const whatsappMessage = `Hello!%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="bg-white">
            <div className="container mx-auto p-6 bg-white ">
                <div className="flex flex-col md:flex-row w-full h-full justify-center">

                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-semibold mb-4">Enquiry / Feedback</h2>
                        <form className="space-y-6" onSubmit={handleWhatsAppSend}>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full border-b-2 border-gray-300 outline-none focus:border-teal-400 bg-transparent text-lg"
                                onChange={handleChange}
                                placeholder="Name *"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border-b-2 border-gray-300 outline-none  focus:border-teal-400 bg-transparent text-lg"
                                onChange={handleChange}
                                placeholder="Email *"
                            />
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full border-b-2 border-gray-300 outline-none  focus:border-teal-400 bg-transparent text-lg"
                                onChange={handleChange}
                                placeholder="Phone Number *"
                            />
                            <textarea
                                name="message"
                                required
                                rows="3"
                                className="w-full border-b-2 border-gray-300 outline-none  focus:border-teal-400 bg-transparent text-lg"
                                onChange={handleChange}
                                placeholder="Message *"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-700 transition text-lg font-semibold flex items-center justify-center"
                            >
                                <FaWhatsapp className="mr-2" /> Submit
                            </button>
                        </form>
                    </div>


                    <div className="w-full md:w-1/2 p-4 flex flex-col">

                        <div className="text-left">
                            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                            <div className="space-y-3">
                                <p className="flex items-center text-xl text-gray-700 border-b-2 pb-2">
                                    <FaPhone className="text-teal-500 mr-2" /> +91 41518 451848
                                </p>
                                <p className="flex items-center text-xl text-gray-700 border-b-2 pb-2">
                                    <FaPhone className="text-teal-500 mr-2" /> +91 15478 55565
                                </p>
                                <p className="flex items-center text-xl text-gray-700 border-b-2 pb-2">
                                    <FaEnvelope className="text-teal-500 mr-2" /> info@melodyphotography.in
                                </p>
                                <p className="flex items-center text-xl text-gray-700 border-b-2 pb-2">
                                    <FaGlobe className="text-teal-500 mr-2" /> melodyphotography.in
                                </p>
                                <p className="flex items-center text-xl text-gray-700 border-b-2 pb-2">
                                    📍 #110, Dhanalakshmi School Opp, Munichalai Main Road, Karaikudi, Tamil Nadu 630001
                                </p>
                            </div>
                        </div>


                        <div className="mt-5 text-center">
                            <h2 className="text-3xl font-semibold mb-4">Get Social</h2>
                            <div className="flex space-x-4 items-center justify-center">
                                <a href="#" className="bg-gray-100 hover:bg-blue-600 p-3 rounded-full hover:shadow-lg transition duration-500">
                                    <FaFacebookF className="text-blue-600 hover:text-white text-2xl transition duration-500" />
                                </a>
                                <a href="#" className="bg-gray-100 hover:bg-red-600 p-3 rounded-full hover:shadow-lg transition duration-500">
                                    <FaYoutube className="text-red-600 hover:text-white text-2xl transition duration-500" />
                                </a>
                                <a href="#" className="bg-gray-100 hover:bg-pink-700 p-3 rounded-full hover:shadow-lg transition duration-500">
                                    <FaInstagram className="text-pink-700 hover:text-white text-2xl transition duration-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactForm;
