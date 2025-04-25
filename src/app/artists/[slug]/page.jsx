import Image from "next/image";
import Link from "next/link";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import Description from "@/components/DiscriptionRenderer";
import { getAgeFromBirthdate, getURL } from "@/utils";

const { format } = require('date-fns');

import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import TracksSlider from "@/components/TracksSlider";


const getArtist = async (slug) => {
	const url = getURL(`/api/artists/${slug}?populate=profilePic&populate=tracks&populate=tracks.banner`);
	const res = await fetch(url, { cache: 'no-store' });
	
	if (!res.ok) {
		throw new Error('Failed to fetch articles');
	}
	
	const data = await res.json();
	return data.data;
};

export default async function ArtistPage({ params }) {
	const { slug } = await params;

	const artist = await getArtist(slug);
	
	if (!artist) {
		return <div className="w-full bg-dark py-[2vw] flex items-center justify-center">
			<p className="text-silver text-center">- Artist not found -</p>
		</div>;
	}
	
	const { firstName, lastName, stageName, description } = artist;

	let age = "";
	if(artist.birthDate) {
		age = getAgeFromBirthdate(artist.birthDate);
	}
	const profilePic = artist.profilePic;

	return (
		<>
			<PageHeader />
			<ResponsiveContainer>
				<article className="bg-dark mt-[8vw] mb-[5vw] lg:flex">
					<section className="w-full lg:w-1/2 p-8 lg:p-0">
						{
							profilePic && 
							<Image className="w-full h-auto" src={getURL(profilePic.url)} width={500} height={500} alt={`${firstName} ${lastName}`} />
						}
					</section>
					<section className="w-full lg:w-1/2 p-[4vw]">
						<h3 className="text-subtle-gold ml-[30px] lg:ml-[0px] text-[16px] lg:text-[24px] font-medium">{ firstName } { lastName } AKA</h3>
						<h1 className="text-subtle-gold text-center lg:text-left text-[32px] lg:text-[48px] font-extrabold">{ stageName }</h1>
						<p className="text-silver ml-[30px] lg:ml-[0px] text-xl text-bold mb-[2vw]">Age : { age }</p>
						<Description description={description} height={300} />
					</section>
				</article>
				
				{
					artist.tracks && artist.tracks.length > 0 && (
						<section className="w-full">
							<TracksSlider tracks={artist.tracks} age={age} />
						</section>
					)
				}
			</ResponsiveContainer>	
			<PagePFooter />
			<PageFooter />
		</>
		
		
	);
}
