import React from "react";
import CountUp from "react-countup";

const Numbercount = () => {
    return (
        <section className="bg-teal-50 text-gray-800 py-10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                    { end: 10, label: "Locations" },
                    { end: 500, label: "Model Shoots", suffix: "+" },
                    { end: 100, label: "Weddings", suffix: "+" },
                    { end: 1, label: "Dream" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <p className="text-3xl font-semibold">
                            <CountUp
                                start={0}
                                end={item.end}
                                duration={3}
                                enableScrollSpy
                                scrollSpyOnce
                            />
                            {item.suffix && item.suffix}
                        </p>
                        <p className="text-lg font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Numbercount;
