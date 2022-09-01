import React from 'react';

import globe from "../imgicons/globe2.svg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={globe} className="globe" Travel Journal />
           <h1 className="title"> Travel Journal </h1>
        </nav>
    )
}