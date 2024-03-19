// import React from 'react';

import { Fragment } from "react";
import { GrSend } from "react-icons/gr";

const Form = () => {
    return (
        <Fragment>
            <form action="" className="p-3">
                <div className="flex flex-col mx-4 mt-3">
                    <label className="cursor-pointer" htmlFor="email">Email</label>
                    <input className="py-2 pl-2 mt-2 rounded-lg outline-none" type="email" id="email" placeholder="name@gmail.com" required></input>
                </div>
                <div className="flex flex-col mx-4 mt-3">
                    <label className="cursor-pointer" htmlFor="subject">Subject</label>
                    <input className="py-2 pl-2 mt-2 rounded-lg outline-none" type="text" id="subject" placeholder="Say hi" required></input>
                </div>
                <div className="flex flex-col h-auto mx-4 mt-3">
                    <label className="cursor-pointer" htmlFor="messages">Messages</label>
                    <textarea className="w-full py-3 pl-2 mt-2 overflow-hidden rounded-lg outline-none resize-none" type="text" id="messages" required></textarea>
                </div>
                <div className="flex justify-center">
                    <button className="px-6 py-3 capitalize transition duration-150 ease-out border mt-7 hover:ease-in -full rounded-3xl hover:bg-slate-700 hover:text-white" type="submit">Send Messages <GrSend className="inline-block" /></button>
                </div>
            </form>
        </Fragment>
    );
};

export default Form;