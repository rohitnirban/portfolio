import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const toastOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark"
    }

    const sendEmail = (e) => {
        e.preventDefault();
        toast.success("Your Mail Sent Successfully", toastOptions);
        e.target.userName.value = "";
        e.target.userEmail.value = "";
        e.target.userMessage.value = "";
    }

    return (
        <section className="text-gray-900 px-8 mt-16" id="contact">
            <div className="text-center">
                <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Contact</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">You can contact me anytime by using this contact form</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
                </div>
            </div>
            <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Let's talk about everything!
                        </h2>
                        <div className="text-gray-700 mt-8">
                            Leave a <span className="underline">message</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={sendEmail}>
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="userName"
                            placeholder=""
                            required
                        />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            name="userEmail"
                            required
                        />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            name="userMessage"
                            required
                        ></textarea>
                    </div>
                    <div className="mt-8">
                        <button type='sumbit'
                            className="w-full items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 duration-500 text-center"
                        >
                            Send Message
                        </button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
