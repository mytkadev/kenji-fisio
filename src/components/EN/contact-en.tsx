import Instagram from "../../assets/images/Instagram.png";
import Linkedin from "../../assets/images/LinkedIn.png";
import Imagem from "../../assets/images/imgcontact.jpg";

export function ContactEN() {
  return (
    <>
      <div className="mb-14">
        <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance xl:mt-10">
          Get in Touch
        </h2>
        <div className="text-center flex justify-center lg:mx-32">
          <div className="lg:bg-gradient-to-tr lg:from-firstColor lg:to-secondColor lg:p-[1px] lg:rounded-lg lg:w-full">
            <div
              id="tudo"
              className="lg:mx-0 lg:bg-[#1e1e1e] lg:rounded-lg flex flex-row justify-between"
            >
              <div className="text-center flex flex-col justify-center lg:mx-0 lg:bg-[#1e1e1e] lg:py-10 lg:rounded-lg lg:w-1/2">
                <p className="text-zinc-200 font-light">
                  Get in touch through social media:
                </p>
                <div className="flex flex-row text-center justify-center my-4">
                  <div
                    id="redesSociais-Insta"
                    className="bg-gradient-to-tr from-firstColor to-secondColor p-[0.06rem] rounded-full shadow-shape mr-2"
                  >
                    <a
                      href="https://www.instagram.com/kenji_fisio/"
                      className="h-10 w-10 rounded-full bg-[#1e1e1e] flex items-center justify-center shadow-shape hover:bg-zinc-800"
                      target="__blank "
                    >
                      <img src={Instagram} alt="" className="p-2.5" />
                    </a>
                  </div>
                  <div
                    id="redesSociais-Linkedin"
                    className="bg-gradient-to-tr from-firstColor to-secondColor p-[0.06rem] rounded-full shadow-shape mr-4"
                  >
                    <a
                      href="https://www.linkedin.com/in/kenjifisio/?originalSubdomain=br"
                      className="h-10 w-10 rounded-full bg-[#1e1e1e] p flex items-center justify-center shadow-shape  hover:bg-zinc-800"
                      target="__blank "
                    >
                      <img src={Linkedin} alt="" className="p-2.5" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-200 font-light mb-4">Or send an email:</p>
                <div id="formulario" className="mx-10">
                  <form action="https://formsubmit.co/mytkalol@gmail.com" method="POST">
                    <div className="sm:flex sm:flex-row">
                      <input
                        type="text"
                        name="name"
                        className="form-control p-2.5 rounded-md w-full bg-[#1e1e1e] text-zinc-300 mb-3 border border-zinc-700 sm:mr-3"
                        placeholder="Your name"
                        required
                      ></input>
                      <input
                        type="email"
                        name="email"
                        className="form-control p-2.5 w-full rounded-md bg-[#1e1e1e] text-zinc-300 border border-zinc-700 mb-3"
                        placeholder="Your email"
                        required
                      ></input>
                    </div>
                    <textarea
                      placeholder="Your message"
                      className="form-control  p-2.5 w-full rounded-md bg-[#1e1e1e] text-zinc-300 mb-3 border border-zinc-700 "
                      name="message"
                      rows={10}
                      required
                    ></textarea>
                    <div className="flex justify-end ">
                      <div className="bg-gradient-to-tr from-firstColor to-secondColor w-full p-[1px] rounded-md mb-6 lg:mb-0 md:w-fit">
                        <button
                          type="submit"
                          className="p-3 bg-[#1a1a1a] w-full rounded-md text-zinc-100 md:w-fit lg:px-8"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <img
                src={Imagem}
                alt=""
                className="hidden lg:flex lg:w-1/2 h-[700px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
