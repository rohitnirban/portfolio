import React from 'react'
import easyproperti from "../images/logo-light.png"
import hero from "../images/hero.webp"
import confchair from "../images/logo1.png"

const Hero = () => {

    const SingleImage = ({ href, imgSrc }) => {
        return (
            <>
                <a href={href} target='_blank' rel="noreferrer" className="flex w-full items-center justify-center bg-black py-2 px-4 rounded-xl">
                    <img src={imgSrc} alt="brand" className="w-full h-10 object-contain" />
                </a>
            </>
        );
    };

    return (
        <>
            <section className="relative bg-white w-[82%] mx-auto pt-[120px] pb-[110px] lg:pt-[60px]" id='home'>
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 lg:w-5/12 h-full my-auto">
                            <div className="hero-content items-center">
                                <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:font-extrabold lg:text-[40px] xl:font-extrabold xl:text-6xl">
                                    Rohit Yadav
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color">
                                    <span className='text-blue-600'>Full Stack Web Developer</span> passionate about creating
                                    innovative web solutions also stay <span className='text-blue-600'>up-to-date</span> with the latest
                                    technologies and leverage my skills to <span className='text-blue-600'>build robust web applications</span>
                                </p>
                                <a href="/resume.pdf" target='_blank' rel="noreferrer"
                                    className="inline-flex items-center justify-center text-center text-body-color hover:text-primary"
                                >
                                    <button className="w-full items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 duration-300 text-center">Resume</button>
                                </a>

                                <div className="pt-16 clients">
                                    <h6 className="flex items-center mb-3 text-xs font-normal text-body-color">
                                        Some Of My Clients
                                        <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                                    </h6>

                                    <div className="flex items-center space-x-4">
                                        <SingleImage
                                            href="https://www.confchair.com"
                                            imgSrc={confchair}
                                        />
                                        <SingleImage
                                            href="https://www.riceley.com/"
                                            imgSrc="https://cdn.dotpe.in/logo/15579/RICELEY_STORE_LOGO_DOTPE.png"
                                        />
                                        <SingleImage
                                            href="https://www.easyproperti.com/"
                                            imgSrc={easyproperti}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="hidden lg:block w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src={hero}
                                        alt="hero"
                                        className="max-w-full lg:max-w-[35rem] lg:ml-auto rounded-tl-[2rem]"
                                    />
                                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero