import React, { useState } from "react";

const HeroSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        pincode: "",
        updates: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const whatsappMessage = `Hello, I need assistance with painting services. Here are my details:\n\n
        🔹 Name: ${formData.name}\n
        📧 Email: ${formData.email}\n
        📞 Mobile: ${formData.mobile}\n
        📍 Pincode: ${formData.pincode}\n
        ✅ Updates on WhatsApp: ${formData.updates ? "Yes" : "No"}`;

        
        const whatsappNumber = "91600417117"; 
       
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        
        window.open(whatsappURL, "_blank");
    };

    return (
        <section className=" ">
        <h1 className='title'>Send an Inquiry</h1>
        <div
            className="relative flex flex-col md:flex-row items-center  justify-center bg-gray-100 p-4 md:p-6 lg:p-12"
            style={{
                backgroundImage: "url('/award/hero/hero-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "right",
            
            }}
        >
           
            <div className="w-full md:w-1/3 bg-white shadow-lg p-6 rounded-lg mt-6 md:mt-0">
                <h2 className="text-lg md:text-xl font-semibold mb-4">
                    Get the right assistance for all your painting needs
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name*"
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile*"
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Pincode*"
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="updates"
                            name="updates"
                            checked={formData.updates}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="updates" className="text-sm">
                            Yes, I would like to receive updates on WhatsApp
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                    >
                        Send on WhatsApp
                    </button>
                </form>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
