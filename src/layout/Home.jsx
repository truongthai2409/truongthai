// import React from 'react';
import { Element } from 'react-scroll';
import Earth_3D from '../utils/Earth_3D';


const Home = () => {
    return (
        <Element name="Home">
            <section className="flex items-center justify-center bg-image">
                <div className="max-w-screen-2xl h-[100vh] flex text-slate-300">
                    <div className="w-3/5 pl-20 my-auto">
                        <h2 className="text-4xl">I&apos;m Truong Thai</h2>
                        <h1 className="font-bold text-8xl">
                            Frontend Web Developer
                        </h1>
                        <span>Frontend magic, creating websites like a pro! </span><br />
                        <span>Creating frontend designs that are fresh and exciting </span>
                    </div>
                    <div className="w-2/5">
                        <Earth_3D></Earth_3D>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Home;