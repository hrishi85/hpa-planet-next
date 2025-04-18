import CustomHeading from "../customHeading";
import ResponsiveContainer from "../ResponsiveContainer";

export default function History(){
    return(
    <section className="w-full h-auto py-[10vw]">
		<ResponsiveContainer>
			<header className="title-block w-full lg:w-1/2 relative mb-12 lg:mb-0"><CustomHeading text1="Born" text2="To Amplify" /></header>
			<section className="w-full lg:w-1/2 ">
				<h1 className="text-subtle-gold text-[90px] font-bold leading-[0.6em] align-top pb-2 uppercase opacity-0 hidden lg:block">
					<span className="text-[48px] font-thin italic">Born</span><br />
					<span>To Amplify</span>
				</h1>
				<p className="text-[24px] leaning-[38px] text-white">
					HPA founded in 2023 by two young passionate music lovers
					Aim: To help and provide a platform for upcoming artists via recording, production, distribution and marketing including making social media posts and lyric videos.
				</p>
			</section>
		</ResponsiveContainer>
	</section>
    )
}