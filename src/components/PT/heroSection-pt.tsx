import Teams from "../teams";
import Instagram from "../../assets/images/Instagram.png"
import Linkedin from "../../assets/images/LinkedIn.png"


const HeroSection = () => {
    return (
        <div className="flex flex-col items-center xl:h-[calc(100vh-4.5rem)] xl:min-h-[650px] max-h-[1000px]">
            <div className="w-full lg:h-5/6 box-border pb-6 lg:pb-0">
            <div className="w-full flex flex-row justify-between h-full">
                <div id="containerImagemTexto" className="w-full flex flex-row justify-between h-full  lg:bg-kenji md:bg-no-repeat  lg:bg-[left_150%_bottom_90%] xl:bg-[right_0_bottom_80%]">
                    <div id="texto" className="flex flex-col  pt-6 w-full lg:w-2/4 md:px-6 lg:p-12 lg:pl-12  2xl:pt-24 2xl:pl-24 2xl:w-5/6 2xl:pr-[700px] text-balance">
                        <div id="textoPrincipal">
                            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-78xl text-center lg:text-start tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-normal">
                                Fisioterapeuta para 
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
                        <div className="flex flex-row justify-center lg:justify-start mt-6 pb-5">
                        <div id="redesSociais-Insta" className="bg-gradient-to-tr from-firstColor to-secondColor p-[0.06rem] rounded-full shadow-shape mr-2 ">
                            <a href="https://www.instagram.com/kenji_fisio/"  className="h-10 w-10 rounded-full bg-[#1e1e1e] flex items-center justify-center shadow-shape hover:bg-zinc-800" target="__blank ">
                                <img src={Instagram} alt="" className="p-2.5"/>
                            </a>
                        </div>
                        <div id="redesSociais-Linkedin" className="bg-gradient-to-tr from-firstColor to-secondColor p-[0.06rem] rounded-full shadow-shape mr-4">
                            <a href="https://www.linkedin.com/in/kenjifisio/?originalSubdomain=br"  className="h-10 w-10 rounded-full bg-[#1e1e1e] p flex items-center justify-center shadow-shape  hover:bg-zinc-800" target="__blank ">
                                <img src={Linkedin} alt="" className="p-2.5"/>
                            </a>
                        </div>
                        <div className="bg-gradient-to-tr from-firstColor to-secondColor p-[0.06rem] rounded-md shadow-shape">
                        <a href="#" className="bg-[#1e1e1e] py-2 px-4 rounded-md text-zinc-50 font-medium w-24 flex justify-center shadow-shape  hover:bg-zinc-800">Contato</a></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="lg:relative lg:bottom-4">
            <Teams /></div>
            </div>
        </div>
    );
};

export default HeroSection;
