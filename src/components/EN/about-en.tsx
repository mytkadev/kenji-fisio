import AboutImage from "../../assets/images/Mask group (10).png";

export function AboutEN() {
  return (
    <>
      <div className="lg:h-[80vh] md:mx-10 xl:mx-32 mb-5">
        <div className="lg:flex lg:flex-row lg:h-[80%] justify-between text-center items-center">
          <div className="h-full">
            <img
              src={AboutImage}
              alt=""
              className="hidden md:flex md:object-contain h-full w-full"
            />
          </div>
          <div className="text-center text-zinc-200 font-light px-12 text-balance lg:w-1/2">
            <h2 className="text-4xl pb-4 lg:py-8 xl:pt-0 xl:pb-10 sm:text-5xl lg:text-6xl text-center tracking-wide mx-3 lg:mx-0 lg:px-0 bg-gradient-to-r from-firstColor to-secondColor text-transparent bg-clip-text font-bold text-balance">
              Who is Vitor Kenji?
            </h2>
            <img src={AboutImage} alt="" className="md:hidden mb-8 " />
            <p>
              Vitor Kenji is a physiotherapist, graduated from UNINOVE – Universidade Nove de Julho. From 2009 to 2016, he worked in two clinics, practicing massage therapy, acupuncture, chiropractic, and sports rehabilitation.
            </p>
            <br></br>
            <p>
              Kenji then became a pioneer in e-sports physiotherapy in Brazil.
              His treatment plan encompasses health and performance for e-sports
              athletes, exercises to prevent repetitive strain injuries
              (tendinopathies), and performance enhancement.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
