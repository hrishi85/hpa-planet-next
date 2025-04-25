"use client"
import Image from "next/image";
import Link from "next/link";
import { getFormatedDate } from "@/utils";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const baseURL = process.env.STRAPI_API_URL || 'http://localhost:1337';

export default function HeroSection({ tracks }) {
    
    return(
        <section className="w-full h-screen">
            <Swiper className="hero-swiper w-full h-screen relative" id="hero" modules={[Navigation, Pagination, A11y]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
               {
                    tracks && tracks.length > 0 && (
                        tracks.map((track) => {
                            return (
                                <SwiperSlide className={`w-full h-screen flex items-center justify-center slide-1 relative`}>
                                    <Image src={`${baseURL}${track.banner.url}`} alt="HPA Planet recent tracks" layout="fill" objectFit="cover" priority unoptimized />
                                    <header className="w-full h-full flex flex-col items-start justify-end absolute left-0 top-0 px-[6vw] py-[3vw] hero-header-bg">
                                        <h1 className="inline-block text-subtle-gold text-[48px] font-bold uppercase mb-[2vw]">
                                            { track.trackTitle }
                                            <span className="flex justify-between items-center uppercase font-medium text-subtle-gold text-[24px]">
                                                <span className="block">{ track.artist }</span>
                                                <span className="block">{ getFormatedDate(track.releaseDate) }</span>
                                            </span>
                                        </h1>
                                        
                                        <p className="flex justify-between items-center w-full">
                                            <span>Listen  now  on :</span>
                                            <span className="flex">
                                                {/* <a href="#" target="_blank" className="mr-4">
                                                    <Image src="/assets/images/instagram-logo.png" width={24} height={24} alt="insta_img" />
                                                </a>
                                                <a href="https://www.youtube.com/watch?v=aGeYczuu0QA" target="_blank" className="mr-4">
                                                    <Image src="/assets/images/youtube-logo.png" width={24} height={24} alt="insta_img" />
                                                </a> */}
                                            </span>
                                        </p>
                                    </header>
                                </SwiperSlide>
                            );
                        })
                    )
               }
                
                {/* <SwiperSlide className="w-full h-screen flex items-center justify-center slide-1 relative bg-[url('/assets/images/Hero_n2.jpg')] bg-cover bg-no-repeat">
                    <header className="w-full h-full flex flex-col items-start justify-end absolute left-0 top-0 px-[6vw] py-[3vw] hero-header-bg">
                        <h1 className="inline-block text-subtle-gold text-[48px] font-bold uppercase mb-[2vw]">
                            Hustle & Heart
                            <span className="flex justify-between items-center uppercase font-medium text-subtle-gold text-[24px]">
                                <span className="block">John Doe</span>
                                <span className="block">2 March 2025</span>
                            </span>
                        </h1>
                        
                        <p className="flex justify-between items-center w-full">
                            <span>
                                Listen  now  on : 
                            </span>
                            <span className="flex">
                                <a href="#" target="_blank" className="mr-4">
                                    <Image src="/assets/images/instagram-logo.png" width={24} height={24} alt="insta_img" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=aGeYczuu0QA" target="_blank" className="mr-4">
                                    <Image src="/assets/images/youtube-logo.png" width={24} height={24} alt="insta_img" />
                                </a>
                                <a href="#" target="_blank">
                                    <Image src="/assets/images/tiktok-logo.png" width={24} height={24} alt="insta_img" />
                                </a>
                            </span>
                        </p>
                    </header>
                </SwiperSlide>
                <SwiperSlide className="w-full h-screen flex items-center justify-center slide-1 relative bg-[url('/assets/images/Hero_n3.jpg')] bg-cover bg-no-repeat">
                    <header className="w-full h-full flex flex-col items-start justify-end absolute left-0 top-0 px-[6vw] py-[3vw] hero-header-bg">
                        <h1 className="inline-block text-subtle-gold text-[48px] font-bold uppercase mb-[2vw]">
                            Hustle & Heart
                            <span className="flex justify-between items-center uppercase font-medium text-subtle-gold text-[24px]">
                                <span className="block">John Doe</span>
                                <span className="block">2 March 2025</span>
                            </span>
                        </h1>
                        
                        <p className="flex justify-between items-center w-full">
                            <span>
                                Listen  now  on : 
                            </span>
                            <span className="flex">
                                <a href="#" target="_blank" className="mr-4">
                                    <Image src="/assets/images/instagram-logo.png" width={24} height={24} alt="insta_img" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=aGeYczuu0QA" target="_blank" className="mr-4">
                                    <Image src="/assets/images/youtube-logo.png" width={24} height={24} alt="insta_img" />
                                </a>
                                <a href="#" target="_blank">
                                    <Image src="/assets/images/tiktok-logo.png" width={24} height={24} alt="insta_img" />
                                </a>
                            </span>
                        </p>
                    </header>
                </SwiperSlide> */}
                
                {/* <div className="text-right hero-swiper-pagination absolute z-40"></div> */}
            </Swiper>
        </section>
    )
}