import React, { useState } from "react";
import a from '../images/a.webp'
import b from '../images/b.webp'
import c from '../images/c.webp'
import d from '../images/d.webp'
import e from '../images/e.webp'
import f from '../images/f.webp'
import g from '../images/g.webp'
import h from '../images/h.webp'

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
                                        onClick={() => handleProject("front end")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold duration-300 transition md:py-3 lg:px-8 ${showCard === "front end"
                                            ? "activeClasses bg-primary text-blue-700"
                                            : "inactiveClasses"
                                            }`}
                                    >
                                        Front End Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("portfolio")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold duration-300 transition md:py-3 lg:px-8 ${showCard === "portfolio"
                                            ? "activeClasses bg-primary text-blue-700"
                                            : "inactiveClasses"
                                            }`}
                                    >
                                        Portfolio Projects
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <PortfolioCard
                            ImageHref={a}
                            category="Portfolio"
                            title="Personal Portfolio"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={h}
                            category="Full Stack"
                            title="Blogs"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={c}
                            category="Full Stack"
                            title="Notes Web App"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={d}
                            category="Front End"
                            title="Lenovo Website Clone"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={e}
                            category="Portfolio"
                            title="Personal Portfolio"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={f}
                            category="Full Stack"
                            title="URL Shortner"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={g}
                            category="Front End"
                            title="Digital Resume"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={b}
                            category="Portfolio"
                            title="Personal Portfolio"
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
    title
}) => {
    return (
        <>
            <div
                className={`w-full px-4 mx-auto md:w-1/2 xl:w-1/2 ${showCard === "all" || showCard === category.toLowerCase()
                    ? "block"
                    : "hidden"
                    }`}
            >
                <div class="overflow-hidden cursor-pointer relative mb-12 group">
                    <div className="overflow-hidden rounded-lg border border-black">
                        <img src={ImageHref} alt="portfolio" className="w-full group-hover:scale-110 transition duration-300 ease-in-out"
                        />
                    </div>
                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-32 text-white flex items-end">
                        <div>
                            <div class="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <span className="block mb-2 text-sm font-semibold text-primary">
                                    {category}
                                </span>
                                <h3 className="mb-4 text-xl font-bold text-dark">{title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};