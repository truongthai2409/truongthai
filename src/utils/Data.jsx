import { Fragment } from 'react';
// import { TbFlagFilled } from "react-icons/tb";
import { GiAchievement } from "react-icons/gi";

const Data = [
    {
        title: "Skills",
        id: "skills",
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
                {/* <div className="mt-5 overflow-hidden skills skills_top ">
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
                </div> */}
            </Fragment>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <Fragment>
                <ul>
                    <li>
                        <h1>
                            <img className='inline-block mr-2' width="23" height="23" src="https://img.icons8.com/arcade/64/flag.png" alt="flag" />2020 - 2024
                        </h1>
                        <h1 className='ml-10'>Study Ton Duc Thang University</h1>
                    </li>
                    <li>
                        <h1>
                            <img className='inline-block mr-2' width="23" height="23" src="https://img.icons8.com/arcade/64/flag.png" alt="flag" />Apr 2023 - Jun 2023
                        </h1>
                        <h1 className='ml-10'>Intern Frontend Developer in R2S Corporation </h1>
                    </li>
                </ul>
            </Fragment>
        ),
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <Fragment>
                <ul>
                    <li>
                        <a className='hover:text-amber-300' href='https://www.coursera.org/account/accomplishments/certificate/URF6VKZL6QHU' target='_blank' >
                            <GiAchievement className='inline-block mr-2 text-xl text-amber-300' />AWS Cloud Technical Essentials
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-amber-300' href='https://fullstack.edu.vn/cert/8msjq' target='_blank' >
                            <GiAchievement className='inline-block mr-2 text-xl text-amber-300' />JavaScript Advanced
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-amber-300' href='https://www.udemy.com/certificate/UC-c02359da-d267-4a5e-ae7a-9fee02537c5d/' target='_blank' >
                            <GiAchievement className='inline-block mr-2 text-xl text-amber-300' />Master JavaScript Animations with Greensock
                        </a>
                    </li>
                </ul>
            </Fragment>
        ),
    }
]

export default Data;