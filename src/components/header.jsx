"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';


import { AnimatePresence, motion } from "framer-motion";
import { getURL } from "next/dist/shared/lib/utils";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

const menuItems = [
	{ title: "Home", route: "/", key: "home" },
	{ title: "About Us", route: "/about", key: "about" },
	{ title: "Artists", route: "/artists", key: "artists" },
	{ title: "News", route: "/news", key: "news" },
	{ title: "Contact", route: "/contact", key: "contact" },
	{ title: "Sign In", route: `/login`, key: "login" },
	{ title: "Sign up", route: "/signup", key: "register" },
];

const menuVariants = {
	hidden: {
		opacity: 0,
		height: 0,
		transition: {
			when: 'afterChildren',
		},
	},
	visible: {
		opacity: 1,
		height: 'auto',
		transition: {
		when: 'beforeChildren',
			staggerChildren: 0.1,
		},
	},
  };
  
const linkVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0 },
};

export default function PageHeader() {

	const [isMenuActive, setIsMenuActive] = useState(false);

	const pathname = usePathname();

    return(
		<>
			<header className="bg-dark/85 fixed w-full left-0 top-0 z-50 backdrop-blur-lg">
				<div className="container px-6 lg:px-0 mx-auto h-[60px] lg:h-[100px] flex justify-between items-center relative">
					<Link href="/" className="block text-ocre">
						<Image src="/assets/images/HPA-logo.webp" width={144} height={32} alt="HPA Logo" />
					</Link>
					<button className={`menu-toggle bg-subtle-gold relative flex justify-center items-center border-none transition-all cursor-pointer w-[48px] h-[48px] ${isMenuActive ? "active" : ""}`} onClick={() => setIsMenuActive(!isMenuActive)}>
						<div className="inner-wrapper bg-dark w-[46px] h-[46px] flex justify-center items-center">
							<div className="menu-bar absolute bg-subtle-gold w-[24px] h-[1.5px] transition-all" data-position="top"></div>
							<div className="menu-bar absolute bg-subtle-gold w-[24px] h-[1.5px] transition-all" data-position="bottom"></div>
						</div>
					</button>
					<AnimatePresence>
  						{ isMenuActive && (
							<motion.nav className="menu bg-dark absolute top-[60px] lg:top-[100px] right-0 w-[180px] h-auto z-50" initial="hidden" animate="visible" exit="hidden" variants={menuVariants}>
								<motion.ul className="flex flex-col gap-4 p-6">
									{
										menuItems.map((item) => (
											<motion.li key={item.key} variants={linkVariants} className=" text-lg leading-[1.2em]">
												{
													item.key === "login" ? (
														<Link href={item.route} target="_blank" rel="noopener noreferrer">{item.title}</Link>
													) : (
														<Link href={item.route} className={`${pathname === item.route ? "text-ocre" : "text-silver"}`}>{item.title}</Link>
													)
												}
											</motion.li>
										))
									}
								</motion.ul>
							</motion.nav>
						)}
					</AnimatePresence>
				</div>
			</header>
			{/* {isMenuActive && (
				<motion.div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={() => setIsMenuActive(false)} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} />
			)} */}
		</>
    )
}