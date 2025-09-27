import AboutImage from "../../assets/images/Mask group (10).png"
export function AboutPT() {
    return (
      <>
      <div className=" md:mx-10 xl:mx-32 mb-5 ">

        <div className=" lg:flex lg:flex-row justify-between text-center items-center">
        <div className="h-full ">
        <img src={AboutImage} alt="" className="hidden md:flex md:object-contain h-full w-full"/>
        </div>
        <div className="text-center text-zinc-200 font-light px-12 text-balance lg:w-1/2">
        <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">Quem é Vitor Kenji?</h2>
        <img src={AboutImage} alt="" className="md:hidden mb-8 "/>
          <p>O fisioterapeuta Vitor Kenji formou-se em 2009 pela UNINOVE - Universidade Nove de Julho. De 2009 a 2016, trabalhou em duas clínicas, atuando em massoterapia, acupuntura, quiropraxia, reabilitação esportiva e ortopédica. Em 2016, criou um projeto fisioterapêutico para estar apresentando para os times de e-sports no Brasil.</p>
          <br></br>
          <p>Kenji, então, tornou-se pioneiro na fisioterapia nos e-sports no Brasil. Seu plano de tratamento abrange saúde e performance em atletas de e-sports, exercícios para prevenir lesões por esforço repetitivo (tendinopatias), aumento de performance.</p>
          <br></br>
          <p>A fisioterapia permite que os atletas de e-sports mantenham alta performance enquanto preservam a saúde e bem-estar a longo prazo, tornando as competições mais saudáveis e sustentáveis!</p>
        </div>

        </div>
      </div>

      </>
    )
  }