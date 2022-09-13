import React from 'react';
import headerStyles from "../styles/Header.module.css"

export default function Header() {
    const colorRank = 3
    return (
        <div className={headerStyles.title}>
            <h1><span>Title</span></h1>
            <p className={headerStyles.description}>Keep updated with us</p>
            <style jsx>
                {`.title{color: ${colorRank > 2 ? 'cornflowerblue' : 'green'}`}
            </style>
        </div>
    )
}
