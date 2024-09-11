
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 ">
            <div className="md:px-24 2xl:px-72">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mx-3 xl:mx-14 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-light  "> {/* Queria que esse margin-x fosse aplicado só em dispositivos menores mas não deu certo */}
                Pioneiro em fisioterapia para
                <span className="font-semibold">
                    {" "}
                    atletas de eSports
                </span>
            </h1>
            </div>
            <p className="mt-10 text-base md:text-lg text-center text-neutral-300 max-w-7xl mx-8 font-light">
            Com uma vasta experiência no mundo dos esportes eletrônicos, Vitor Kenji é o fisioterapeuta de referência para prevenção, tratamento de lesões e melhoria da performance de jogadores profissionais. Ele já trabalhou com os maiores times de eSports do Brasil, cuidando da saúde física de atletas que competem nos mais altos níveis.
            </p>
            <div className="flex mt-10 justify-center mx-10">
            </div>
        </div>
    )
}

export default HeroSection
