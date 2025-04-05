"use client"
import { useState } from "react"
import CustomHeading from "../customHeading"

export default function Services(){
    const [activeAccordian, setActiveAccordian] = useState(0);
    return(
        <section className="w-full h-auto bg-darkgrey py-[10vw]">
            <article className="container mx-auto flex">
                <header className="title-block w-1/2 relative"> <CustomHeading text1="What We Bring" text2="To the Mix" /> </header>
                <section className="w-1/2">
                    <h1 className="text-subtle-gold text-[90px] font-bold leading-[0.6em] align-top pb-2 uppercase opacity-0">
                        <span className="text-[48px] font-thin italic">What We Bring</span><br />
                        <span>To the Mix</span>
                    </h1>
                    <div className="collapsible-wrapper">
                        <div className={`border-b border-b-[#494949] ${activeAccordian === 0 ? "opened":""}`}>
                            <h1 className={`text-[24px] text-white font-medium leading-[4em] flex cursor-pointer transition-all duration-500 px-10 ${activeAccordian === 0 ? "bg-dark":"bg-transparent"}`} onClick={() => { setActiveAccordian(0); }}>
                                <span className="block flex-grow">
                                    Artist  Development &amp; Promotion
                                </span>
                                <div className="w-[24px] circle-plus closed self-center">
                                    <div className="horizontal"></div>
                                    <div className="vertical"></div>
                                </div>
                            </h1>
                            <div className={`text-wrapper w-2/3 transition-all ${activeAccordian === 0 ? "h-auto":"h-0"} overflow-hidden`}>
                                <div className="px-16 pt-4 pb-8">
                                    <p className="eb-garamond-400 text-silver text-lg tracking-wide leading-[1.2em]">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`border-b border-b-[#494949] ${activeAccordian === 1 ? "opened":""}`}>
                            <h1 className={`text-[24px] text-white font-medium leading-[4em] flex cursor-pointer transition-all duration-500 px-10 ${activeAccordian === 1 ? "bg-dark":"bg-transparent"}`} onClick={() => { setActiveAccordian(1); }}>
                                <span className="block flex-grow">
                                    Music Production &amp; Distribution
                                </span>
                                <div className="w-[24px] circle-plus closed self-center">
                                    <div className="horizontal"></div>
                                    <div className="vertical"></div>
                                </div>
                            </h1>
                            <div className={`text-wrapper w-2/3 transition-all ${activeAccordian === 1 ? "h-auto":"h-0"} overflow-hidden`}>
                                <div className="px-16 pt-4 pb-8">
                                    <p className="eb-garamond-400 text-silver text-lg tracking-wide leading-[1.2em]">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`border-b border-b-[#494949] ${activeAccordian === 2 ? "opened":""}`}>
                            <h1 className={`text-[24px] text-white font-medium leading-[4em] flex cursor-pointer transition-all duration-500 px-10 ${activeAccordian === 2 ? "bg-dark":"bg-transparent"}`} onClick={() => { setActiveAccordian(2); }}>
                                <span className="block flex-grow">
                                    Marketing &amp; Publicity
                                </span>
                                <div className="w-[24px] circle-plus closed self-center">
                                    <div className="horizontal"></div>
                                    <div className="vertical"></div>
                                </div>
                            </h1>
                            <div className={`text-wrapper w-2/3 transition-all ${activeAccordian === 2 ? "h-auto":"h-0"} overflow-hidden`}>
                                <div className="px-16 pt-4 pb-8">
                                    <p className="eb-garamond-400 text-silver text-lg tracking-wide leading-[1.2em]">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`border-b border-b-[#494949] ${activeAccordian === 3 ? "opened":""}`}>
                            <h1 className={`text-[24px] text-white font-medium leading-[4em] flex cursor-pointer transition-all duration-500 px-10 ${activeAccordian === 3 ? "bg-dark":"bg-transparent"}`} onClick={() => { setActiveAccordian(3); }}>
                                <span className="block flex-grow">
                                    Rights Management & Royalties
                                </span>
                                <div className="w-[24px] circle-plus closed self-center">
                                    <div className="horizontal"></div>
                                    <div className="vertical"></div>
                                </div>
                            </h1>
                            <div className={`text-wrapper w-2/3 transition-all ${activeAccordian === 3 ? "h-auto":"h-0"} overflow-hidden`}>
                                <div className="px-16 pt-4 pb-8">
                                    <p className="eb-garamond-400 text-silver text-lg tracking-wide leading-[1.2em]">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`border-b border-b-[#494949] ${activeAccordian === 4 ? "opened":""}`}>
                            <h1 className={`text-[24px] text-white font-medium leading-[4em] flex cursor-pointer transition-all duration-500 px-10 ${activeAccordian === 4 ? "bg-dark":"bg-transparent"}`} onClick={() => { setActiveAccordian(4); }}>
                                <span className="block flex-grow">
                                    Touring & Live Event Support
                                </span>
                                <div className="w-[24px] circle-plus closed self-center">
                                    <div className="horizontal"></div>
                                    <div className="vertical"></div>
                                </div>
                            </h1>
                            <div className={`text-wrapper w-2/3 transition-all ${activeAccordian === 4 ? "h-auto":"h-0"} overflow-hidden`}>
                                <div className="px-16 pt-4 pb-8">
                                    <p className="eb-garamond-400 text-silver text-lg tracking-wide leading-[1.2em]">Nurturing talent through training, branding, and marketing to grow their careers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </section>
    )
}