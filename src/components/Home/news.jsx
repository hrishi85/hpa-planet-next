"use client"
import Image from "next/image";
import Link from "next/link";
import CustomHeading from "../customHeading";

import { shortenTextByWords } from "@/utils";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ResponsiveContainer from "../ResponsiveContainer";

export default ({ news }) => {
    if(!news || news.length < 1) {
        return (
            <div className="w-full bg-dark flex items-center justify-center py-[1vw]">
                <p className="text-white text-center">No more News articles to show</p>
            </div>
        );
    }
    return (
        <section className="w-full pb-[8vw]">
            <ResponsiveContainer>
                <header className="title-block relative pb-8">
                    <CustomHeading text1={"Studio"} text2={"Buzz"}/>
                </header>
                
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    className="news-swiper"
                    breakpoints={{
                        1024: {
                          slidesPerView: 3,
                        },
                    }}
                >
                    {
                        news.map((newsItem) => {
                            const shortDescription = shortenTextByWords(newsItem.description[0].children[0].text, 20);
                            return (
                                <SwiperSlide>
                                    <article key={newsItem.id} className="bg-midgrey p-4 rounded-xl">
                                        <Image src={`http://localhost:1337${newsItem.banner.url}`} alt={newsItem.title} className="rounded-lg mb-4 w-full h-auto" width={425} height={240}  />
                                        <h2 className="text-[22px] font-bold mb-2 text-white">{newsItem.title}</h2>
                                        <p className="text-gray-300 text-sm mb-4">{shortDescription}</p>
                                        <Link href={`/news/${newsItem.documentId}`} className="text-yellow-400 font-semibold">Read more</Link>
                                    </article>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </ResponsiveContainer>
        </section>
    );
};
