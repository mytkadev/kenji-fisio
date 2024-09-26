import Sacy from "../../assets/images/loud-sacy-valorant-masters-copenhagen 4 (1).png"
import Fallen from "../../assets/images/foto3 1.png"

export function TestimonialsPT() {
    return (
        <div id="todososelementos" className=" tracking-wide  flex flex-col  align-center">
            <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
            O que os jogadores falam:
            </h2>
            <div className="xl:flex xl:mx-10 2xl:mx-20 ">
                <div className="relative mt-3 mb-5 mx-6 sm:max-h-80 lg:w-[1000px] lg:mx-auto xl:mr-5 2xl:mr-10">
                    <div className="relative rounded-[24px] shadow-shape">
                        <img 
                        src={Sacy} 
                        alt="Sacy"
                        className="h-[630px] object-cover rounded-[24px] sm:max-h-80 sm:w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-black/[.80] via-30% to-transparent to-70% rounded-[24px]"></div>
                    </div>
                    <div className="absolute top-0 px-6 py-4 text-white">
                        <h2 className="text-3xl font-bold mb-2">Sacy</h2>
                    </div>
                    <div className="absolute top-0 p-6 right-0 px-4 py-6">
                            <a href="https://www.youtube.com/watch?v=92UUWbe2LyQ" target="_blank" className="bg-zinc-800/70 text-gray-50  border font-semibold px-4 py-2 rounded-lg">Assistir depoimento</a>
                        </div>

                    <div className="absolute bottom-0 p-6 inset-x-0 text-white">


                        <p className="text-sm font-light  text-balance">
                        "Quando eu tava na Turquia, o Kenji me ajudou, fez uma videocall comigo e depois fiquei colocando gelo três vezes por dia no pulso para aliviar a dor e jogar de boa [...]. Pela upper final e final, a dor tava mais tranquila. Fui tratando, o Kenji foi me ajudando. Fiz alongamentos e exercícios e fui fortalecendo. Cheguei ontem à noite no Brasil e hoje de manhã já fui pro CT da LOUD, e o Kenji estava lá e fez um bagulho no meu braço que sumiu minha dor."
                        </p>
                    </div>
                </div>
                <div className="relative mt-3 mb-5 mx-6 sm:max-h-80 lg:w-[1000px] lg:mx-auto">
                    <div className="relative rounded-[24px] shadow-shape">
                        <img 
                        src={Fallen} 
                        alt="Fallen"
                        className="h-[630px] object-cover rounded-[24px] sm:max-h-80 sm:w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-black/[.80] via-30% to-transparent to-70% rounded-[24px]"></div>
                    </div>
                    <div className="absolute top-0 px-6 py-4 text-white  text-balance">
                        <h2 className="text-3xl font-bold mb-2">Fallen</h2>
                    </div>
                    <div className="absolute top-0 p-6 right-0 px-4 py-6">
                            <a href="https://www.instagram.com/reel/ChxH7TlDIbf/" target="_blank"  >
                            <div className="leading-[18px] bg-zinc-800/70 text-gray-50  border font-medium px-4 py-2 rounded-lg">Assistir exercícios <br /> 
                            feitos com o Fallen </div></a>
                        </div>

                    <div className="absolute bottom-0 p-6 inset-x-0 text-white">


                        <p className="text-sm font-light ">
                        "É Kenjão, a coisa tá séria hoje em dia hein! Pessoal tá se preparando... Quem me dera a 18 anos atrás, quando comecei, já tivessem profissionais como o Kenji de olho no esporte eletrônico. Valeu Kenji, obrigado pela força"
                        </p>
                    </div>
                </div>
                </div>
            </div>
    );
}