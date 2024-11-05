// import React from 'react';
import { Element } from 'react-scroll';
import Earth_3D from '../utils/Earth_3D';
import ButtonTop from '../compoments/ButtonTop';


const Home = () => {
    return (
        <Element name="Home">
            <section className="flex items-center justify-center bg-image">
                <div className="max-w-screen-2xl h-[100vh] sm-max:h-[90lvh] flex text-slate-300">
                    <div className="w-3/5 pl-20 my-auto">
                        <div className="flex items-center top_head">
                            <h2 className="text-4xl sm-max:text-2xl">Hi. I&apos;m Truong Thai</h2>
                            <img
                                className="object-cover ml-4 w-11"
                                src="images/hand.gif"
                                alt="hand waving"
                            />
                        </div>
                        <h1 className="font-bold text-8xl sm-max:text-[55px]">
                            Frontend Web Developer
                        </h1>
                        <span>Frontend magic, creating websites like a pro! </span><br />
                        <span>Creating frontend designs that are fresh and exciting </span>
                    </div>
                    <div className="w-2/5 sm-max:hidden">
                        <Earth_3D />
                    </div>
                    <ButtonTop />
                </div>
            </section>
        </Element>
    );
};

export default Home;