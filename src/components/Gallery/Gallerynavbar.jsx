import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GalleryNavbar = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();

    const categories = [
        "All", "Wedding", "Portraits", "Events", "Couple Portraits", "Candid Moment"
    ];

    const formatCategoryForURL = (category) => {
        return category.toLowerCase().replace(/\s+/g, "-");
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(`/Gallery/${formatCategoryForURL(category)}`);
    };

    return (
        <div className="w-full bg-white shadow-md">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-4 text-gray-700">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg transition-colors duration-300 ${selectedCategory === category ? "text-teal-500 font-semibold" : "hover:text-teal-500"}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GalleryNavbar;
