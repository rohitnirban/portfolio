import React from 'react';

const Skills = () => {
    return (
        <div>
            <section className="text-gray-200 bg-gray-900" id='skills'>
                <div className="max-w-6xl mx-auto px-5 py-24 ">
                    <div className="text-center mb-20">
                        <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Skills</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">A Seasoned Developer: Fusing Research-Backed Simplicity with Flawless Aesthetics. Let's Craft Seamless User Experiences Together.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6"  >
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                    </div>
                                    <div className="flex-grow ">
                                        <h2 className="text-xl title-font font-medium mb-3">Front-End Development</h2>
                                        <p className="leading-relaxed text-sm text-justify">Proficient Frontend Developer skilled in <span className='text-yellow-500'>HTML, CSS, and JavaScript. Expertise in Bootstrap, Tailwind CSS, Mantine UI and Material UI</span> for crafting responsive, visually appealing, and user-centric web experiences. Let's bring ideas to life!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Intégration web */}
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-xl title-font font-medium mb-3">Back-End Development</h2>
                                        <p className="leading-relaxed text-sm text-justify">
                                            Skilled in backend development, I excel in <span className='text-yellow-500'>Node.js, Express, and Mongoose</span>. Crafting robust, scalable server solutions for seamless data management and API functionality. Let's drive your digital aspirations forward.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Developpement Back-end */}
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-xl title-font font-medium mb-3">RestFull API</h2>
                                        <p className="leading-relaxed text-sm text-justify">
                                            Mastery in crafting <span className='text-yellow-500'>RESTful APIs using Node.js</span>. Seamlessly design, develop, and deploy APIs, ensuring efficient communication between servers and clients. Empower your applications with dynamic functionality and connectivity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Webdesign */}
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6"  >
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                    </div>
                                    <div className="flex-grow ">
                                        <h2 className="text-xl title-font font-medium mb-3">Version Control Tools</h2>
                                        <p className="leading-relaxed text-sm text-justify">Proficient in version control tools such as <span className='text-yellow-500'>Git and GitHub</span>. Streamline collaborative workflows, track code changes, and manage projects efficiently. Elevate team productivity and codebase management for success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Webdesign */}
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6"  >
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                    </div>
                                    <div className="flex-grow ">
                                        <h2 className="text-xl title-font font-medium mb-3">Database</h2>
                                        <p className="leading-relaxed text-sm text-justify">Fluent in <span className='text-yellow-500'>database management with Mongoose</span>. Expertise in designing schemas, optimizing queries, and ensuring data integrity. Empower applications with efficient, organized, and scalable data storage solutions for optimal performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
