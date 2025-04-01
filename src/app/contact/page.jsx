import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Image from "next/image";
export default function Contact() {
    return (
        <>
            <PageHeader />
            <section className="w-full h-screen bg-">
                <article className="container mx-auto bg-dark flex rounded-[16px] py-[85px] px-[80px]">
                    <section className="flex-1 p-12">
                        <h3 className="text-[24] text-center text-ocre italic">Got a lit track in mind</h3>
                        <h1 className="text-[36px] font-bold text-center text-white">Let's Connect</h1>

                        <form className="pt-[82px]">
                            <div className="flex space-x-6">
                                <input type="text" placeholder="Your name" className="w-1/2 bg-dark border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none" />
                                <input type="text" placeholder="Phone / Email" className="w-1/2 bg-dark border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none" />
                            </div>
                            <textarea placeholder="Message" className="w-full bg-dark border-2 border-midgrey mt-[38px] h-[168px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none"></textarea>
                            <div className="w-full flex justify-end">
                                <button className="bg-ocre text-dark block leading-[56px] mt-[38px] rounded-[6px] w-[60%] text-center text-lg font-light transition-all hover:bg-gold">
                                    <span className="mr-3">Share your details</span>
                                    <span className="arrow"></span>
                                </button>
                            </div>
                        </form>
                    </section>

                    <section className="flex-1 p-12">
                        <div className="flex justify-center">
                            <button className="items-center border border-ocre w-[180px] h-[48px]">
                                <a href="" className="block text-ocre">HPA Records</a>
                            </button>
                        </div>

                        <div className="pl-[78px] mt-[115px]">
                            <div>
                                <p className="text-white italic">WhatsApp us on:</p>
                                <p className="text-ocre italic">+91 - 00000 00000</p>
                            </div>
                            <div className="mt-[46px]">
                                <p className="text-white italic">Write to us on:</p>
                                <p className="text-ocre italic">contact@hpaplanet.com | hello@hpaplanet.com</p>
                            </div>
                        </div>

                        <div className="mt-[165px] pl-[78px]">
                            <a className="inline-block mr-6 text-white" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/insta.png" width={24} height={24} alt="InstagramIMG" /></a>
                            <a className="inline-block mr-6" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/youtube.png" width={34} height={34} alt="YoutubeIMG" /></a>
                            <a className="inline-block" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/tiktok.png" width={24} height={24} alt="TiktokIMG" /></a> 
                        </div>
			        </section>
                </article>
            </section>
            <PagePFooter />
            <PageFooter />
        </>
        
        
    );
}