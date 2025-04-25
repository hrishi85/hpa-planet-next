import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import Image from "next/image";
import Link from "next/link";
import { shortenTextByWords } from "@/utils";

const baseURL = process.env.STRAPI_API_URL || 'http://localhost:1337';

async function fetchNews() {
	try {
		const res = await fetch(`${baseURL}/api/newsp?populate=tags&populate=banner&populate=comments`, { cache: 'no-store' });

		if (!res.ok) {
			throw new Error(`Failed to fetch news: ${res.statusText}`);
		}
  
		const data = await res.json();
    	return data?.data || [];

	} catch (err) {
		console.error('Error fetching news:', err);
    	return [];
	}
}

export default async function News() {
    const news = await fetchNews();

    if (news.length === 0) {
        return <div className="w-full h-full p-12 flex items-center justify-center">
            <p className="text-white">No news found</p>
        </div>;
    } 

    return (
        <>
            <PageHeader />
            <section className="w-full py-12">
                <ResponsiveContainer>
                    <div className="w-full block md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            news.length > 0 && (
                                news.map((newsItem) => {
                                    const shortDescription = shortenTextByWords(newsItem.description[0].children[0].text, 20);
                                    return (
                                        <article key={newsItem.id} className="bg-midgrey p-4 rounded-xl">
                                            <Image src={`http://localhost:1337${newsItem.banner.url}`} alt={newsItem.title} className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
                                            <h2 className="text-[24px] font-bold mb-2 text-white">{newsItem.title}</h2>
                                            <p className="text-gray-300 text-sm mb-4">{shortDescription}</p>
                                            <Link href={`/news/${newsItem.documentId}`} className="text-yellow-400 font-semibold">Read more</Link>
                                        </article>
                                    );
                                })
                            )
                        }
                    </div>
                </ResponsiveContainer>
            </section>
            <PagePFooter />
            <PageFooter />
        </>
    );
}