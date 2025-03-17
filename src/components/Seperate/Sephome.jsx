import React from "react";
import { useLocation } from "react-router-dom";
import Sepbanner from "./Sepbanner";
import Sepgallery from "./Sepgaller";

const Sephome = () => {
    const location = useLocation();
    const couple = location.state?.couple;

    if (!couple) {
        return <p className="text-center text-xl text-red-600">No couple data found.</p>;
    }

    return (
        <div>
            <Sepbanner bannerImg={couple.image} title={couple.name} />
            <Sepgallery images={couple.images} />
        </div>
    );
};

export default Sephome;
