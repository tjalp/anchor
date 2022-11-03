import React, { useEffect, useState } from "react";
import Link from "next/link";

function Post({post_id, title, content, redirect=undefined}) {

    const [postTitle, setPostTitle] = useState("Placeholder title");
    const [postContent, setPostContent] = useState("Placeholder content");

    useEffect(() => {
        if (title) {
            setPostTitle(title);
        }
        if (content) {
            setPostContent(content);
        }
    }, [])

    return(
        <Link href={`/posts/${post_id}${redirect ? `?r=${redirect}` : ''}`}>
            <div className="my-4 p-5 border border-slate-200 dark:border-neutral-600 bg-slate-50 dark:bg-zinc-700 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 cursor-pointer">
                <div className="text-2xl text-slate-900 dark:text-neutral-50">{title}</div>
                <div className="text-lg text-slate-600 dark:text-neutral-400">{content}</div>
            </div>
        </Link>
    );
}

export default Post;