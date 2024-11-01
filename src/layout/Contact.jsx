// import React from 'react';

import { Element } from "react-scroll";
import Form from "../compoments/Form";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Contact = () => {
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();

    useGSAP(() => {
        gsap.from(".contact_form",{
            opacity: 0,
            y: 200,
            duration: 2,
            scrollTrigger: {
                trigger: ".contact",
                // markers: true
            }
        })
    }, {scope: container})

    return (
        <Element name="Contact">
            <section ref={container} className="description h-[100vh] sm-max:h-[90vh] bg-image">
                <div className="flex items-center justify-center">
                    <div className="max-w-screen-xl contact_form contact">
                        <h1 className="p-4 text-4xl text-center text-white">Contact</h1>
                        <div className="relative grid grid-cols-2 grid-rows-1 gap-none bg-light rounded-xl">
                            <img  className="h-[75vh] rounded-tl-xl rounded-bl-xl object-cover" src="images/111.jpg" alt="" />
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Contact;