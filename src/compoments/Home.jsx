// import React from 'react';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <Element name="Home">
            <section className="bg-image description h-[100vh] w-full flex">
                <div className="w-1/2 my-auto text-slate-300">
                    <h2 className="text-4xl">Hi everyone</h2>
                    <h1 className="font-bold text-8xl">
                        I&apos;m a Frontend Developer
                    </h1>
                    <span>Frontend magic, creating websites like a pro! </span><br />
                    <span>Creating frontend designs that are fresh and exciting </span>
                </div>
                <div className="w-1/2">
                    {/* <img src="../../public/images/profile.jpg"
                    alt=""
                    className="object-cover w-full h-full"
                /> */}
                </div>
            </section>
        </Element>
    );
};

export default Home;