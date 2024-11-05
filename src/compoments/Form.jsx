import confetti from "canvas-confetti";
import { Fragment, useRef } from "react";
import { GrSend } from "react-icons/gr";

const Form = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if all form inputs are valid
        if (formRef.current.checkValidity()) {
            // Trigger the confetti animation if valid
            setTimeout(() => {
                formRef.current.querySelector("button[type='submit']").click();
                const duration = 5 * 1000;
                const animationEnd = Date.now() + duration;
                const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                const randomInRange = (min, max) =>
                    Math.random() * (max - min) + min;

                const interval = window.setInterval(() => {
                    const timeLeft = animationEnd - Date.now();

                    if (timeLeft <= 0) {
                        return clearInterval(interval);
                    }

                    const particleCount = 50 * (timeLeft / duration);
                    confetti({
                        ...defaults,
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    });
                    confetti({
                        ...defaults,
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    });
                }, 250);
                formRef.current.reset();
            }, 800);

        } else {
            formRef.current.reportValidity();
        }

    };

    return (
        <Fragment>
            <form ref={formRef} onSubmit={handleSubmit} className="p-3">
                <div className="flex flex-col mx-4 mt-3">
                    <label className="cursor-pointer" htmlFor="email">Email</label>
                    <input className="py-2 pl-2 mt-2 rounded-lg outline-none" type="email" id="email" placeholder="name@gmail.com" required />
                </div>
                <div className="flex flex-col mx-4 mt-3">
                    <label className="cursor-pointer" htmlFor="subject">Subject</label>
                    <input className="py-2 pl-2 mt-2 rounded-lg outline-none" type="text" id="subject" placeholder="Say hi" required />
                </div>
                <div className="flex flex-col h-auto mx-4 mt-3">
                    <label className="cursor-pointer" htmlFor="messages">Messages</label>
                    <textarea className="w-full py-3 pl-2 mt-2 overflow-hidden rounded-lg outline-none resize-none" id="messages" required></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        className="px-6 py-3 capitalize transition duration-150 ease-out border sm-max:text-xs mt-7 hover:ease-in-full rounded-3xl hover:bg-slate-700 hover:text-white"
                        type="submit"
                    >
                        Send Messages
                        <GrSend className="inline-block" />
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default Form;
