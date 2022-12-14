import React from 'react';
import Link from "next/link";
import articleStyles from "../styles/Article.module.css"

export default function Article({article}) {
    return (
        <Link href ="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.id}. {article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}
