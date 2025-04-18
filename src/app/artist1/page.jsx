"use client"
import Image from "next/image";
import Link from "next/link";
import ResponsiveContainer from "../../components/ResponsiveContainer";

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";

export default function Artist1_name() {
	return (
		<>
			<PageHeader />
			<section className="w-full mt-12">
				<ResponsiveContainer>
					<Swiper className="w-full h-auto relative"
						modules={[Navigation, Pagination, A11y]}
						spaceBetween={50}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log('slide change')}
					>
						
						<SwiperSlide className="w-full h-screen flex items-center justify-center slide-1 relative">
							<Image className="w-full h-auto" src="/assets/images/Hero_n1.jpg" width={1438} height={792} alt="slide1"/>
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
						<SwiperSlide className="w-full h-screen flex items-center justify-center slide-1 relative">
						<Image className="w-full h-auto" src="/assets/images/Hero_n2.jpg" width={1438} height={792} alt="slide2"/>
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
						<SwiperSlide className="w-full h-screen flex items-center justify-center slide-1 relative">
							<Image className="w-full h-auto" src="/assets/images/Hero_n3.jpg" width={1438} height={792} alt="slide1"/>
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
					
					
					<section className="bg-dark my-[5vw] flex">
						<Image className="flex-1 pt-[80px] pl-[80px] pb-[100px] pr-[110px]" src="/assets/images/artists/portraits/artist1.webp" width={500} height={500} alt="HPA Logo" />

						<article className="pt-[115px] pl-[100px] flex-1">
							<h3 className="text-subtle-gold text-[24px] font-medium">Real_Name_1 AKA</h3>
							<h1 className="text-subtle-gold text-[48px] font-extrabold">Artist_Name_1</h1>
							<p className="text-white text-sm mt-[65px]">Birthdate</p>
							<div className="w-[480px] h-[300px] p-2 rounded-md text-sm mt-[25px] text-text-grey">
								<PerfectScrollbar className="pr-[5vw]"> 
									<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
									It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
									It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</p>
								</PerfectScrollbar>
							</div>
						</article>
					</section>
				</ResponsiveContainer>	
			</section>
			<PagePFooter />
			<PageFooter />
		</>
		
		
	);
}
