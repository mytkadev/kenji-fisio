import Sacy from "../../assets/images/loud-sacy-valorant-masters-copenhagen 4 (1).png";
import Fallen from "../../assets/images/foto3 1.png";

export function TestimonialsEN() { // Alterado de `TestimonialsPT` para `TestimonialsEN`
  return (
    <div id="all-elements" className="tracking-wide flex flex-col align-center">
      <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
        What players are saying:
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
            <a
              href="https://www.youtube.com/watch?v=92UUWbe2LyQ"
              target="_blank"
              className=""
            >
              <div className="leading-[16px] bg-zinc-800/70 text-gray-50 border font-medium px-4 py-2 rounded-lg text-center">
              Watch testimonial<span className="font-extralight text-xs"><br></br>&#40;IN PT-BR&#41;</span>
              </div>
            </a>
          </div>

          <div className="absolute bottom-0 p-6 inset-x-0 text-white">
            <p className="text-sm font-light text-pretty">
              "When I was in Turkey, Kenji helped me out, he did a video call
              with me, and I was icing my wrist three times a day to relieve the
              pain and play comfortably [...]. By the upper finals and final,
              the pain was more manageable. I was treating it, and Kenji was
              helping me out. I did stretching and exercises and kept
              strengthening it. I arrived in Brazil last night and went to the
              LOUD training center this morning, and Kenji was there. He did
              something on my arm, and my pain disappeared."
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
          <div className="absolute top-0 px-6 py-4 text-white text-balance">
            <h2 className="text-3xl font-bold mb-2">Fallen</h2>
          </div>
          <div className="absolute top-0 p-6 right-0 px-4 py-6">
            <a
              href="https://www.instagram.com/reel/ChxH7TlDIbf/"
              target="_blank"
            >
              <div className="leading-[18px] bg-zinc-800/70 text-gray-50 border font-medium px-4 py-2 rounded-lg text-center">
                Watch exercises <br /> with Fallen
              </div>
            </a>
          </div>

          <div className="absolute bottom-0 p-6 inset-x-0 text-white">
            <p className="text-sm font-light ">
              "Kenji, things are getting serious these days! People are getting
              ready... I wish 18 years ago, when I started, that we already had
              professionals like Kenji keeping an eye on electronic sports.
              Thank you, Kenji, for the support."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
