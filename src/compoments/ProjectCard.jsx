/* eslint-disable react/prop-types */
// import React from 'react';

import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line no-unused-vars
const ProjectCard = ({ projectName, ProjectURL, ProjectImage }) => {
    const { t } = useTranslation('main');
    return (
        <Fragment>
            <div className="w-[250px] flex flex-col h-[full] p-5 m-5 border rounded-lg bg-white">
                <img className="rounded-xl image-shadow h-[330px] object-contain" src={ProjectImage}alt="" />
                <div className="flex flex-col ">
                    <h1 className="flex justify-center px-3 py-3">{projectName}</h1>

                    <div className="px-6 py-3 mt-auto text-center capitalize transition duration-150 ease-out border hover:ease-in -full rounded-3xl hover:bg-slate-700 hover:text-white">
                        <a className="block" href={ProjectURL} target="_blank">
                            {t('visitedTL')}
                        </a>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default ProjectCard;