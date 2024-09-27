import { podcastPT } from "../../constants";
import { useState, useEffect } from "react";

export function PodcastsPT() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Inicialmente 3 para mobile
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado para controlar a transição de página

  // Função que ajusta o número de itens por página conforme o tamanho da tela
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(9); // Dispositivos grandes: 9 itens
    } else if (width >= 768) {
      setItemsPerPage(6); // Dispositivos médios: 6 itens
    } else {
      setItemsPerPage(3); // Dispositivos pequenos: 3 itens
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
  const currentItems = podcastPT.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Número de esqueletos a adicionar na última página
  const skeletonsToAdd = itemsPerPage - currentItems.length;

  return (
    <>
      <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
        Podcasts
      </h2>

      {/* Container para animação de transição */}
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
            className="flex flex-col border-b-[1px] border-zinc-600/30 p-3 hover:bg-neutral-600/15"
          >
            {/* Placeholder para imagem do podcast */}
            <div className="bg-white h-44 min-w-full rounded-md mr-3 mb-3"></div>
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
            <div
              key={`skeleton-${index}`}
              className="flex flex-col border-b-[1px] border-zinc-600/30 p-3"
            >
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

      {/* Navegação de páginas */}
      <div className="mb-5 mt-3 flex justify-between px-6 md:px-8 xl:px-32">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`px-4 text-[0.7rem] ${
            currentPage === 0 ? "text-zinc-500" : "text-zinc-300"
          }`}
        >
          &lt; PÁGINA ANTERIOR
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(podcastPT.length / itemsPerPage) - 1}
          className={`px-4 text-[0.7rem] ${
            currentPage === Math.ceil(podcastPT.length / itemsPerPage) - 1
              ? "text-zinc-500"
              : "text-zinc-300"
          }`}
        >
          PRÓXIMA PÁGINA &gt;
        </button>
      </div>
    </>
  );
}
