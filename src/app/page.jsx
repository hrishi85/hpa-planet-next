import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Services from "@/components/Home/services";
import History from "@/components/Home/history";
import News from "@/components/Home/news";
import Contact from "@/components/Home/contact";
import HeroSection from "@/components/Home/hero";
import { getURL } from "next/dist/shared/lib/utils";

const baseURL = process.env.STRAPI_API_URL || 'http://localhost:1337';

async function fetchData() {
	try {
		const [tracksRes, servicesRes] = await Promise.all([
			fetch(`${baseURL}/api/tracks?populate=banner&pagination[limit]=5`).then(res => res.json()),
			fetch(`${baseURL}/api/services?populate=thumbnail`).then(res => res.json()),
			// fetch(`${baseURL}/api/newsp?pagination[limit]=4&populate=banner`).then(res => res.json()),
			// fetch(`${baseURL}/api/history`).then(res => res.json()),
		]);
  
		return {
			tracks: tracksRes.data || [],
			services: servicesRes.data || [],
			// newsp: newspRes.data || [],
			// history: historyRes.data || null,
			error: null,
		};
	} catch (err) {
		console.error('Fetch failed:', err);
		return {
			tracks: [],
			services: [],
			// newsp: [],
			// history: null,
			error: 'Failed to load content. Please try again later.',
	  	};
	}
}


export default async function Home() {

	const { tracks, services, error } = await fetchData();

	if (error) {
		return <div className="flex w-full h-full items-center justify-center text-red-600">{error}</div>;
	}

	return (
		<>
			<PageHeader />
			{
				tracks && tracks.length > 0 && ( <HeroSection tracks={tracks} /> )
			}
			{
				services && services.length > 0 && ( <Services services={services} /> )
			}
			{/* {
				history && history.companyHistory && ( <History history={history.companyHistory} /> )
			}
			{
				newsp && newsp.length > 0 && ( <News news={newsp} /> )
			} */}
			<Contact />
			<PagePFooter />
			<PageFooter />
		</>
	);
}
