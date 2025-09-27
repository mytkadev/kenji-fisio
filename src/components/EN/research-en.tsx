import artigo from "../../assets/images/artiho.png";

export function ResearchEN() {
  return (
    <>
      <div className="p-6 justify-center">
        <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
          Scientific Article
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
              "In 2022, eSports reached a global audience of 532 million viewers, with Brazil being one of the major markets. The growth of this industry has led to an increase in the number of eSports professionals (pro-players), who spend long hours in daily training, facing physical and cognitive challenges. Data was collected from 95 professional Brazilian players of League of Legends and Valorant, highlighting the relationship between musculoskeletal pain and the specificities of each modality. The research identified differences in the frequency and location of pain between the MOBA and FPS categories, indicating the importance of considering the particularities of each game when managing players' pain. Keyboard positioning and mouse grip type also influenced pain levels, emphasizing the need for individual ergonomic adjustments. The study provides valuable information for the prevention, treatment, and support of eSports athletes, aiming to ensure their well-being and success in the competitive world of electronic sports."
            </p>
            <br />
            <p className="text-base text-center text-neutral-300 font-light text-balance md:text-start">
              The scientific article "Pain in Professional e-Sport Athletes: A Pioneering Analysis of Valorant and League of Legends in Brazil", published in November 2023, represents a milestone in research on the physical challenges faced by digital athletes, being the first scientific article in the world to analyze injuries in professional e-sport players, offering essential insights for the development of physiotherapy practices adapted to the e-sports universe!
            </p>
            <div className="mt-8 text-center md:text-start">
              <a
                href="https://bjns.com.br/index.php/BJNS/article/view/189/149"
                className="p-3 bg-firstColor rounded-md font-sm py-2"
              >
                Read article
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
