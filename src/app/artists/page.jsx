import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Image from "next/image";
import Link from "next/link";
import { getURL } from "@/utils";


const getArtists = async () => {
	const url = getURL("/api/artists?populate=profilePic");
	const res = await fetch(url, { cache: 'no-store' });
  
	if (!res.ok) {
		throw new Error('Failed to fetch articles');
	}
  
	const data = await res.json();
	return data;
};

const getTrack = async () => {
	const url = getURL("/api/tracks?populate=banner&pagination[limit]=1");
	const res = await fetch(url, { cache: 'no-store' });
  
	if (!res.ok) {
		throw new Error('Failed to fetch articles');
	}
  
	const data = await res.json();
	return data.data[0];
};

export default async function Artists() {

	const artists = await getArtists();
	const track = await getTrack();
	
	if (!artists || artists.data.length === 0) {
		return <div className="w-full bg-dark py-[4vw] flex items-center justify-center">
			<p className="text-white text-center">- Artists not found -</p>
		</div>;
	}

	return (
		<>
			<PageHeader />
			{
				track && (
					<section className={`w-full h-screen relative`}>
						 <Image src={getURL(track.banner.url)} alt="HPA planet recently released track" layout="fill" objectFit="cover" priority />
						<div className=" hero-header-bg absolute left-0 top-0 right-0 bottom-0 z-10"></div>
					</section>
				)
			}
			
			<section className="bg-darkgrey pb-[100px]">
				<article className="container mx-auto">
					<h1 className="text-[34px] lg:text-[48px] text-subtle-gold text-center py-[80px]">ARTISTS</h1>
					<section className="grid lg:grid-cols-4 lg:gap-12">
						{
							artists.data.map((artist) => {
								return <article key={artist.documentId} className="bg-dark p-10 mb-16">
									<Image className="block" src={getURL(artist.profilePic.url)} alt={`${artist.firstName} ${artist.lastName}`} width={247} height={275} style={{width:"100%", height:"auto"}} />
									<h3 className="text-ocre font-bold text-[24px] py-4"> { artist.stageName } </h3>
									<Link className="block w-full h-[46px] leading-[46px] text-center text-dark text-[16px] bg-subtle-gold" href={`/artists/${artist.documentId}`}>View Profile</Link>
								</article>
							})
						}
					</section>
				</article>
			</section>
			<PagePFooter />
			<PageFooter />
		</>
		
		
	);
}
