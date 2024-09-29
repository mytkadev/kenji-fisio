import { podcastPT } from "../../constants";
import { useState, useEffect } from "react";
import flowgames from "../../assets/images/authors/flowgames.jpg"

export function PodcastsPT() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Inicialmente 3 para mobile
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado para controlar a transição de página
  const [hideFirstItem, setHideFirstItem] = useState(false); // Estado para esconder o primeiro item
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Estado para monitorar telas a partir de 1024px

  // Função que ajusta o número de itens por página conforme o tamanho da tela
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(podcastPT.length); // Mostrar todos os itens para telas a partir de 1024px
      setHideFirstItem(true); // Esconde o primeiro item do array
      setIsLargeScreen(true);
    } else if (width >= 768) {
      setItemsPerPage(6); // Para dispositivos médios, manter 6 itens por página
      setHideFirstItem(false); // Não esconde o primeiro item para dispositivos médios
      setIsLargeScreen(false);
    } else {
      setItemsPerPage(3); // Para dispositivos pequenos, manter paginação de 3 itens
      setHideFirstItem(false); // Não esconde o primeiro item para dispositivos pequenos
      setIsLargeScreen(false);
    }
  };

  // Hook para escutar mudanças no tamanho da tela
  useEffect(() => {
    updateItemsPerPage(); // Chama a função uma vez ao montar o componente
    window.addEventListener("resize", updateItemsPerPage); // Atualiza quando o tamanho da janela muda
    return () => window.removeEventListener("resize", updateItemsPerPage); // Limpa o evento ao desmontar
  }, []);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(podcastPT.length / itemsPerPage) - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsTransitioning(false);
      }, 300); // 300ms de duração para a transição
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsTransitioning(false);
      }, 300); // 300ms de duração para a transição
    }
  };

  // Obter os itens da página atual
  const currentItems = hideFirstItem
    ? podcastPT.slice(1) // Esconder o primeiro item do array se `hideFirstItem` for verdadeiro
    : podcastPT.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Número de esqueletos a adicionar na última página
  const skeletonsToAdd = itemsPerPage - currentItems.length;

  // Primeiro item do array (para o vídeo incorporado)
  const firstItem = podcastPT[0];

  return (
    <div className="w-full flex flex-col xl:mb-8 items-center ">
      <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
        Podcasts
      </h2>

      {/* Layout para telas grandes */}
      {isLargeScreen ? (
        <div id="alturatotaldaqui" className="flex flex-col lg:flex-row w-full max-w-[90rem] mx-auto justify-center">
          {/* Vídeo incorporado */}
          <div className="w-full lg:w-3/5 flex flex-col justify-start items-start pr-4 pt-3 mb-8 lg:mb-0">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/60DzQlANrRM?si=33FC_Wx-Qz4wOnll"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[400px] xl:h-[500px] rounded-lg shadow-lg mb-5"
            ></iframe>
            {/* Título e Autor do Vídeo Incorporado */}
            <div className="flex flex-row">
              <img src={flowgames} alt="" className="h-16 w-16 min-h-16 min-w-16 rounded-full" />
            <div className="text-white px-4">
              <h3 className="text-2xl font-bold mb-0">{firstItem.title}</h3>
              <p className="text-base text-zinc-300">{firstItem.authorName}</p>
            </div>
            </div>
          </div>

          {/* Lista de Podcasts com Scroll Próprio */}
          <div className="w-full lg:w-1/5 h-[520px] xl:h-[580px] overflow-y-scroll px-4 border-l border-neutral-700/50">
            {currentItems.map((item, index) => (
              <a
                href={item.href}
                target="_blank"
                key={index}
                id="podcast"
                className="flex flex-col border-b-[1px] border-zinc-600/30 p-3 hover:bg-neutral-600/15 w-full"
              >
                {/* Placeholder para imagem do podcast */}
                <img
                  src={item.img}
                  className=" rounded-md mb-3 object-cover aspect-video"
                  alt={`Podcast ${index + 1}`}
                />
                {/* Informações do podcast */}
                <div id="tituloautor" className="flex flex-col text-sm">
                  <div
                    id="tituloprimeiranoticia"
                    className="leading-[15px] w-auto text-base font-medium tracking-wide text-white mb-2"
                  >
                    {item.title}
                  </div>
                  <div id="autor" className="text-zinc-300 font-extralight">{item.authorName}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        // Layout para dispositivos menores e médios (padrão original)
        <>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 px-6 md:px-8 xl:px-32 transition-opacity duration-[300ms] ease-in-out ${
              isTransitioning ? "transform -translate-x-full opacity-0" : "transform translate-x-0 opacity-100"
            }`}
          >
            {/* Renderizar os itens atuais */}
            {currentItems.map((item, index) => (
              <a
                href={item.href}
                target="_blank"
                key={index}
                id="podcast"
                className="flex flex-col border-b-[1px] border-zinc-600/30 p-3 hover:bg-neutral-600/15 md:w-80 md:mx-auto"
              >
                {/* Placeholder para imagem do podcast */}
                <img
                  src={item.img}
                  className="sm:h-42 sm:w-80 rounded-md w-full mb-3"
                  alt={`Podcast ${index + 1}`}
                />
                {/* Informações do podcast */}
                <div id="tituloautor" className="flex flex-col text-[0.6rem]">
                  <div
                    id="tituloprimeiranoticia"
                    className="leading-[15px] w-auto text-[0.8rem] font-medium tracking-wide text-white mb-2"
                  >
                    {item.title}
                  </div>
                  <div id="autor" className="text-zinc-300 font-extralight">{item.authorName}</div>
                </div>
              </a>
            ))}

            {/* Adicionar skeletons para preencher espaços vazios na última página */}
            {Array(skeletonsToAdd)
              .fill(0)
              .map((_, index) => (
                <div key={`skeleton-${index}`} className="flex flex-col border-b-[1px] border-zinc-600/30 p-3">
                  {/* Placeholder para a imagem */}
                  <div className="bg-neutral-700 h-44 min-w-full rounded-md mr-3 mb-3"></div>

                  {/* Placeholder para o conteúdo de texto */}
                  <div className="flex flex-col justify-between text-[0.6rem] w-full">
                    {/* Placeholder para o título */}
                    <div className="w-3/4 h-4 bg-neutral-700 rounded mb-1"></div>
                    <div className="w-1/2 h-4 bg-neutral-700 rounded mb-2"></div>

                    {/* Placeholder para o autor */}
                    <div className="w-1/4 h-3 bg-neutral-700 rounded"></div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navegação de páginas para dispositivos menores */}
          <div className="mb-5 mt-3 flex justify-between px-6 w-full md:px-8 xl:px-32">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              className={`px-4 text-[0.7rem] ${currentPage === 0 ? "text-zinc-500" : "text-zinc-300"}`}
            >
              &lt; PÁGINA ANTERIOR
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(podcastPT.length / itemsPerPage) - 1}
              className={`px-4 text-[0.7rem] ${
                currentPage === Math.ceil(podcastPT.length / itemsPerPage) - 1 ? "text-zinc-500" : "text-zinc-300"
              }`}
            >
              PRÓXIMA PÁGINA &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
}
