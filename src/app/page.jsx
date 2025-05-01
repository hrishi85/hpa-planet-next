import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Services from "@/components/Home/services";
import History from "@/components/Home/history";
import News from "@/components/Home/news";
import Contact from "@/components/Home/contact";
import HeroSection from "@/components/Home/hero";
import { getURL } from "@/utils";

async function fetchData() {
	try {
		const tracksURL = getURL(`/api/tracks?populate=banner&pagination[limit]=5`);
		const servicesURL = getURL(`/api/services?populate=thumbnail`);
		const newpsURL = getURL(`/api/newsp?pagination[limit]=4&populate=banner`);
		const historyURL = getURL(`/api/history`);

		const [tracksRes, servicesRes, newspRes, historyRes] = await Promise.all([
			fetch(tracksURL).then(res => res.json()),
			fetch(servicesURL).then(res => res.json()),
			fetch(newpsURL).then(res => res.json()),
			fetch(historyURL).then(res => res.json()),
		]);
  
		return {
			tracks: tracksRes.data || [],
			services: servicesRes.data || [],
			newsp: newspRes.data || [],
			history: historyRes.data || null,
			error: null,
		};
	} catch (err) {
		console.error('Fetch failed:', err);
		return {
			tracks: [],
			services: [],
			newsp: [],
			history: null,
			error: 'Failed to load content. Please try again later.',
	  	};
	}
}


export default async function Home() {

	const { tracks, services, newsp, history, error } = await fetchData();

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
			{
				history && history.companyHistory && ( <History history={history.companyHistory} /> )
			}
			{
				newsp && newsp.length > 0 && ( <News news={newsp} /> )
			}
			<Contact />
			<PagePFooter />
			<PageFooter />
		</>
	);
}
