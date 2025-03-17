import { useState } from "react";
import { Parallax } from "react-parallax";

const SubscribeSection = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [result, setResult] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "e52bab3c-6d7d-46a9-b6bc-08ce3470ec20");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            setEmail("");
            setPhone("");
            event.target.reset();
            setShowPopup(true);
        } else {
            console.log("Error:", data);
            setResult(data.message);
        }
    };

    return (
        <Parallax bgImage="/award/testmoni.jpg" strength={400} className="py-10">
            <section className="">
                <div className="py-5  text-center w-full ">
                    <div className="">
                        <h2 className="text-2xl font-semibold text-white">Subscribe</h2>
                        <div className="w-12 border-b-2 border-teal-500 mx-auto my-2"></div>
                        <p className="text-gray-50 text-2xl">Subscribe to our newsletter to stay updated every moment</p>
                    </div>


                    <form onSubmit={onSubmit} className="mt-5 flex md:flex-row flex-col  justify-start md:justify-center items-center gap-8 md:space-x-14 space-x-0 text-white">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 w-80 border-b-2 border-gray-300 outline-none focus:border-teal-400 bg-transparent text-lg text-white"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="px-4 py-2 w-80 border-b-2 border-gray-300 outline-none text-white focus:border-teal-400 bg-transparent text-lg"
                        />
                        <button type="submit" className="bg-teal-400 text-white px-5 py-2 rounded-lg hover:bg-teal-700">
                            Submit
                        </button>
                    </form>

                    {showPopup && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-bold text-green-600">Success!</h3>
                                <p className="text-gray-700 mt-2">Your form has been submitted successfully.</p>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </section>
        </Parallax>

    );
};

export default SubscribeSection;
