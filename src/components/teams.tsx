import { useState } from 'react';
import { teams } from '../constants/index';

const Teams = () => {
  // hover só para desktop; no mobile não há :hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-24 flex items-end overflow-x-hidden">
      <div className="bg-gradient-to-r from-firstColor to-secondColor w-full h-20 flex items-center justify-center text-center shadow-shape">
        <div className="bg-[#1e1e1e] h-[calc(5rem-2px)] w-full relative flex items-center overflow-hidden">
          <ul
            className="
              inline-flex min-w-max whitespace-nowrap
              will-change-transform [transform:translateZ(0)]
              animate-[autoRun_40s_linear_infinite] md:animate-[autoRun_20s_linear_infinite]
            "
          >
            {teams.concat(teams).map((item, index) => (
              <li
                key={index}
                className={`
                  list-none mx-4 inline-block flex-none text-lg text-zinc-50
                  transition-opacity duration-300 group
                  ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative flex justify-center items-center text-center">

                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-10 md:h-12 inline-block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
