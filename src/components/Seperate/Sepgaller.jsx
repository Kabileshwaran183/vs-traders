import React, { useState } from "react";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css"; // Import styles


const Sepgallery = (props) => {
    const initialLoad = 12;
    const loadMoreCount = 6;

    const [visibleImages, setVisibleImages] = useState(props.images.slice(0, initialLoad));
    const allImages = props.images;
    const fetchMoreImages = () => {
        requestAnimationFrame(() => {
            setVisibleImages((prev) => [
                ...prev,
                ...allImages.slice(prev.length, prev.length + loadMoreCount),
            ]);
        });
    };


    return (
        <section className="px-4 md:px-24  ;
">

            <PhotoProvider>
                <InfiniteScroll
                    dataLength={visibleImages.length}
                    next={fetchMoreImages}
                    hasMore={visibleImages.length < allImages.length}
                    loader={<h4 className="text-center text-gray-500 mt-4">Loading more...</h4>}
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 break-inside-avoid  "

                >
                    {visibleImages.map((image, index) => (
                        <PhotoView key={index} src={image.src}>
                            <motion.img
                                src={image.src}
                                className={`w-full ${image.height} rounded-lg shadow-md break-inside-avoid cursor-pointer object-cover transition-transform duration-300`}
                                alt={`Gallery Image ${index + 1}`}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true, amount: 0.2 }}
                                loading="lazy"
                                whileHover={{ scale: 1.00, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
                            />
                        </PhotoView>
                    ))}
                </InfiniteScroll>
            </PhotoProvider>
        </section>
    );
};

export default Sepgallery;
