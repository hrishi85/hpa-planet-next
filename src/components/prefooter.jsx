import Image from "next/image";
import Link from "next/link";

const menuItems = [
	{ title: "Home", route: "/", key: "home" },
	{ title: "About Us", route: "/about", key: "about" },
	// { title: "Artists", route: "/artists", key: "artists" },
	// { title: "News", route: "/news", key: "news" },
	{ title: "Contact", route: "/contact", key: "contact" },
	// { title: "Sign In", route: "http://localhost:1337/admin", key: "login" },
	// { title: "Sign up", route: "/signup", key: "register" },
];

export default function PagePFooter() {
    return(
        <section className="bg-dark">
            <article className="container mx-auto lg:flex text-white py-8 px-6 lg:px-0">
                <div className="w-full lg:w-1/3 mb-12">
                    <Link href="/" className="block text-ocre text-center lg:text-left">
                        <Image src="/assets/images/HPA-logo.webp" width={144} height={32} alt="HPA Logo" className="inline-block mx-auto" />
                    </Link>
                </div>
                <div className="footer_list w-full lg:w-1/3 flex justify-center items">
                    <ul className="inline-block mx-auto lg:list-disc pl-5 text-white text-center lg:text-left mb-12">
                       {
                            menuItems.map((item) => (
                                <li key={item.key} className="text-lg leading-[2em] lg:leading-[1.2em]">
                                    <Link href={item.route} className={`text-silver`}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-full lg:w-1/3 text-right flex lg:block items-center justify-center mb-6">
                    <a className="inline-block mr-6 text-white" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/insta.png" width={24} height={24} alt="InstagramIMG" /></a>
                    <a className="inline-block mr-6" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/youtube.png" width={34} height={34} alt="YoutubeIMG" /></a>
                    <a className="inline-block" target="_blank" href="https://www.google.com"><Image src="/assets/images/footer/social/tiktok.png" width={24} height={24} alt="TiktokIMG" /></a> 
                    </div>
            </article>
	    </section>

    )
}