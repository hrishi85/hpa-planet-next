"use client"
import Image from "next/image";
import Link from "next/link";
import ResponsiveContainer from "../../components/ResponsiveContainer";

import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

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
			<ResponsiveContainer>
				<Swiper className="hero-swiper w-full h-auto relative" id="hero"
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
				
				
				<section className="bg-dark my-[5vw] lg:flex">
					<Image className="lg:flex-1 pt-[40px] lg:pt-[80px] pl-[40px] lg:pl-[80px] pb-[40px] lg:pb-[100px] pr-[40px] lg:pr-[110px]" src="/assets/images/artists/portraits/artist1.webp" width={500} height={500} alt="HPA Logo" />

					<article className="lg:pt-[115px] lg:pl-[100px] lg:flex-1">
						<h3 className="text-subtle-gold ml-[30px] lg:ml-[0px] text-[16px] lg:text-[24px] font-medium">Real_Name_1 AKA</h3>
						<h1 className="text-subtle-gold text-center lg:text-left text-[32px] lg:text-[48px] font-extrabold">Artist_Name_1</h1>
						<p className="text-white ml-[30px] lg:ml-[0px] text-sm mt-[65px]">Birthdate</p>
						<SimpleBar
							className="mt-[25px] custom-scrollbar p-[15px] lg:p-[0px] w-full lg:w-[480px] max-h-none lg:max-h-[300px]"
							forceVisible="y"
							autoHide={false}
						>
							<p className="text-text-grey text-sm">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</SimpleBar>
					</article>
				</section>
			</ResponsiveContainer>	
			<PagePFooter />
			<PageFooter />
		</>
		
		
	);
}
