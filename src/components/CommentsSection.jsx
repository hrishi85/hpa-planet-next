"use client"
import { useState } from "react"
import CommentForm from "./CommentForm";

export default function CommentsSection({ newsComments, newsDocumentId }) {
    const [comments, setComments] = useState(newsComments || []);

    const handleNewComment = (newComment) => {
        setComments((prev) => [...prev, newComment]);
    };

    return (
        <article className="w-full bg-dark px-[2vw] py-[1.5vw] lg:flex">
            <section className="flex-1">
                <CommentForm newsId={newsDocumentId} onNewComment={handleNewComment} />
            </section>
            <section className="flex-1">
                {
                    comments && comments.length > 0 ? (
                        comments.map((comment, index) => {
                            return (
                                <div key={index} className="w-full bg-darkgrey p-4 rounded-lg mb-4">
                                    <h3 className="text-white text-[18px] font-bold">{comment.name}</h3>
                                    <p className="text-silver text-[14px]">- {comment.comment}</p>
                                </div>
                            );
                        })
                    ) : (
                        <div className="w-full h-full flex items-center justify-center pt-[10vw] pb-[15vw]">
                            <h2 className="text-silver">- No commnets to display -</h2>
                        </div>
                    )
                }
            </section>
        </article>
    );
}