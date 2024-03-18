// import React from 'react';

import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="description h-[300px] bg-white">
            <h1 className="text-3xl text-black">Footer</h1>
            <Link to="Heads" smooth={true} duration={900}>Top</Link>
        </footer>
    );
};

export default Footer;

