
import React, { useState } from "react";

const weddingPhotos = [
    { id: 1, name: "Varuna Thapar + Nikhil Sayli", image: "/award/img01.jpeg" },
    { id: 2, name: "Janani + Arvind", image: "/award/img07.jpeg" },
    { id: 3, name: "Karthika + Sachin Kumar", image: "/award/img06.jpeg" },
    { id: 4, name: "Alekhya + Sai Teja", image: "/award/img03.jpeg" },
    { id: 5, name: "Lavanya Yaddanapudi + Sreevathaan", image: "/award/img06.jpeg" },
    { id: 6, name: "Varuna Thapar + Nikhil Sayli", image: "/award/img01.jpeg" },
    { id: 7, name: "Janani + Arvind", image: "/award/img07.jpeg" },
    { id: 8, name: "Karthika + Sachin Kumar", image: "/award/img06.jpeg" },
    { id: 9, name: "Alekhya + Sai Teja", image: "/award/img03.jpeg" },
    { id: 10, name: "Varuna Thapar + Nikhil Sayli", image: "/award/img01.jpeg" },
    { id: 11, name: "Janani + Arvind", image: "/award/img07.jpeg" },
    { id: 12, name: "Karthika + Sachin Kumar", image: "/award/img06.jpeg" },
    { id: 13, name: "Alekhya + Sai Teja", image: "/award/img03.jpeg" },


];

export default function CoupleGallery() {
    const initialRows = 3; // Show 3 rows initially
    const rowsPerClick = 6; // Load 6 more rows each time
    const columns = 3; // Number of columns (adjust based on screen size)

    const [visibleCount, setVisibleCount] = useState(initialRows * columns);

    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + rowsPerClick * columns);
    };

    const handleViewLess = () => {
        setVisibleCount(initialRows * columns);
    };

    return (
        <div className="relative bg-white py-24 px-6 md:px-6 lg:px-32">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Couple Protraits Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {weddingPhotos.slice(0, visibleCount).map((photo) => (
                    <div key={photo.id} className="relative group overflow-hidden rounded-xl shadow-md">
                        <img
                            src={photo.image}
                            alt={photo.name}
                            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end p-4">
                            <h3 className="text-white text-lg font-semibold">{photo.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons */}
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
                    <div>
                        <button
                            onClick={handleViewLess}
                            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                        >
                            View Less
                        </button>
                    </div>

                )}
            </div>
        </div>
    );
}
