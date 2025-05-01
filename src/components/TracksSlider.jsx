"use client"

import Image from "next/image";
import Link from 'next/link'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getURL } from "@/utils";

export default function TracksSlider({ tracks, age }) {
    
    return (
        <Swiper className="hero-swiper w-full h-auto relative"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
            }}
        >
            {
                tracks && tracks.length > 0 && 
                tracks.map((track) => {
                    return <SwiperSlide key={track.id} className="w-full h-screen flex items-center justify-center slide-1 relative bg-dark p-[6vw] lg:p-[1vw] mb-[10vw] lg:mb-[1vw] rounded-lg">
						<Image className="w-full h-auto" src={getURL(track.banner.url)} width={1438} height={792} alt="slide1"/>
                        <h1 className="text-subtle-gold text-[22px] text-bold mt-3">{ track.trackTitle }</h1>
                        <header className="w-full flex items-end">
                            <div className="w-3/5">
                                <p className="text-silver text-[14px]">by</p>
                                <p className="text-white text-base">{ track.artist }</p>
                            </div>
                            {
                                track.trackLink && (
                                    <div className="w-2/5 flex justify-end items-end">
                                        <Link href={track.trackLink} target="_blank" className="mr-4 inline-block">
                                            <Image src="/assets/images/instagram-logo.png" width={24} height={24} alt="insta_img" />
                                        </Link>
                                    </div>
                                )
                            }
                        </header>
					</SwiperSlide>
                })
            }
        </Swiper>
    );
}