// import React from 'react';
import { Element } from 'react-scroll';
import Earth_3D from '../utils/Earth_3D';


const Home = () => {
    return (
        <Element name="Home">
            <section className="bg-image h-[100vh] w-full flex text-slate-300">
                <div className="w-3/5 my-auto pl-7">
                    <h2 className="text-4xl">I&apos;m Truong Thai</h2>
                    <h1 className="font-bold text-8xl">
                        Frontend Web Developer
                    </h1>
                    <span>Frontend magic, creating websites like a pro! </span><br />
                    <span>Creating frontend designs that are fresh and exciting </span>
                </div>
                <div className="w-2/5">
                    {/* <img src="../../public/images/profile.jpg"
                    alt=""
                    className="object-cover w-full h-full"
                /> */}
                    <Earth_3D></Earth_3D>
                </div>
            </section>
        </Element>
    );
};

export default Home;