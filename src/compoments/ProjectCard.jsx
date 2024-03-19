/* eslint-disable react/prop-types */
// import React from 'react';

import { Fragment } from "react";

// eslint-disable-next-line no-unused-vars
const ProjectCard = ({projectName}) => {
    return (
        <Fragment>
            <div className="w-[250px] flex flex-col h-[full] p-5 m-5 border rounded-lg bg-white">
                <img className="rounded-xl image-shadow" src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2//sMp34cNKjIb18UBOCoAv4DpCxwY.jpg" alt="" />
                <div className="flex flex-col ">
                    <h1 className="flex justify-center px-3 py-3">{projectName}</h1>
                    <button className="px-6 py-3 mt-auto capitalize transition duration-150 ease-out border hover:ease-in -full rounded-3xl hover:bg-slate-700 hover:text-white">Visited</button>
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectCard;