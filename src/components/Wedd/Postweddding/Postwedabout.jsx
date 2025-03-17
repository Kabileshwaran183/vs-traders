import React from "react";
import weddingImage from "/award/img07.jpeg";

export default function PostWeddingAbout() {
    return (
        <section className="bg-white md:py-10  ">
            <div className="flex flex-col md:flex-row items-center gap-8 md:px-24 px-5 mx-auto p-6">
                <div className="w-full">
                    <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
                        In the arms of nature, love finds its truest expression.
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Imagine a magical wedding... under the warm glow of the setting sun,
                        surrounded by breathtaking scenery. Now, witness your love story, as
                        the birds sing their blessings.
                    </p>
                    <p className="mt-4 text-gray-600 text-lg">
                        Yes, outdoor weddings offer a beautiful ceremonial stage that enhances
                        the romance and joy of your special day. We understand the
                        significance of these timeless traditions and the importance of
                        preserving them for future generations.
                    </p>
                    <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
                        In the arms of nature, love finds its truest expression.
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Imagine a magical wedding... under the warm glow of the setting sun,
                        surrounded by breathtaking scenery. Now, witness your love story, as
                        the birds sing their blessings.
                    </p>
                    <p className="mt-4 text-gray-600 text-lg">
                        Yes, outdoor weddings offer a beautiful ceremonial stage that enhances
                        the romance and joy of your special day. We understand the
                        significance of these timeless traditions and the importance of
                        preserving them for future generations.
                    </p>

                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                        Why choose our service for your outdoor wedding photography?
                    </h3>
                    <p className=" text-gray-600 text-lg">
                        A keen eye for detail is what our skilled photographers are adept at;
                        every natural element will be captured to create images that evoke
                        emotion and tell your unique love story.
                    </p>
                </div>


                <div className="w-full md:w-1/2">
                    <img
                        src={weddingImage}
                        alt="Outdoor Wedding"
                        className="w-[427px] h-[400px] rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>

    );
}
