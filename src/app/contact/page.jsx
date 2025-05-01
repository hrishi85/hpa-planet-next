import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Image from "next/image";
import Link from "next/link"
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <>
            <PageHeader />
            <ResponsiveContainer>
                <section className="flex flex-col lg:flex-row bg-dark my-[20vw] lg:my-[10vw] p-[50px] lg:p-[80px] rounded-[16px]">
                    <article className="lg:flex-1 justify-center lg:pr-[80px]">
                        <h3 className="text-[24px] text-center text-ocre italic">Got a lit track in mind</h3>
                        <h1 className="text-[36px] font-bold text-center text-white">Let's Connect</h1>

                        <ContactForm />
                    </article>

                    <article className="lg:flex-1 mt-[100px] lg:mt-[0px]">
                        <Link href="/" className="flex justify-center"><Image src="/assets/images/HPA-logo.webp" width={144} height={32} alt="HPA Logo" /></Link>

                        <div className="text-center lg:text-left lg:pl-[80px] mt-[100px] lg:mt-[140px]">   
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