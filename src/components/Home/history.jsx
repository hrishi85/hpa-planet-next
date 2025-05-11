import CustomHeading from "../customHeading";
import ResponsiveContainer from "../ResponsiveContainer";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function History({ history, withPadding = false }) {
	
    return(
		<section className={`w-full h-auto ${withPadding ? "pt-[10vw] lg:pt-[8vw]": "py-[10vw]"} mb-[5vw]`}>
			<ResponsiveContainer>
				<section className={`block lg:flex w-full my-[12vw] lg:my-0 ${withPadding && 'px-[8vw] py-[12vw] lg:px-[3vw] lg:py-[4vw] bg-dark'}`}>
					<header className="title-block w-full lg:w-1/2 relative mb-12 lg:mb-0"><CustomHeading text1="Born" text2="To Amplify" /></header>
					<section className="w-full lg:w-1/2 ">
						<h1 className="text-subtle-gold text-[90px] font-bold leading-[0.6em] align-top pb-2 uppercase opacity-0 hidden lg:block">
							<span className="text-[48px] font-thin italic">Born</span><br />
							<span>To Amplify</span>
						</h1>
						<div className="text-[22px] leaning-[38px] text-silver">
							<BlocksRenderer content={history} />
						</div>
					</section>
				</section>
			</ResponsiveContainer>
		</section>
    )
}