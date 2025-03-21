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
        <section className=" padding-x padding-y">
            <div className="text-center">
                <h2 className="title">WHY CHOOSE US?</h2>
                <div className=" grid grid-cols-3 md:grid-cols-6 lg:px-40 ">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-3 items-center md:p-20 p-4">
                            <div className="w-28 md:w-40 h-28 md:h-40 bg-teal-400 flex items-center justify-center rounded-full shadow-md px-6">
                                {feature.icon}
                            </div>
                            <p className="mt-3 text-base md:text-lg font-semibold text-gray-800">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default WhyChooseUs;
