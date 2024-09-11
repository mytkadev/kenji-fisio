
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <div className="md:px-24 2xl:px-72">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mx-3 xl:mx-14 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-light  "> {/* Queria que esse margin-x fosse aplicado só em dispositivos menores mas não deu certo */}
                Pioneering Physiotherapist for
                <span className="font-semibold">
                    {" "}
                    eSports Athletes
                </span>
            </h1>
            </div>
            <p className="mt-10 text-base md:text-lg text-center text-neutral-300 max-w-[95rem] mx-8 font-light">
            With vast experience in the world of electronic sports, Vitor Kenji is the go-to physiotherapist for injury prevention, treatment, and performance improvement of professional players. He has worked with the top eSports teams in Brazil, taking care of the physical health of athletes competing at the highest levels.
            </p>
            <div className="flex mt-10 justify-center mx-10">
            </div>
        </div>
    )
}

export default HeroSection
