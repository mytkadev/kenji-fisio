import { teams } from "../constants/index";

const Teams = () => {
  return (
    <div className="w-full h-20 md:h-24 flex items-end overflow-x-hidden">
      {/* Gradiente maior no mobile (64px) */}
      <div className="bg-gradient-to-r from-firstColor to-secondColor w-full h-16 md:h-20 flex items-center justify-center text-center shadow-shape">
        {/* Faixa preta sempre 2px menor */}
        <div className="bg-[#1e1e1e] h-[calc(4rem-2px)] md:h-[calc(5rem-2px)] w-full relative flex items-center overflow-hidden">
          <ul className="flex animate-autoRun whitespace-nowrap min-w-max will-change-transform">
            {teams.concat(teams).map((item, index) => (
              <li
                key={index}
                className="group relative flex items-center justify-center mx-2.5 md:mx-6"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-8 md:h-12 inline-block"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
