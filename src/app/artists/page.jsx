import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Image from "next/image";
import Link from "next/link";
export default function Artists() {
	return (
		<>
			<PageHeader />
			<section>
				<Image src="/assets/images/artists/artist_banner/cold-world-track.webp" alt="artist banner" width={1728} height={726} style={{width:"100%", height:"auto"}} />
			</section>
			
			<section className="bg-darkgrey pb-[100px]">
				<article className="container mx-auto">
					<h1 className="text-[34px] lg:text-[48px] text-subtle-gold text-center py-[80px]">ARTISTS</h1>
					
					<section className="grid lg:grid-cols-4 lg:gap-12">
						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/ghost-flow.webp" alt="artist1" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Ghost Flow</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>

						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/lil-nebula.webp" alt="artist2" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Lil' Nebula</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>

						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/brick-beatz.webp" alt="artist3" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Brick Beatz</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>

						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/zen-rhyme.webp" alt="artist4" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Zen Rhyme</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>
					
						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/vortex-spit.webp" alt="artist5" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Vortex Spit</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>

						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/echo-blade.webp" alt="artist6" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Echo Blade</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>

						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/velvet-vibe.webp" alt="artist7" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Velvet Vibe</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>

						<article className="bg-dark p-10 mb-16">
							<Image className="block" src="/assets/images/artists/profiles/cold-world.webp" alt="artist8" width={247} height={275} style={{width:"100%", height:"auto"}} />
							<h3 className="text-ocre font-bold text-[24px] py-4">Cold World</h3>
							<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href="#">View Profile</Link>
						</article>
					</section>
				</article>
			</section>
			<PagePFooter />
			<PageFooter />
		</>
		
		
	);
}
