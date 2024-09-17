import { useState } from 'react';
import { teams } from '../constants/index';

const Teams = () => {
  // Permite que hoveredIndex seja null ou um número (índice)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-24 flex items-end overflow-x-hidden">
      <div className="bg-gradient-to-r from-firstColor to-secondColor w-full h-20 flex items-center justify-center text-center shadow-shape">
        <div className="bg-[#1e1e1e] h-[calc(5rem-2px)] w-full relative flex items-center">
          <ul className="flex w-full animate-autoRun whitespace-nowrap">
            {teams.concat(teams).map((item, index) => (
              <li
                key={index}
                className={`text-lg list-none text-zinc-50 mx-4 inline-block whitespace-nowrap flex-none transition-opacity duration-300 group 
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex justify-center items-center text-center">
                  <div className="absolute scale-0 text-sm bg-gradient-to-r from-firstColor to-secondColor p-[0.05rem] rounded-md group-hover:scale-100 bottom-[53px] transition-transform">
                    <div className="bg-[#1e1e1e] px-2 py-0.5 rounded-md">
                      <p>{item.name} | {item.start} - {item.end}</p>
                    </div>
                  </div>
                  <img src={item.logo} alt={item.name} className="h-12 inline-block" />
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
