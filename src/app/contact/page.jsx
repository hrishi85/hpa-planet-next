import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Image from "next/image";
import Link from "next/link"
import ResponsiveContainer from "../../components/ResponsiveContainer";

export default function Contact() {
    return (
        <>
            <PageHeader />
            <ResponsiveContainer>
                <section className="flex flex-col lg:flex-row bg-dark my-[60px] lg:my-[100px] p-[50px] lg:p-[80px] rounded-[16px]">
                    <article className="lg:flex-1 justify-center lg:pr-[80px]">
                        <h3 className="text-[24px] text-center text-ocre italic">Got a lit track in mind</h3>
                        <h1 className="text-[36px] font-bold text-center text-white">Let's Connect</h1>

                        <form className="mt-[52px] lg:mt-[82px]">
                            <div className="flex flex-col lg:flex-row lg:space-x-6">
                                <input type="text" placeholder="Your name" className="w-full lg:w-1/2 bg-dark border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none" />
                                <input type="text" placeholder="Phone / Email" className="mt-[15px] lg:mt-[0px] w-full lg:w-1/2 bg-dark border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none" />
                            </div>
                            <textarea placeholder="Message" className="w-full bg-dark border-2 border-midgrey mt-[38px] h-[168px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none"></textarea>
                            <div className="w-full flex justify-center lg:justify-end">
                                <button className="bg-ocre text-dark block leading-[56px] mt-[120px] lg:mt-[38px] rounded-[6px] w-full lg:w-[60%] text-center text-lg font-light transition-all hover:bg-gold">
                                    <span className="mr-3">Share your details</span>
                                    <span className="arrow"></span>
                                </button>
                            </div>
                        </form>
                    </article>

                    <article className="lg:flex-1 mt-[100px] lg:mt-[0px]">
                        <Link href="/" className="flex justify-center"><Image src="/assets/images/HPA-logo.webp" width={144} height={32} alt="HPA Logo" /></Link>

                        <div className="text-center lg:text-left lg:pl-[80px] mt-[100px] lg:mt-[140px] lg:mt-[138px]">   
                            <p className="text-white italic">Write to us on:</p>
                            <p className="text-ocre italic">contact@hpapla.net</p>   
                        </div>

                        <div className="mt-[270px] pl-[80px]">
                            <a className="inline-block mr-6 text-white" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/insta.png" width={24} height={24} alt="InstagramIMG" /></a>
                            <a className="inline-block mr-6" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/youtube.png" width={34} height={34} alt="YoutubeIMG" /></a>
                            <a className="inline-block" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/tiktok.png" width={24} height={24} alt="TiktokIMG" /></a> 
                        </div>
			        </article>
                </section>
            </ResponsiveContainer>
            <PagePFooter />
            <PageFooter />
        </>
        
        
    );
}