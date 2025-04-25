import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import DiscriptionRenderer from "@/components/DiscriptionRenderer";
import CommentsSection from "@/components/CommentsSection";

import News from '@/components/Home/news';

const baseURL = process.env.STRAPI_API_URL || 'http://localhost:1337';

const findNews = async (slug) => {
    const res = await fetch(`${baseURL}/api/newsp/${slug}?populate=banner&populate=comments&populate=tags`, { cache: 'no-store', });
    
    if (!res.ok) {
        throw new Error('Failed to fetch News articles');
    }
    
    const data = await res.json();
    return data.data;
};

const getNews = async (excludeId) => {
    const res = await fetch(`${baseURL}/api/newsp?filters[id][$ne]=${excludeId}&pagination[limit]=4&populate=banner`);

    if(!res.ok) {
        throw new Error("Failed to fetch News articles");
    }

    const data = await res.json();
    return data.data;
};

export default async function NewsPost({ params }) {
    const { slug } = params;

    const news = await findNews(slug);
    const allNews = await getNews(slug);
    
    if (!news) {
        return <div className="w-full h-full flex items-center justify-center">
            <p className="text-white text-center">News not found</p>
        </div>;
    }
    
    const { title, description } = news;

    let eventDate = "";
    if(news.eventDate) {
        let date = new Date(news.eventDate);
        eventDate = format(date, 'dd MMMM yyyy');
    }
    const banner = news.banner;

    return (
        <>
            <PageHeader />
            <section className="w-full">
                <ResponsiveContainer>
                    <article className="w-full my-[3vw] bg-dark flex">
                        <div className="w-3/5">
                            {
                                banner && (
                                    <Image className="w-full object-cover" src={`http://localhost:1337${banner.url}`} alt={title} width={1440} height={750} />
                                )
                            }
                        </div>
                        <section className="flex-1 px-[2.5vw] pt-[1.6vw] pb-[1vw]">
                            <h1 className="text-[32px] text-subtle-gold font-extrabold uppercase">{title}</h1>
                            <div className="flex mt-[15px]">
                                <h3 className="flex-1 text-[16px] italic text-white">Tags</h3>
                                <h3 className="flex-1 text-[24px] text-subtle-gold text-end mr-[60px]">{ eventDate }</h3>
                            </div>
                            <div className="flex flex-row gap-4 mt-[15px]">
                                {
                                    news.tags && news.tags.length > 0 && news.tags.map((tag, index) => (
                                        <Link href="#" key={index} className="inline-block h-[30px] leading-[30px] px-4 min-w-[50px] text-[14px] bg-darkgrey rounded-[20px] text-white text-center">
                                            { tag.displayName }
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className="mt-10 w-[90%] eb-garamond-400 text-silver text-md tracking-wide leading-[1.3em] pb-[3vw]">
                                <DiscriptionRenderer description={description} />
                            </div>
                        </section>
                    </article>
                    <CommentsSection newsComments={news.comments} newsDocumentId={news.documentId} />
                </ResponsiveContainer>
            </section>
            <section className="w-full">
                {
                    allNews && allNews.length > 0 && 
                    <News news={allNews} />
                }
            </section>
            <PagePFooter />
            <PageFooter />
        </>
        
        
    );
}
