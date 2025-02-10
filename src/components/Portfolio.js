import React, { useState } from "react";
import riceley from '../images/Riceley.png'
import confchair from '../images/React-App.png'
import easyproperti from '../images/Easy-Properti.png'
import blog from '../images/Hunting-Coder-A-Hunt-for-Coders.png'
import urlhub from '../images/urlhub.png'
import resume from '../images/resume.webp'
import cuims from '../images/cuims.webp'
import ssid from '../images/ssid.webp'

const Portfolio = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };

    return (
        <>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] w-[82%] mx-auto" id="projects">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="text-center mb-20">
                                <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Project Portfolio</h1>
                                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Here is the list of some project/works i have done in past.</p>
                                <div className="flex mt-6 justify-center">
                                    <div className="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center mx-auto">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold duration-300 transition md:py-3 lg:px-8 ${showCard === "all"
                                            ? "activeClasses bg-primary text-blue-700"
                                            : "inactiveClasses"
                                            }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("full stack")}
                                        className={`inline-block  rounded-lg py-2 px-5 text-center text-base font-semibold duration-300 transition md:py-3 lg:px-8 ${showCard === "full stack"
                                            ? "activeClasses bg-primary text-blue-700"
                                            : "inactiveClasses"
                                            }`}
                                    >
                                        Full Stack Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("npm package")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold duration-300 transition md:py-3 lg:px-8 ${showCard === "front end"
                                            ? "activeClasses bg-primary text-blue-700"
                                            : "inactiveClasses"
                                            }`}
                                    >
                                        Other Projects
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <PortfolioCard
                            ImageHref={urlhub}
                            category="Full Stack"
                            title="UrlHub"
                            link="https://urhb.in"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={cuims}
                            category="Chrome Extension"
                            title="Cuims Auto Login"
                            link="https://chromewebstore.google.com/detail/cuims-auto-login/cmiceidgkenbhnhpakfkfeaieiaojiih"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={ssid}
                            category="NPM Package"
                            title="SSID"
                            link="https://www.npmjs.com/package/ssid"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={confchair}
                            category="Full Stack"
                            title="ConfChair"
                            link="https://confchair.com"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={easyproperti}
                            category="Full Stack"
                            title="Easy Properti"
                            link="https://easyproperti.com"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={blog}
                            category="Full Stack"
                            title="Dev Blogs"
                            link="https://dev-blogs-rohit.vercel.app"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={resume}
                            category="Front End"
                            title="Digital Resume"
                            link="https://rohitnirbanresume.vercel.app"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={riceley}
                            category="Full Stack"
                            title="Riceley"
                            link="https://riceley.com"
                            showCard={showCard}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;

const PortfolioCard = ({
    showCard,
    category,
    ImageHref,
    title,
    link
}) => {
    return (
        <>
            <div
                className={`w-full px-4 mx-auto md:w-1/2 xl:w-1/2 ${showCard === "all" || showCard === category.toLowerCase()
                    ? "block"
                    : "hidden"
                    }`}
            >
                <a href={link} target="_blank"  rel="noreferrer">
                    <div className="overflow-hidden cursor-pointer relative mb-12 group">
                        <div className="rounded p-1 border border-black" style={{ height: "300px" }}>
                            <div className="overflow-y-scroll" style={{ height: "100%" }}>
                                <img
                                    src={ImageHref}
                                    alt="portfolio"
                                    className="w-full rounded group-hover:animate-scrollAnimation transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-8 text-white flex items-end">
                            <div>
                                <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                    <span className="block mb-2 text-sm font-semibold text-primary">
                                        {category}
                                    </span>
                                    <h3 className="mb-4 text-xl font-bold text-dark">{title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
};



