// import { Fragment, useState } from 'react';
// import { Element } from 'react-scroll';
// import { animated } from 'react-spring';
// import { useTransition } from 'react';


// const Data = [
//     {
//         title: "Skills",
//         id: "skills",
//         content: (
//             <Fragment>
//                 <div className="overflow-hidden skills skills_top ">
//                     <div className='flex skills_slide_right'>
//                         <img src="images/icon/html.webp" alt="" />
//                         <img src="images/icon/css.webp" alt="" />
//                         <img src="images/icon/javascript.png" alt="" />
//                         <img src="images/icon/typescript.png" alt="" />
//                         <img src="images/icon/tailwind.png" alt="" />
//                         <img src="images/icon/bootstrap.png" alt="" />
//                         <img src="images/icon/html.webp" alt="" />
//                         <img src="images/icon/css.webp" alt="" />
//                         <img src="images/icon/javascript.png" alt="" />
//                         <img src="images/icon/typescript.png" alt="" />
//                         <img src="images/icon/tailwind.png" alt="" />
//                         <img src="images/icon/bootstrap.png" alt="" />
//                     </div>
//                 </div>
//                 <div className="mt-5 overflow-hidden skills skills_top">
//                     <div className='flex skills_slide_left'>
//                         <img src="images/icon/react2.png" alt="" />
//                         <img src="images/icon/sass.png" alt="" />
//                         <img src="images/icon/nodejs.png" alt="" />
//                         <img src="images/icon/pug.png" alt="" />
//                         <img src="images/icon/ubuntu.png" alt="" />
//                         <img src="images/icon/mb5.png" alt="" />
//                         <img src="images/icon/react2.png" alt="" />
//                         <img src="images/icon/sass.png" alt="" />
//                         <img src="images/icon/pug.png" alt="" />
//                         <img src="images/icon/nodejs.png" alt="" />
//                         <img src="images/icon/mongodb.png" alt="" />
//                         <img src="images/icon/ubuntu.png" alt="" />
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     },
//     {
//         title: "Experience",
//         id: "experience",
//         content: (
//             <Fragment></Fragment>
//         ),
//     },
//     {
//         title: "Certification",
//         id: "certification",
//         content: (
//             <Fragment></Fragment>
//         ),
//     }
// ]

// const About = () => {
//     const [tab, setTab] = useState("Skills");
//     const [isPending, startTransition] = useTransition();

//     const handleTabChange = (id) => {
//         startTransition(() => {
//             setTab(id);
//         });
//         console.log(Data)
//     };

//     const currentContent = Data.find(item => item.title === tab)?.content || null;

//     const transitions = useTransition(currentContent, null, {
//         from: { opacity: 0, transform: 'translateY(-100%)' },
//         enter: { opacity: 1, transform: 'translateY(0%)' },
//         leave: { opacity: 0, transform: 'translateY(-100%)' },
//     });

//     return (
//         <Element name='About'>
//             <section className="w-full h-auto p-10 text-white bg-image">
//                 <div className='flex w-full bg-black outline-double'>
//                     <div className='w-2/5 p-10'>
//                         <img className='object-cover w-full h-[75vh] border rounded-lg' src="/images/profile.jpg" alt="" />
//                     </div>
//                     <div className='w-3/5 p-8'>
//                         <h1 className="w-full text-5xl">About Me</h1>
//                         <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto exercitationem repellendus ipsam consectetur incidunt deleniti impedit, quidem molestiae esse, aperiam eos commodi cumque quae doloremque adipisci vero labore aut accusantium? </span>
//                         <div>
//                             <ul className="flex mt-3 text-slate-400">
//                                 {Data.map(item => (
//                                     <li
//                                         key={item.id}
//                                         className={`button_about ${tab === item.title ? 'button_about_active' : ''}`}
//                                         onClick={() => handleTabChange(item.title)}
//                                         onChange={()=> {}}
//                                     >
//                                         {item.title}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="mt-5">
//                             {isPending && <div>Loading...</div>}
//                             {transitions.map(({ item, key, props }) => (
//                                 item && (
//                                     <animated.div key={key} style={props}>
//                                         {item}
//                                     </animated.div>
//                                 )
//                             ))}
//                             {/* <div className="mt-8">
//                                 {Data.find((item) => item.id === tab).content}
//                             </div> */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Element>
//     );
// };

// export default About;
import { Fragment, useState } from 'react';
import { Element } from 'react-scroll';
import { useTransition, animated } from "react-spring"; // Import từ react-spring

const Data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <Fragment>
                <div className="overflow-hidden skills skills_top ">
                    <div className='flex skills_slide_right'>
                        <img src="images/icon/html.webp" alt="" />
                        {/* Các hình ảnh khác */}
                    </div>
                </div>
                <div className="mt-5 overflow-hidden skills skills_top">
                    <div className='flex skills_slide_left'>
                        <img src="images/icon/react2.png" alt="" />
                        {/* Các hình ảnh khác */}
                    </div>
                </div>
            </Fragment>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <Fragment></Fragment>
        ),
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <Fragment></Fragment>
        ),
    }
];

const About = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const currentContent = Data.find(item => item.title === tab)?.content || null;

    const transitions = useTransition(currentContent, null, {
        from: { opacity: 0, transform: 'translateY(-100%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-100%)' },
    });

    return (
        <Element name='About'>
            <section className="w-full h-auto p-10 text-white bg-image">
                <div className='flex w-full bg-black outline-double'>
                    <div className='w-2/5 p-10'>
                        <img className='object-cover w-full h-[75vh] border rounded-lg' src="/images/profile.jpg" alt="" />
                    </div>
                    <div className='w-3/5 p-8'>
                        <h1 className="w-full text-5xl">About Me</h1>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto exercitationem repellendus ipsam consectetur incidunt deleniti impedit, quidem molestiae esse, aperiam eos commodi cumque quae doloremque adipisci vero labore aut accusantium? </span>
                        <div>
                            <ul className="flex mt-3 text-slate-400">
                                {Data.map(item => (
                                    <li
                                        key={item.id}
                                        className={`button_about ${tab === item.title ? 'button_about_active' : ''}`}
                                        onClick={() => handleTabChange(item.title)}
                                        onChange={()=> {}}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5">
                            {isPending && <div>Loading...</div>}
                            {transitions.map(({ item, key, props }) => (
                                item && (
                                    <animated.div key={key} style={props}>
                                        {item}
                                    </animated.div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default About;
