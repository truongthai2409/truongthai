// import React from 'react';

import { Element } from "react-scroll";
// import ProjectCard from "../compoments/ProjectCard";
import Form from "../compoments/Form";

const Contact = () => {
    return (
        <Element name="Contact">
            <section className="description h-[100vh] bg-image">
                <div className="flex items-center justify-center">
                    {/* <h1 className="text-3xl text-white">Contact</h1> */}
                    <div className="max-w-screen-xl">
                        <h1 className="p-4 text-4xl text-center text-white">Contact</h1>
                        <div className="relative grid grid-cols-2 grid-rows-1 gap-none bg-light rounded-xl">
                            {/* <ProjectCard ></ProjectCard> */}
                            <img className="h-[75vh] rounded-tl-xl rounded-bl-xl object-cover" src="images/111.jpg" alt="" />
                            <Form ></Form>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Contact;