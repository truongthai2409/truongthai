import { useState, useRef } from 'react';
import { Element } from 'react-scroll';
import { useTransition } from 'react';
import TabButton from '../compoments/TabButton.jsx'
import Data from '../utils/Data.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

const About = () => {

    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();
   
    useGSAP(() => {
        gsap.from(".about",{
            opacity: 0,
            x: 200,
            duration: 3,
            scrollTrigger: {
                trigger: ".about",
                // markers: true
            }
        })
    }, {scope: container})

    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <Element name='About'>
            <section ref={container} className="w-full h-auto p-10 overflow-hidden About text-slate-100 bg-image">
                <div className="flex items-center justify-center">
                    <div  className='flex max-w-screen-xl about bg-blur '>
                        <div className='w-2/5 p-10 '>
                            <img className='object-cover w-full h-[75vh] border rounded-lg ' src="images/profile.jpg" alt="" />
                            {/* <img className='object-cover w-full h-[75vh] border rounded-lg ' src="" alt="" /> */}
                        </div>
                        <div className='w-3/5 p-8'>
                            <h1 className="w-full text-5xl">About Me</h1>
                            <span>
                                I design beautiful, interactive experiences for the web. Using HTML, CSS, and JavaScript. I collaborate with designers and back-end developers to turn ideas into stunning realities
                            </span>
                            <span>
                                . I love to sing, play sports, and travel. In the future, I want to go to a country with snow so I can experience!
                            </span>
                            <div>
                                <ul className="h-auto mt-3 text-slate-700">
                                    {Data.map(item => (
                                        <TabButton
                                            key={item.id}
                                            onClick={() => handleTabChange(item.title)}
                                            isActive={tab === item.title}
                                        >
                                            {item.title}
                                        </TabButton>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-5">
                                {isPending && <div>Loading...</div>}
                                {tab === 'Skills' && Data[0].content}
                                {tab === 'Experience' && Data[1].content}
                                {tab === 'Certification' && Data[2].content}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default About;

