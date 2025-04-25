import Image from "next/image";
import Link from "next/link";
export default function PagePFooter(){
    return(
        <section className="bg-dark">
            <article className="container mx-auto flex text-white py-8">
                <div className="w-1/3">
                    <Link href="/" className="block text-ocre">
                        <Image src="/assets/images/HPA-logo.webp" width={144} height={32} alt="HPA Logo" />
                    </Link>
                </div>
                <div className="footer_list w-1/3 flex justify-center items">
                    <ul className="list-disc pl-5 text-white">
                        <li><a className="uppercase text-[16px] leading-8" href="#">About Us</a></li>
                        <li><a className="uppercase text-[16px] leading-8" href="#">Artists</a></li>
                        <li><a className="uppercase text-[16px] leading-8" href="#">News</a></li>
                    </ul>
                </div>
                <div className="w-1/3 text-right">
                    <a className="inline-block mr-6 text-white" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/insta.png" width={24} height={24} alt="InstagramIMG" /></a>
                    <a className="inline-block mr-6" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/youtube.png" width={34} height={34} alt="YoutubeIMG" /></a>
                    <a className="inline-block" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/tiktok.png" width={24} height={24} alt="TiktokIMG" /></a> 
                    </div>
            </article>
	    </section>

    )
}