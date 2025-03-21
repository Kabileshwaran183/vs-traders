import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { FreeMode, Navigation, Thumbs, EffectFade, Autoplay } from "swiper/modules";
import { HeroImg } from "./data";

export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-[50vh] lg:h-screen bg-red-500 w-full overflow-hidden relative">
      {/* Main Swiper (Full-Screen Images) */}
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",  
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
          style={{height:"100%"}}
        >
          {HeroImg.map((item, index) => (
            <SwiperSlide key={index} className="h-full w-full">
            <img
              src={item}
              className="w-full h-full object-cover"
              alt={`slide-${index}`}
            />
          </SwiperSlide>
          
          ))}
        </Swiper>
      {/* Thumbnail Swiper (Right-Side Column) */}
      <div className="absolute  right-10 md:right-28 top-[40%] md:top-[55%] transform -translate-y-1/2 gap-2 z-40 hidden  lg:block">
        <div className="flex flex-col gap-4 items-center max-sm:hidden">
          {/* Previous Button */}
          <button className="prev-btn bg-teal-300 max-md:h-8 text-black opacity-30 p-2 max-md:text-base rounded-full">
            ▲
          </button>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            direction="vertical"
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {HeroImg.map((item, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <img
                  src={item}
                  className="h-[50px] md:h-[60px] w-[70px] md:w-[100px] object-cover rounded-lg"
                  alt={`thumb-${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Button */}
          <button className="next-btn bg-teal-300 max-md:h-8 text-black p-2 opacity-30 max-md:text-base rounded-full md:mt-2">
            ▼
          </button>
        </div>
      </div>-
    </div>
  );
}
