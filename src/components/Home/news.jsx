"use client"
import Image from "next/image";
import Link from "next/link";
import CustomHeading from "../customHeading";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <section className="w-full py-[10vw]">
            <article className="container mx-auto">
                <header className="title-block relative pb-8">
                    <CustomHeading text1={"Studio"} text2={"Buzz"}/>
                </header>
                
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="news-swiper"
                >
                    <SwiperSlide>
                        <div className="bg-midgrey p-4 rounded-xl">
                            <Image src="/assets/images/news/thumbnails/Studio_buzz_n1.jpg" alt="Music Studio" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
                            <h2 className="text-[24px] font-bold mb-2 text-white">Music Studio</h2>
                            <p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                            <a href="#" className="text-yellow-400 font-semibold">Read more</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-midgrey p-4 rounded-xl">
                            <Image src="/assets/images/news/thumbnails/Studio_buzz_n2.jpg" alt="Live Music" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
                            <h2 className="text-[24px] font-bold mb-2 text-white">Live Music</h2>
                            <p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                            <a href="#" className="text-yellow-400 font-semibold">Read more</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-midgrey p-4 rounded-xl">
                            <Image src="/assets/images/news/thumbnails/Studio_buzz_n3.jpg" alt="Vinyl Record" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
                            <h2 className="text-[24px] font-bold mb-2 text-white">Vinyl Record</h2>
                            <p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                            <a href="#" className="text-yellow-400 font-semibold">Read more</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-midgrey p-4 rounded-xl">
                            <Image src="/assets/images/news/thumbnails/Studio_buzz_n4.jpg" alt="Vinyl Record" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
                            <h2 className="text-[24px] font-bold mb-2 text-white">Vinyl Record</h2>
                            <p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                            <a href="#" className="text-yellow-400 font-semibold">Read more</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </article>
        </section>
    );
};
