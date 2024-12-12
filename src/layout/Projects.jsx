import { Element } from "react-scroll";
import gsap from 'gsap';
import ProjectCard from "../compoments/ProjectCard";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ProjectName, ProjectURL, ProjectImage } from '../utils/DataProject';
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation('main');
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();

    useGSAP(() => {
        gsap.from(".project", {
            opacity: 0,
            y: -50,
            duration: 3,
            scrollTrigger: {
                trigger: ".project",
                end: "50px",
            }
        });
    }, { scope: container });

    return (
        <Element name="Projects">
            <section ref={container} className="h-auto sm:h-[100vh] bg-image py-10 sm:py-0">
                <div className="flex items-center justify-center">
                    <div className="max-w-screen-xl project">
                        <h1 className="p-4 text-3xl text-center text-white sm:text-4xl">{t('myProjectTL')}</h1>
                        <div className="relative grid grid-cols-1 gap-5 p-4 bg-white sm:grid-cols-3 rounded-xl sm:p-0">
                            <ProjectCard projectName={ProjectName.pops} ProjectURL={ProjectURL.pops} ProjectImage={ProjectImage.pops}></ProjectCard>
                            <ProjectCard projectName={ProjectName.figma} ProjectURL={ProjectURL.figma} ProjectImage={ProjectImage.figma}></ProjectCard>
                            <ProjectCard projectName={ProjectName.movie} ProjectURL={ProjectURL.movie} ProjectImage={ProjectImage.movie}></ProjectCard>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Projects;
