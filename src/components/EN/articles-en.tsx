import { useState, useEffect } from "react";
import { articlesen } from "../../constants"; // Trocado para articlesen

// Defina uma interface para os itens de `articlesen`
interface Article {
  href: string;
  img: string;
  title: string;
  authorLogo: string;
  authorName: string;
}

// Defina a tipagem do estado `imageLoaded`
interface ImageLoadedState {
  [key: number]: boolean; // Mapeia o índice (número) para um valor booleano
}

export function ArticlesEN() { // Nome atualizado para ArticlesEN
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [imageLoaded, setImageLoaded] = useState<ImageLoadedState>({});
  const [isTransitioning, setIsTransitioning] = useState(false); // Controla a animação de transição
  const [opacity, setOpacity] = useState(1); // Controla a opacidade do componente

  useEffect(() => {
    // Inicializa o estado de imagens carregadas para todos os itens
    const initialImageLoadedState: ImageLoadedState = articlesen.reduce(
      (acc, _, index) => {
        acc[index] = false;
        return acc;
      },
      {} as ImageLoadedState
    );
    setImageLoaded(initialImageLoadedState);
  }, []);

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setItemsPerPage(9);
    } else if (width >= 768) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(3);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const preloadNextPageImages = (pageIndex: number) => {
    const nextItems = articlesen.slice(
      pageIndex * itemsPerPage,
      (pageIndex + 1) * itemsPerPage
    );

    nextItems.forEach((item, index) => {
      const img = new Image();
      img.src = item.img;
      img.onload = () => {
        setImageLoaded((prev) => ({
          ...prev,
          [index + pageIndex * itemsPerPage]: true,
        }));
      };
    });
  };

  // Função para iniciar o fade-out
  const fadeOut = () => {
    setIsTransitioning(true);
    setOpacity(0);
  };

  // Função para iniciar o fade-in
  const fadeIn = () => {
    setIsTransitioning(true);
    setOpacity(0.3);
    requestAnimationFrame(() => {
      setOpacity(1); // Faz a animação de opacidade gradualmente
    });
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage < Math.ceil(articlesen.length / itemsPerPage)) {
      preloadNextPageImages(nextPage);
      fadeOut(); // Inicia o fade-out
      setTimeout(() => {
        setCurrentPage(nextPage); // Muda para a próxima página
        fadeIn(); // Inicia o fade-in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300); // Tempo de fade-out
    }
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
      preloadNextPageImages(previousPage);
      fadeOut(); // Inicia o fade-out
      setTimeout(() => {
        setCurrentPage(previousPage); // Muda para a página anterior
        fadeIn(); // Inicia o fade-in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300); // Tempo de fade-out
    }
  };

  const currentItems = articlesen.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Número de esqueletos a adicionar na última página
  const skeletonsToAdd = itemsPerPage - currentItems.length;

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <div id="section" className="p-">
      <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
        Articles {/* Alterado para "Articles" */}
      </h2>

      {/* Grid responsivo com animação de transição */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 px-6 md:px-8 xl:px-32 transition-opacity duration-300 ease-in-out`}
        style={{ opacity: opacity }} // Controle da opacidade com estado
      >
        {currentItems.map((item: Article, index: number) => (
          <a
            href={item.href}
            target="_blank"
            key={index}
            id="article" // Alterado para "article"
            className="flex flex-row border-b-[1px] border-zinc-600/30 p-3 hover:bg-neutral-600/15"
          >
            {/* Esqueleto que aparece enquanto a imagem carrega */}
            <div
              className={`h-28 min-w-44 max-w-44 rounded-md mr-3 bg-neutral-700/25 ${
                imageLoaded[index + currentPage * itemsPerPage] ? "hidden" : ""
              }`}
            ></div>

            {/* Imagem que será exibida quando carregada */}
            <img
              src={item.img}
              alt={item.title}
              id="imgarticle" // Alterado para "imgarticle"
              className={`bg-white h-28 min-w-44 max-w-44 rounded-md mr-3 object-cover shadow-shape border-[1px] border-neutral-800 ${
                imageLoaded[index + currentPage * itemsPerPage] ? "block" : "hidden"
              }`}
              onLoad={() => handleImageLoad(index + currentPage * itemsPerPage)}
            />

            <div id="titleauthor" className="flex flex-col text-[0.6rem]"> {/* Alterado para "titleauthor" */}
              <h6
                rel="noopener noreferrer"
                id="title"
                className="leading-[15px] w-auto text-[0.8rem] font-medium tracking-wide text-white mb-2"
              >
                {item.title}
              </h6>
              <div id="author" className="flex flex-row items-center">
                <img
                  src={item.authorLogo}
                  alt=""
                  className="max-h-2.5 mr-1"
                />
                <div id="authorname" className="text-zinc-300 font-extralight items-center ">
                  • {item.authorName} | IN PORTUGUESE
                </div>
              </div>
            </div>
          </a>
        ))}

        {/* Adicionar skeletons para preencher espaços vazios na última página */}
        {Array(skeletonsToAdd)
          .fill(0)
          .map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="flex flex-row border-b-[1px] border-zinc-600/30 p-3"
            >
              {/* Placeholder para a imagem */}
              <div className="bg-neutral-700/25 h-28 min-w-44 max-w-44 rounded-md mr-3"></div>

              {/* Placeholder para o conteúdo de texto */}
              <div className="flex flex-col text-[0.6rem] w-full">
                {/* Placeholder para o título */}
                <div className="w-3/4 h-4 bg-neutral-700/25 rounded mb-1"></div>
                <div className="w-1/2 h-4 bg-neutral-700/25 rounded mb-2"></div>

                {/* Placeholder para o autor */}
                <div className="flex items-center mt-2">
                  {/* Placeholder para o logo do autor */}
                  <div className="w-4 h-4 bg-neutral-700/25 rounded-full mr-2"></div>
                  {/* Placeholder para o ponto */}
                  <div className="w-1 h-1 bg-neutral-700/25 rounded-full mr-2"></div>
                  {/* Placeholder para o nome do autor */}
                  <div className="w-1/4 h-3 bg-neutral-700/25 rounded"></div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mb-5 mt-3 flex justify-between px-6 md:px-8 xl:px-32">
      <button
  onClick={handlePreviousPage}
  disabled={currentPage === 0 || isTransitioning} // Desativa se estiver em transição
  className={`px-4 text-[0.7rem] ${
    currentPage === 0 ? "text-zinc-500" : "text-zinc-300"
  }`}
>
  &lt; PREVIOUS PAGE
</button>
<button
  onClick={handleNextPage}
  disabled={currentPage === Math.ceil(ArticlesEN.length / itemsPerPage) - 1 || isTransitioning} // Desativa se estiver em transição
  className={`px-4 text-[0.7rem] ${
    currentPage === Math.ceil(ArticlesEN.length / itemsPerPage) - 1
      ? "text-zinc-500"
      : "text-zinc-300"
  }`}
>
  NEXT PAGE &gt;
</button>
      </div>
    </div>
  );
}
