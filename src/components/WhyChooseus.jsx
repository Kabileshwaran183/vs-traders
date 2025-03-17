import { FaUserTie, FaCamera, FaPhotoVideo, FaLightbulb, FaHandshake, FaPaintBrush } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaUserTie size={50} className="text-white" />,
            title: "Trained Professional    ",
        },
        {
            icon: <FaPaintBrush size={50} className="text-white" />,
            title: "Expert Guidance",
        },
        {
            icon: <FaSitemap size={50} className="text-white" />,
            title: "Technical site evaluation",
        },
        {
            icon: <FaLightbulb size={40} className="text-white" />,
            title: "CREATIVE CONCEPTS",
        },
        {
            icon: <FaHandshake size={50} className="text-white" />,
            title: "CUSTOMER SATISFACTION",
        },
        {
            icon: <FaHandshake size={50} className="text-white" />,
            title: "Trusted Reputation –",
        },
    ];

    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 py-12 text-center bg-white ">
                <h2 className="text-lg md:text-3xl font-bold text-gray-800 mb-10">WHY CHOOSE US?</h2>
                <div className=" grid grid-cols-3 md:grid-cols-6 gap-8 ">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-20 md:w-24 h-20 md:h-24 bg-teal-400 flex items-center justify-center rounded-full shadow-md px-6">
                                {feature.icon}
                            </div>
                            <p className="mt-3 text-xs md:text-lg font-semibold text-gray-800">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default WhyChooseUs;
