"use client"
import { useEffect, useState } from "react"
import CustomHeading from "../customHeading"
import Image from "next/image";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const baseURL = process.env.STRAPI_API_URL || 'http://localhost:1337';

export default function Services({services}) {

    const [activeAccordian, setActiveAccordian] = useState(0);
    const [hoveredAccordian, setHoveredAccordian] = useState(null);

    if (!services || services.length === 0) {
		return <div>Services not found</div>;
	}

    return(
        <section className="w-full h-auto min-h-[100vh] lg:min-h-0 flex items-center lg:block bg-darkgrey py-[10vw]">
            <article className="container px-6 lg:px-0 mx-auto bock lg:flex">
                <header className="title-block w-full lg:w-1/2 relative pb-12 lg:pb-0">
                    <CustomHeading text1="What We Bring" text2="To the Mix" />
                    {
                        hoveredAccordian && (
                            <div className="w-[90%] mt-4">
                                <Image src={`${baseURL}${services[hoveredAccordian].thumbnail.url}`} width={714} height={475} alt={services[hoveredAccordian].thumbnail.alternativeText || "HPA Planet Serice"} className="w-full" /> 
                            </div>
                        )
                    }
                </header>
                <section className="w-full lg:w-1/2">
                    <h1 className="text-subtle-gold text-[90px] font-bold leading-[0.6em] align-top pb-2 uppercase opacity-0 hidden lg:block">
                        <span className="text-[48px] font-thin italic">What We Bring</span><br />
                        <span>To the Mix</span>
                    </h1>
                    <div className="collapsible-wrapper">
                        {
                            services && services.length > 0 && 
                            services.map((item, index) => {
                                return (
                                    <div key={item.documentId} className={`border-b border-b-[#494949] ${activeAccordian === index ? "opened":""}`} onMouseEnter={() => setHoveredAccordian(index)} onMouseLeave={() => setHoveredAccordian(null)}>
                                        <h1 className={`text-[18px] lg:text-[24px] text-white font-medium leading-[4em] flex cursor-pointer transition-all duration-500 px-4 lg:px-10 ${activeAccordian === index ? "bg-dark":"bg-transparent"}`} onClick={() => { setActiveAccordian(index); }}>
                                            <span className="block flex-grow">
                                                {item.title}
                                            </span>
                                            <div className="w-[24px] circle-plus closed self-center scale-50 lg:scale-100">
                                                <div className="horizontal"></div>
                                                <div className="vertical"></div>
                                            </div>
                                        </h1>
                                        <div className={`text-wrapper w-full lg:w-2/3 transition-all ${activeAccordian === index ? "h-auto":"h-0"} overflow-hidden`}>
                                            <div className="px-2 lg:px-16 pt-4 pb-8">
                                                {
                                                    item.content && item.content.length > 0 && 
                                                    <BlocksRenderer content={item.content} />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
            </article>
        </section>
    )
}