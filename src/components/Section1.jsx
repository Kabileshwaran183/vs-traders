import React from "react";
import { BsArrowRight } from "react-icons/bs";

const interiors = [
    { Name: "Home Interior", img: "/award/home int.jpeg" },
    { Name: "Living Room Interior", img: "/award/living room.jpg" },
    { Name: "Bedroom Interior", img: "/award/bedroom int.jpg" },
    { Name: "Kitchen Interior", img: "/award/kic int.jpeg" }
];

export const Section1 = () => {
    return (
        <section id="explore" className="md:padding-x padding-y ">
            <div className="">
                <h2 className="title">
                    Explore Our Room Makeover Services
                </h2>
                <p className="para-text text-center px-10">
                    Get hassle-free project management and execution when it comes to building your dream home with a tailor-made service.
                </p>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 py-10">
                {interiors.map((room, index) => (
                    <a key={index} href="#products" className="group">
                        <div className="relative hover:-translate-y-2 duration-300 shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={room.img}
                                alt={room.Name}
                                title={room.Name}
                                className="w-full h-60 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex md:flex-col gap-2 justify-center items-center text-white">
                                <p className="text-lg font-semibold">{room.Name}</p>
                                <BsArrowRight className="text-2xl mt-2" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Section1;
