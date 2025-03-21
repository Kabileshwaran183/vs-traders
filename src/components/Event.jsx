import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Data } from './data';
import { Canimg } from './data';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function Events() {

    return (
        <section className='padding-x padding-y '>
            <h1 className='title'>Our Popular Products</h1>
            <div className="">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="swiper_container1"
                >
                    {
                        Canimg.map((item, index) => (
                            <SwiperSlide key={index} className='swiperimg'>
                                <div className='swiperimg'>
                                    <img src={item} alt={`slide-${index}`} />
                                </div>
                            </SwiperSlide>
                        ))}

                    <div className="slider-controler ">
                        <div className="swiper-button-prev slider-arrow">
                            <FaArrowCircleLeft />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <FaArrowCircleRight />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </section>
       
    );
}

export default Events;
