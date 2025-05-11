import Image from "next/image";
import CustomHeading from "./customHeading";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export default function VisionMission({ visionMission }) {
	console.log(visionMission);
    return (
        <section className="w-full mb-[10vw] lg:mb-[5vw]">
            <article className="container mx-auto p-12 bg-dark block lg:flex lg:gap-16">
                <div className="w-full lg:w-2/5">
					{
						visionMission && visionMission.banner && visionMission.banner.url && (
							<Image src={`${baseURL}${visionMission.banner.url}`} alt="HPA Vision and Mission" width={400} height={650} className="w-full h-auto object-cover" />
						)
					}
                </div>
                <div className="w-full lg:w-3/5 relative">
                    <CustomHeading text1="Vision" text2="Mission" />
					<div className="text-[18px] leaning-[38px] text-silver font-serif mt-[4vw] max-w-[600px]">
						{
							visionMission && visionMission.visionMission &&  <BlocksRenderer content={visionMission.visionMission} />
						}
					</div>
                </div>
            </article>
        </section>
    );
}