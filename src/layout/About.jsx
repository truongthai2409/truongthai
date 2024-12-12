import gsap from 'gsap';
import { useState, useRef, useTransition } from 'react';
import { Element } from 'react-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useViewPort } from '../hooks/useViewPort.jsx';
import TabButton from '../compoments/TabButton.jsx';
// import Data from '../utils/Data.jsx';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';
import { GiAchievement } from "react-icons/gi";

const About = () => {
    const { t } = useTranslation('main');
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();

    const { width } = useViewPort();
    const isMobile = width <= 768;
    const [tab, setTab] = useState("skills");
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

    let Data = [
        {
            title: t('skillsTL'),
            id: "skills",
            key: 0,
            content: (
                <Fragment>
                    <div className="overflow-hidden skills skills_top ">
                        <div className='flex skills_slide_right'>
                            <img src="images/icon/html.webp" alt="" />
                            <img src="images/icon/css.webp" alt="" />
                            <img src="images/icon/javascript.png" alt="" />
                            <img src="images/icon/typescript.png" alt="" />
                            <img src="images/icon/tailwind.png" alt="" />
                            <img src="images/icon/bootstrap.png" alt="" />
                            <img src="images/icon/html.webp" alt="" />
                            <img src="images/icon/css.webp" alt="" />
                            <img src="images/icon/javascript.png" alt="" />
                            <img src="images/icon/typescript.png" alt="" />
                            <img src="images/icon/tailwind.png" alt="" />
                            <img src="images/icon/bootstrap.png" alt="" />
                        </div>
                    </div>
                    <div className="mt-5 overflow-hidden skills skills_top">
                        <div className='flex skills_slide_left'>
                            <img src="images/icon/react2.png" alt="" />
                            <img src="images/icon/sass.png" alt="" />
                            <img src="images/icon/nodejs.png" alt="" />
                            <img src="images/icon/pug.png" alt="" />
                            <img src="images/icon/ubuntu.png" alt="" />
                            <img src="images/icon/mb5.png" alt="" />
                            <img src="images/icon/react2.png" alt="" />
                            <img src="images/icon/sass.png" alt="" />
                            <img src="images/icon/pug.png" alt="" />
                            <img src="images/icon/nodejs.png" alt="" />
                            <img src="images/icon/mongodb.png" alt="" />
                            <img src="images/icon/ubuntu.png" alt="" />
                        </div>
                    </div>
                </Fragment>
            )
        },
        {
            title: t('experienceTL'),
            id: "experience",
            key: 1,
            content: (
                <Fragment>
                    <ul>
                        <li>
                            <h1>
                                <img className='inline-block mr-2' width="23" height="23" src="https://img.icons8.com/arcade/64/flag.png" alt="flag" />2020 - 2024
                            </h1>
                            <h1 className='ml-10'>{t('studyTL')}</h1>
                        </li>
                        <li>
                            <h1>
                                <img className='inline-block mr-2' width="23" height="23" src="https://img.icons8.com/arcade/64/flag.png" alt="flag" />Apr 2023 - Jun 2023
                            </h1>
                            <h1 className='ml-10'>{t('internTL')}</h1>
                        </li>
                    </ul>
                </Fragment>
            ),
        },
        {
            title: t('certificationTL'),
            id: "certification",
            key: 2,
            content: (
                <Fragment>
                    <ul>
                        <li>
                            <a className='hover:text-amber-300' href='https://www.coursera.org/account/accomplishments/certificate/URF6VKZL6QHU' target='_blank' >
                                <GiAchievement className='inline-block mr-2 text-xl text-amber-300' />{t('awsTL')}
                            </a>
                        </li>
                        <li>
                            <a className='hover:text-amber-300' href='https://fullstack.edu.vn/cert/8msjq' target='_blank' >
                                <GiAchievement className='inline-block mr-2 text-xl text-amber-300' /> {t('jsTL')}
                            </a>
                        </li>
                        <li>
                            <a className='hover:text-amber-300' href='https://www.udemy.com/certificate/UC-c02359da-d267-4a5e-ae7a-9fee02537c5d/' target='_blank' >
                                <GiAchievement className='inline-block mr-2 text-xl text-amber-300' />{t('animationTL')}
                            </a>
                        </li>
                    </ul>
                </Fragment>
            ),
        }
    ]

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

                        <h1 className="mt-2 text-3xl">{t('aboutMeTL')}</h1>
                        <span>
                            {t('spanAboutTL')}
                            {/* I design interactive experiences for the web. Using HTML, CSS, and JavaScript. */}
                        </span>
                        <div>
                            <ul className="h-auto mt-3 text-slate-700">
                                {Data.map(item => (
                                    <TabButton
                                        key={item.id}
                                        onClick={() => handleTabChange(item.id)}
                                        isActive={tab === item.id}
                                    >
                                        {item.title}
                                    </TabButton>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5">
                            {isPending && <div>Loading...</div>}
                            {tab === 'skills' && Data[0].content}
                            {tab === 'experience' && Data[1].content}
                            {tab === 'certification' && Data[2].content}
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
                                <h1 className="text-5xl">{t('aboutMeTL')}</h1>
                                <span>{t('spanAboutTL')}
                                    {/* I design beautiful, interactive experiences for the web. */}
                                </span>
                                <div>
                                    <ul className="h-auto mt-3 text-slate-700">
                                        {Data.map(item => (
                                            <TabButton
                                                key={item.id}
                                                onClick={() => handleTabChange(item.id)}
                                                isActive={tab === item.id}
                                            >
                                                {item.title}
                                            </TabButton>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-5">
                                    {isPending && <div>Loading...</div>}
                                    {tab === 'skills' && Data[0].content}
                                    {tab === 'experience' && Data[1].content}
                                    {tab === 'certification' && Data[2].content}
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
