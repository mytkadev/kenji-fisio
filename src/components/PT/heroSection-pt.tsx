import imgKenji from "../../assets/images/Group 8.png";
import Teams from "../teams";
import Instagram from "../../assets/images/Instagram.png"
import Linkedin from "../../assets/images/LinkedIn.png"


const HeroSection = () => {
    return (
        <div className="flex flex-col items-center lg:h-svh max-h-[calc(100vh-3.0rem)]">
            <div className="lg:w-full lg:h-5/6 box-border pt-8 pb-6 md:pb-0">
                <div id="containerImagemTexto" 
                    className="w-full flex flex-row justify-between h-full lg:px-20 lg:pt-10"
                >
                    <div id="texto" className="flex flex-col  pt-2 w-full lg:w-1/2">
                        <div id="textoPrincipal">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center lg:text-start tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-normal">
                                Fisioterapia para 
                                <span className="font-extrabold">
                                    {" "} atletas de eSports
                                </span>
                            </h1>
                        </div>
                        <div id="textoSecundario">
                            <p className="mt-5 lg:mt-6 text-base lg:text-lg text-center lg:text-start text-neutral-300 max-w-[95rem] mx-8 lg:mx-0 font-light">
                                Com uma vasta experiência no mundo dos esportes eletrônicos, Vitor Kenji é o fisioterapeuta de referência para prevenção, tratamento de lesões e melhoria da performance de jogadores profissionais. Ele já trabalhou com os maiores times de eSports do Brasil, cuidando da saúde física de atletas que competem nos mais altos níveis.
                            </p>
                        </div> 
                        <div className="flex flex-row justify-center md:justify-start mt-6">
                        <div id="redesSociais-Insta" >
                            <a href="https://www.instagram.com/kenji_fisio/"  className="h-10 w-10 rounded-full bg-[#1e1e1e] flex items-center justify-center shadow-shape" target="__blank ">
                                <img src={Instagram} alt="" className="p-2.5"/>
                            </a>
                        </div>
                        <div id="redesSociais-Linkedin">
                            <a href="https://www.linkedin.com/in/kenjifisio/?originalSubdomain=br"  className="h-10 w-10 rounded-full bg-[#1e1e1e] p flex items-center justify-center shadow-shape" target="__blank">
                                <img src={Linkedin} alt="" className="p-2.5"/>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:flex w-full lg:w-1/2 md:h-full md:items-end md:justify-end">
                        <img src={imgKenji} alt="" className="md:object-contain md:h-full" />
                    </div>
                </div>
            </div>
            <div className="md:relative md:bottom-6">
            <Teams /></div>
        </div>
    );
};

export default HeroSection;
