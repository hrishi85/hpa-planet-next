import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Services from "@/components/Home/services";
import History from "@/components/Home/history";
import News from "@/components/Home/news";
import Contact from "@/components/Home/contact";
import HeroSection from "@/components/Home/hero";

export default function Home() {
	return (
		<>
			<PageHeader />
			<HeroSection />
			<Services />
			<History />
			<News />
			<Contact />
			<PagePFooter />
			<PageFooter />
		</>
		
		
	);
}
