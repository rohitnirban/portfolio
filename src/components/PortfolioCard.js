export const PortfolioCard = ({
    showCard,
    categoryText,
    category,
    ImageHref,
    title,
    link
}) => {

    console.log(category);
    return (
        <>
            <div
                className={`w-full px-4 mx-auto md:w-1/2 xl:w-1/2 ${showCard === "all" || showCard === category
                    ? "block"
                    : "hidden"
                    }`}
            >
                <a href={link} target="_blank" rel="noreferrer">
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
                                        {categoryText}
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