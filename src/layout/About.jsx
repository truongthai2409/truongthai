import gsap from 'gsap';
import { useState, useRef, useTransition } from 'react';
import { Element } from 'react-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useViewPort } from '../hooks/useViewPort.jsx';
import TabButton from '../compoments/TabButton.jsx';
import Data from '../utils/Data.jsx';
import { useGSAP } from '@gsap/react';

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();
    
    const { width } = useViewPort();
    const isMobile = width <= 768; // Điều kiện cho mobile nếu độ rộng <= 768px
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    useGSAP(() => {
        gsap.from(".about", {
            opacity: 0,
            x: 200,
            duration: 3,
            scrollTrigger: {
                trigger: ".about",
                // markers: true
            }
        })
    }, { scope: container })



    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (

        <Element name='About'>
            <section ref={container} className="w-full h-auto p-10 overflow-hidden About text-slate-100 bg-image">
                {isMobile ? (
                    // Giao diện cho màn hình mobile
                    <div className="flex flex-col items-center justify-center max-w-screen-xl text-center about">
                        <div className="relative">
                            {/* Nền mờ lớn hơn */}
                            <div className="absolute w-full h-full scale-110 bg-center bg-cover rounded-lg opacity-50 inset-4 blur-lg"
                                style={{ backgroundImage: "url('images/profile.jpg')" }}>
                            </div>

                            {/* Ảnh chính */}
                            <img className="relative z-10 object-cover rounded-lg sm-max:outline-none aspect-square"
                                src="images/profile_rmbg.jpg" alt="" />
                        </div>

                        <h1 className="mt-2 text-3xl">About Me</h1>
                        <span>
                            I design interactive experiences for the web. Using HTML, CSS, and JavaScript.
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
                ) : (
                    // Giao diện cho màn hình PC
                    <div className="flex items-center justify-center">
                        <div className='flex max-w-screen-xl about bg-blur '>
                            <div className='w-2/5 p-10'>
                                <img className='object-cover w-full h-[75vh] border rounded-lg' src="images/profile.jpg" alt="" />
                            </div>
                            <div className='w-3/5 p-8'>
                                <h1 className="text-5xl">About Me</h1>
                                <span>I design beautiful, interactive experiences for the web.</span>
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
                )}
            </section>
        </Element>
    );
};

export default About;
