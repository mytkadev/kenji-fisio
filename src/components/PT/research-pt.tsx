import artigo from "../../assets/images/artiho.png";

export function ResearchPT() {
  return (
    <>
      <div className="p-6 justify-center">
        <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
          Artigo Científico
        </h2>
        <div className="flex flex-col items-center lg:items-start md:flex-row justify-center">
          <a href="https://bjns.com.br/index.php/BJNS/article/view/189/149">
            <img
              src={artigo}
              alt=""
              className="max-h-[60vh] rounded-md mb-3 xl:ml-40"
            />
          </a>
          <div className="md:w-1/2 md:px-10 md:text-start">
            <p className="text-sm text-center text-neutral-300 font-light italic md:text-start">
              "Em 2022, os eSports atingiram uma audiência global de 532 milhões
              de telespectadores, com o Brasil entre os principais mercados. O
              crescimento desta indústria tem levado a um aumento no número de
              profissionais de eSports (pro-players), que passam longas horas em
              treino diário, enfrentando desafios físicos e cognitivos. Foram
              coletados dados de 95 jogadores profissionais brasileiros de
              League of Legends e Valorant, destacando a relação entre dores
              musculoesqueléticas e as especificidades de cada modalidade. A
              pesquisa identificou diferenças na frequência e localização da dor
              entre as categorias MOBA e FPS, indicando a importância de
              considerar as particularidades de cada jogo no gerenciamento da
              dor dos jogadores. O posicionamento do teclado e o tipo de pegada
              do mouse também influenciaram os níveis de dor, enfatizando a
              necessidade de ajustes ergonômicos individuais. O estudo fornece
              informações valiosas para a prevenção, tratamento e apoio aos
              atletas de eSports, visando garantir o seu bem-estar e sucesso no
              mundo competitivo dos desportos eletrónicos."
            </p>
            <br />
            <p className="text-base text-center text-neutral-300 font-light text-balance md:text-start">
              O seu artigo científico "Dor em Atletas Profissionais de e-Sport:
              Uma Análise Pioneira de Valorant e League of Legends no Brasil",
              publicado em novembro de 2023, representa um marco na pesquisa
              sobre os desafios físicos enfrentados por atletas digitais, sendo
              o primeiro artigo científico no mundo a analisar lesões em
              jogadores profissionais de e-sport, oferecendo insights essenciais
              para o desenvolvimento de práticas de fisioterapia adaptadas ao
              universo dos e-sports!
            </p>
            <div className="mt-8 text-center md:text-start">
              <a
                href="https://bjns.com.br/index.php/BJNS/article/view/189/149"
                className="p-3 bg-firstColor rounded-md font-sm py-2"
              >
                Ler artigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
