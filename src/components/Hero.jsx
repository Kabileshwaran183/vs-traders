import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { FreeMode, Navigation, Thumbs, EffectFade, Autoplay } from "swiper/modules";
import { Data } from "./data";

export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-[50%] md:h-screen  bg-black overflow-hidden ">

      {/* Main Swiper (Full-Screen Images) */}
      <div className="h-full w-full flex items-center justify-center">
      
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
          {Data.map((item, index) => (
            <SwiperSlide key={index} className="h-full w-full flex items-center justify-center">
              <div className="absolute w-screen h-[50%] md:h-screen -z-10">
              <div className="bg-black opacity-80 absolute w-screen h-screen z-10"></div>
              <img
                src={item}
                className=" w-screen "
                alt={`slide-${index}`}
              />
              </div>
              <img
                src={item}
                className="h-full w-auto mx-auto"
                alt={`slide-${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper (Right-Side Column) */}
      <div className="absolute  right-10 md:right-28 top-[40%] md:top-[55%] transform -translate-y-1/2 flex flex-col gap-2 z-40  md:block">
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
            {Data.map((item, index) => (
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
      </div>
    </div>
  );
}
