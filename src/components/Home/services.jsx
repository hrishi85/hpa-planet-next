"use client"
import { useState } from "react"
import CustomHeading from "../customHeading"

export default function Services(){
    const [activeAccordian, setActiveAccordian] = useState(0);

    const accordianData = [
        {
            key: 1,
            title: "Artist  Development & Promotion",
            text: "Nurturing talent through training, branding, and marketing to grow their careers."
        },
        {
            key: 2,
            title: "Music Production & Distribution",
            text: "Nurturing talent through training, branding, and marketing to grow their careers."
        },
        {
            key: 3,
            title: "Marketing & Publicity",
            text: "Nurturing talent through training, branding, and marketing to grow their careers."
        },
        {
            key: 4,
            title: "Rights Management & Royalties",
            text: "Nurturing talent through training, branding, and marketing to grow their careers."
        },
        {
            key: 5,
            title: "Touring & Live Event Support",
            text: "Nurturing talent through training, branding, and marketing to grow their careers."
        }
    ];

    return(
        <section className="w-full h-auto min-h-[100vh] lg:min-h-0 flex items-center lg:block bg-darkgrey py-[10vw]">
            <article className="container px-6 lg:px-0 mx-auto bock lg:flex">
                <header className="title-block w-full lg:w-1/2 relative pb-12 lg:pb-0"> <CustomHeading text1="What We Bring" text2="To the Mix" /> </header>
                <section className="w-full lg:w-1/2">
                    <h1 className="text-subtle-gold text-[90px] font-bold leading-[0.6em] align-top pb-2 uppercase opacity-0 hidden lg:block">
                        <span className="text-[48px] font-thin italic">What We Bring</span><br />
                        <span>To the Mix</span>
                    </h1>
                    <div className="collapsible-wrapper">
                        {
                            accordianData.map((item, index) => (
                                <div className={`border-b border-b-[#494949] ${activeAccordian === index ? "opened":""}`} key={item.key}>
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
                                            <p className="eb-garamond-400 text-silver text-lg tracking-wide leading-[1.2em]">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </article>
        </section>
    )
}