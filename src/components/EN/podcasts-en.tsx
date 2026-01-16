import { podcastEN } from "../../constants";
import { useState, useEffect } from "react";
import flowgames from "../../assets/images/authors/flowgames.jpg";

export function PodcastsEN() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Initially 3 for mobile
  const [hideFirstItem, setHideFirstItem] = useState(false); // State to hide the first item
  const [isLargeScreen, setIsLargeScreen] = useState(false); // State to monitor screens larger than 1024px
  const [opacity, setOpacity] = useState(1); // Controls the opacity of the component
  const [isTransitioning, setIsTransitioning] = useState(false); // Controls the opacity transition

  // Function to adjust the number of items per page based on screen size
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(podcastEN.length); // Show all items for screens larger than 1024px
      setHideFirstItem(true); // Hide the first item in the array
      setIsLargeScreen(true);
    } else if (width >= 768) {
      setItemsPerPage(6); // For medium devices, keep 6 items per page
      setHideFirstItem(false); // Do not hide the first item for medium devices
      setIsLargeScreen(false);
    } else {
      setItemsPerPage(3); // For small devices, keep pagination of 3 items
      setHideFirstItem(false); // Do not hide the first item for small devices
      setIsLargeScreen(false);
    }
  };

  // Hook to listen for screen size changes
  useEffect(() => {
    updateItemsPerPage(); // Call the function once when the component is mounted
    window.addEventListener("resize", updateItemsPerPage); // Update when the window size changes
    return () => window.removeEventListener("resize", updateItemsPerPage); // Clean up the event listener on unmount
  }, []);

  // Function to start the fade-out
  const fadeOut = () => {
    setIsTransitioning(true);
    setOpacity(0);
  };

  // Function to start the fade-in
  const fadeIn = () => {
    setIsTransitioning(true);
    setOpacity(0.3);
    requestAnimationFrame(() => {
      setOpacity(1); // Gradually animate the opacity
    });
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(podcastEN.length / itemsPerPage) - 1) {
      fadeOut(); // Start the fade-out
      setTimeout(() => {
        setCurrentPage(currentPage + 1); // Change to the next page
        fadeIn(); // Start the fade-in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300); // Fade-out duration
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      fadeOut(); // Start the fade-out
      setTimeout(() => {
        setCurrentPage(currentPage - 1); // Change to the previous page
        fadeIn(); // Start the fade-in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300); // Fade-out duration
    }
  };

  // Get the items of the current page
  const currentItems = hideFirstItem
    ? podcastEN.slice(1) // Hide the first item in the array if `hideFirstItem` is true
    : podcastEN.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Number of skeletons to add on the last page
  const skeletonsToAdd = itemsPerPage - currentItems.length;

  // First item of the array (for the embedded video)
  const firstItem = podcastEN[0];

  return (
    <div className="w-full flex flex-col items-center xl:h-[90vh] ">
      <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
        Podcasts
      </h2>

      {/* Layout for large screens */}
      {isLargeScreen ? (
        <div id="alturatotaldaqui" className="flex flex-col lg:flex-row w-full max-w-[90rem] mx-auto justify-center max-h-[80vh] ">
          {/* Embedded video */}
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
              className="w-full h-[60vh] rounded-lg shadow-lg mb-5"
            ></iframe>
            {/* Video title and author */}
            <div className="flex flex-row">
              <img src={flowgames} alt="" className="h-16 w-16 min-h-16 min-w-16 rounded-full" />
              <div className="text-white px-4">
                <h3 className="text-2xl font-bold mb-0">{firstItem.title}</h3>
                <p className="text-base text-zinc-300">{firstItem.authorName}</p>
              </div>
            </div>
          </div>

          {/* Podcast list with custom scroll */}
          <div className="w-full lg:w-1/5 h-[70vh] max-h-[80vh] overflow-y-scroll px-4 border-l border-neutral-700/50">
            {currentItems.map((item, index) => (
              <a
                href={item.href}
                target="_blank" rel="noopener noreferrer"
                key={index}
                id="podcast"
                className="flex flex-col border-b-[1px] border-zinc-600/30 p-3 hover:bg-neutral-600/15 w-full"
              >
                {/* Podcast image placeholder */}
                <img
                  src={item.img}
                  className=" rounded-md mb-3 object-cover aspect-video"
                  alt={`Podcast ${index + 1}`}
                />
                {/* Podcast information */}
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
        // Layout for smaller and medium devices (original setup)
        <>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 px-6 md:px-8 xl:px-32 transition-opacity duration-[300ms] ease-in-out`}
            style={{ opacity: opacity }} // Opacity control with state
          >
            {/* Render current items */}
            {currentItems.map((item, index) => (
              <a
                href={item.href}
                target="_blank" rel="noopener noreferrer"
                key={index}
                id="podcast"
                className="flex flex-col border-b-[1px] border-zinc-600/30 p-3 hover:bg-neutral-600/15 md:w-80 md:mx-auto"
              >
                {/* Podcast image placeholder */}
                <img
                  src={item.img}
                  className="sm:h-42 sm:w-80 rounded-md w-full mb-3"
                  alt={`Podcast ${index + 1}`}
                />
                {/* Podcast information */}
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

            {/* Add skeletons to fill empty spaces on the last page */}
            {Array(skeletonsToAdd)
              .fill(0)
              .map((_, index) => (
                <div key={`skeleton-${index}`} className="flex flex-col border-b-[1px] border-zinc-600/30 p-3">
                  {/* Placeholder for image */}
                  <div className="bg-neutral-700 h-44 min-w-full rounded-md mr-3 mb-3"></div>

                  {/* Placeholder for text content */}
                  <div className="flex flex-col justify-between text-[0.6rem] w-full">
                    {/* Placeholder for title */}
                    <div className="w-3/4 h-4 bg-neutral-700 rounded mb-1"></div>
                    <div className="w-1/2 h-4 bg-neutral-700 rounded mb-2"></div>

                    {/* Placeholder for author */}
                    <div className="w-1/4 h-3 bg-neutral-700 rounded"></div>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination for smaller devices */}
          <div className="mb-5 mt-3 flex justify-between px-6 w-full md:px-8 xl:px-32">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 0 || isTransitioning} // Disable if transitioning
              className={`px-4 text-[0.7rem] ${currentPage === 0 ? "text-zinc-500" : "text-zinc-300"}`}
            >
              &lt; PREVIOUS PAGE
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(podcastEN.length / itemsPerPage) - 1 || isTransitioning} // Disable if transitioning
              className={`px-4 text-[0.7rem] ${
                currentPage === Math.ceil(podcastEN.length / itemsPerPage) - 1 ? "text-zinc-500" : "text-zinc-300"
              }`}
            >
              NEXT PAGE &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
}
