import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "", number: "", email: "", city: "", date: "", location: "",
        venue: "", time: "", crowdStrength: "", state: "", message: ""
    });

    const formFields = [
        { label: "Name", name: "name", type: "text" },
        { label: "Mobile Number", name: "number", type: "tel" },
        { label: "Email", name: "email", type: "email" },
        { label: "City", name: "city", type: "text" },
        { label: "Date", name: "date", type: "date" },
        { label: "Location", name: "location", type: "text" },
        { label: "Venue", name: "venue", type: "text" },
        { label: "Time", name: "time", type: "time" },
        { label: "Crowd Strength", name: "crowdStrength", type: "number" }
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
        <section className="bg-white  py-36 rounded-lg shadow-md md:px-36 px-6 " id="Contact">
            <h2 className="text-center text-2xl font-bold text-gray-700 mb-5">Book Our Services</h2>
            <p className="text-[12px] text-gray-500 mb-6">"Every love story is unique, and so is the way we capture it. Let us turn your most precious moments into timeless memories with our expert wedding photography services. Whether it’s your pre-wedding shoot, wedding day, or post-wedding celebrations, we ensure every emotion, smile, and heartfelt moment is beautifully preserved. Book us today and let’s create magic together!"</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {formFields.map(({ label, name, type }) => (
                    <div key={name} className="mb-4 text-lg">
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
                
                <div className="mb-4 text-lg">
                    <label className="block text-gray-700 font-semibold mb-2">Select Event:</label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:border-gray-500"
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
            <div className="mb-4 text-lg">
                <label className="block text-gray-700 font-semibold mb-2">Tell us more about the couple and the wedding:</label>
                <textarea
                    name="message"
                    className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:border-gray-500"
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
    );
};

export default Contact;
