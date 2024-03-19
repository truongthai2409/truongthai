// import React from 'react';

import { Element } from "react-scroll";
import ProjectCard from "../compoments/ProjectCard";

const Projects = () => {
    const ProjectName = {
        pops: 'POPS System',
        figma: 'Sweet Shop',
        chatapp: 'Chat App'
    }
    return (
        <Element name="Projects">
            <section className="h-[100vh] bg-image">
                <div className="flex items-center justify-center">
                    <div className="max-w-screen-xl">
                        <h1 className="p-4 text-4xl text-center text-white">My Projects</h1>
                        <div className="relative grid grid-cols-3 grid-rows-1 gap-5 bg-white rounded-xl">
                            <ProjectCard projectName={ProjectName.pops}></ProjectCard>
                            <ProjectCard projectName={ProjectName.figma}></ProjectCard>
                            <ProjectCard projectName={ProjectName.chatapp}></ProjectCard>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Projects;