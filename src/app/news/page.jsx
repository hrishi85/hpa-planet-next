import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import Image from "next/image";
import Link from "next/link";
import { shortenTextByWords, getURL } from "@/utils";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

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
            {
                news.length > 0 && news[0].banner && news[0].banner.url && (
                    <section className="w-full bg-dark mt-[60px] lg:mt-0">
                        <Image src={getURL(news[0].banner.url)} alt={news[0].title} className="w-full h-auto" width={1920} height={1080} />
                    </section>
                )
            }
            <section className="w-full">
                <ResponsiveContainer>
                    <h1 className="text-subtle-gold text-center text-[22px] lg:text-[42px] font-bold mt-[12vw] lg:mt-[2vw]">News</h1>
                </ResponsiveContainer>
            </section>
            <section className="w-full py-12">
                <ResponsiveContainer>
                    <div className="w-full block md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            news.length > 0 && (
                                news.map((newsItem) => {
                                    const shortDescription = shortenTextByWords(newsItem.description[0].children[0].text, 20);
                                    return (
                                        <article key={newsItem.id} className="bg-midgrey p-4 rounded-xl mb-12">
                                            <Image src={getURL(newsItem.banner.url)} alt={newsItem.title} className="rounded-lg mb-4 w-full h-auto" width={425} height={240} />
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