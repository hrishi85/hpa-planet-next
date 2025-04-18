"use client"
import Image from "next/image";
import Link from "next/link";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HeroSection(){
    return(
        <section className="w-full h-screen">
            <Swiper className="hero-swiper w-full h-screen relative" id="hero"
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
               
                <SwiperSlide className="w-full h-screen flex items-center justify-center slide-1 relative bg-[url('/assets/images/Hero_n1.jpg')] bg-cover bg-no-repeat">
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
                <SwiperSlide className="w-full h-screen flex items-center justify-center slide-1 relative bg-[url('/assets/images/Hero_n2.jpg')] bg-cover bg-no-repeat">
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
                </SwiperSlide>
                
                {/* <div className="text-right hero-swiper-pagination absolute z-40"></div> */}
            </Swiper>
        </section>
    )
}