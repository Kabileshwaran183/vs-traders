import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import img2 from "/award/img02.jpeg";
import img3 from "/award/img03.jpeg";
import img4 from "/award/img04.jpeg";
import img5 from "/award/img05.jpeg";
import img6 from "/award/img06.jpeg";
import img7 from "/award/img07.jpeg";

const weddingPhotos = [
    {
        id: 1,
        name: "Varuna Thapar + Nikhil Sayli",
        image: "/award/img02.jpeg",
        images: [
            { src: "/award/img02.jpeg", height: "h-[250px]" },
            { src: "/award/img03.jpeg", height: "h-[350px]" },
            { src: "/award/img04.jpeg", height: "h-[400px]" },
            { src: "/award/img05.jpeg", height: "h-auto" },
            { src: "/award/img06.jpeg", height: "h-[275px]" },
            { src: "/award/img07.jpeg", height: "h-[320px]" },
        ],
    },
    {
        id: 2,
        name: "Janani + Arvind",
        image: "/award/img07.jpeg",
        images: [
            { src: img2, height: "h-[250px]" },
            { src: img3, height: "h-[350px]" },
            { src: img4, height: "h-[400px]" },
            { src: img5, height: "h-auto" },
            { src: img6, height: "h-[275px]" },
            { src: img7, height: "h-[320px]" },
        ],
    }
];

export default function OutdoorGallery() {
    const initialRows = 3;
    const rowsPerClick = 6;
    const columns = 3;
    const [visibleCount, setVisibleCount] = useState(initialRows * columns);

    const handleViewMore = () => setVisibleCount(prev => prev + rowsPerClick * columns);
    const handleViewLess = () => setVisibleCount(initialRows * columns);

    return (
        <div className="relative bg-white py-24 px-6 md:px-6 lg:px-32">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Wedding Outdoor Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {weddingPhotos.slice(0, visibleCount).map((photo) => (
                    <Link key={photo.id} to="/SeparateView" state={{ couple: photo }}>
                        <div className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
                            <img
                                src={photo.image}
                                alt={photo.name}
                                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end p-4">
                                <h3 className="text-white text-lg font-semibold">{photo.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-end mt-8 gap-4">
                {visibleCount < weddingPhotos.length && (
                    <button
                        onClick={handleViewMore}
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
                    >
                        View More
                    </button>
                )}

                {visibleCount > initialRows * columns && (
                    <button
                        onClick={handleViewLess}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                    >
                        View Less
                    </button>
                )}
            </div>
        </div>
    );
}
