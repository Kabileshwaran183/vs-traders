import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OthersNavbar = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();
    const categories = [
        "All", "Baby Photography", "Birthday Celebration", "Drone Photography", "Video Shoot", "Photo Edit"
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        // Convert category to URL-friendly format (replace spaces with hyphens)
        const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
        navigate(`/other/${formattedCategory}`);
    };

    return (
        <div className="w-full bg-white shadow-md ">
          
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-4 text-gray-700">
                
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 
                            ${selectedCategory === category
                                ? "text-white bg-teal-500 font-semibold shadow-md"
                                : "hover:text-teal-500 hover:bg-gray-100"
                            }`
                        }
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default OthersNavbar;
