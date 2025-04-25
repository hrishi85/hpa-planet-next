import CustomHeading from "../customHeading";
import ResponsiveContainer from "../ResponsiveContainer";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function History({ history }) {
	
    return(
		<section className="w-full h-auto py-[10vw]">
			<ResponsiveContainer>
				<section className="flex">
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