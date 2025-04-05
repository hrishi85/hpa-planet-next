"use client"
import Image from "next/image";
import Link from "next/link";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function News(){
    return(
        <section className="w-full h-screen">
		    <article className="container mx-auto">
    		
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >	
                        <SwiperSlide className="w-2/5">
						<div className="bg-midgrey p-4 rounded-xl">
							<Image src="/assets/images/news/thumbnails/Studio_buzz_n1.jpg" alt="Music Studio" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
							<h2 className="text-[24px] font-bold mb-2 text-white">Music Studio</h2>
							<p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
							<a href="#" className="text-yellow-400 font-semibold">Read more</a>
						</div>
					</SwiperSlide>

					
					<SwiperSlide className="w-2/5">
						<div className="bg-midgrey p-4 rounded-xl">
							<Image src="/assets/images/news/thumbnails/Studio_buzz_n2.jpg" alt="Live Music" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
							<h2 className="text-[24px] font-bold mb-2 text-white">Live Music</h2>
							<p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
							<a href="#" className="text-yellow-400 font-semibold">Read more</a>
						</div>
					</SwiperSlide>

					
					<SwiperSlide className="w-2/5">
						<div className="bg-midgrey p-4 rounded-xl">
							<Image src="/assets/images/news/thumbnails/Studio_buzz_n3.jpg" alt="Vinyl Record" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
							<h2 className="text-[24px] font-bold mb-2 text-white">Vinyl Record</h2>
							<p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
							<a href="#" className="text-yellow-400 font-semibold">Read more</a>
						</div>
					</SwiperSlide>

					
					<SwiperSlide className="w-2/5">
						<div className="bg-midgrey p-4 rounded-xl">
							<Image src="/assets/images/news/thumbnails/Studio_buzz_n4.jpg" alt="Vinyl Record" className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
							<h2 className="text-[24px] font-bold mb-2 text-white">Vinyl Record</h2>
							<p className="text-gray-300 text-sm mb-4">Nurturing talent through training, branding, and marketing to grow their careers.</p>
							<a href="#" className="text-yellow-400 font-semibold">Read more</a>
						</div>
					</SwiperSlide>
				
				<div className="swiper-button-next text-yellow-500"></div>
				<div className="swiper-button-prev text-yellow-500"></div>
			</Swiper>

			<div className="text-center">
				<div className="inline-block mx-auto bg-midgrey h-[8px] rounded-full mt-[60px] w-[120px] relative">
					<Pagination />
				</div>
				
			</div>
		
		</article>
	</section>

    )
}