import logo from "../../assets/images/Logo.png"
import { navItemsEN } from "../../constants";
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const NavbarPTBR = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const [languageSetOpen, setLanguageSetOpen] = useState(false);

    let menuRef = useRef<HTMLDivElement | null>(null);

    const toggleLanguageSelector = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLanguageSetOpen(prev => !prev);

        // Se o dropdown estiver sendo fechado, remover o foco do botão
        if (languageSetOpen) {
            event.currentTarget.blur();
        }
    };

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setLanguageSetOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <nav className="text-emerald-50 sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-transparentBlack">
            <div className="px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0 relative top-1 xl:w-56">
                        <img src={logo} alt="Logo" className="mr-2 w-26 h-auto"/>
                    </div>
                    {/* Links da navbar para telas maiores */}
                    <ul className="hidden lg:flex space-x-8 font-normal text-zinc-300">
                        {navItemsEN.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-zinc-50 group relative transition-colors duration-[400ms] py-1.5 px-0.5">
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-firstColor transition-all delay-75 duration-100 group-hover:w-full"/>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Seletor de linguagem e botão de contato para telas maiores */}
                    <div className="hidden lg:flex justify-center items-center ">
                        <div className="relative w-24 justify-between " ref={menuRef}>
                            <button
                                id="languageSelectorButton"
                                onClick={toggleLanguageSelector}
                                className={`flex flex-row items-center justify-between px-[5px] w-full py-2 border 
                                border-b-0 border-transparent rounded-md rounded-b-none 
                                ${languageSetOpen ? 'focus:bg-transparentBlackII hover:bg-transparentBlackII focus:border focus:border-neutral-700/80 focus:border-b-0' :' border-neutral-700/80'}
                                `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-zinc-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                </svg>
                                <div className="text-xs ml-2 text-zinc-300">
                                        EN
                                    </div>
                                <div className="flex flex-row items-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${languageSetOpen ? 'hidden' : 'flex size-3 ml-1'}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${languageSetOpen ? 'flex size-3 ml-1' : 'hidden'}`}>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>

                                </div>
                            </button>
                            {languageSetOpen && (
                                <div id="languageSelectorDropdown" className="bg-transparentBlackII rounded-b-md w-full absolute py-1 flex flex-col items-center text-xs border border-t-0 border-neutral-700/80 pb-2 ">
                                    <Link to="/" className="w-full text-center py-1 hover:bg-zinc-800 text-zinc-300">
                                        PT-BR
                                    </Link>
                                </div>
                            )}
                        </div>

                        <a href="#" className="bg-gradient-to-r from-firstColor to-secondColor py-2 px-4 rounded-md text-zinc-900 font-semibold w-32 flex justify-center shadow-shape ml-5">
                            Get in touch
                        </a>
                    </div>

                    {/* Botão para abrir o menu em dispositivos móveis */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 top-full bg-transparentBlackII w-full pt-2 pb-6 px-6 flex flex-col justify-center items-center text-center lg:hidden gap-6 border-b-[1px] border-neutral-700/80">
                        <ul className="w-full">
                            {navItemsEN.map((item, index) => (
                                <li key={index} className="text-lg border-b border-neutral-700/30 py-2.5">
                                    <a href={item.href} className="font-normal text-zinc-300">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-4 items-center">
                        <div className="relative w-24" ref={menuRef}>
                            <button
                                id="languageSelectorButton"
                                onClick={toggleLanguageSelector}
                                className={`flex flex-row items-center w-full justify-center py-2 border 
                                border-b-0 border-transparent rounded-md rounded-b-none 
                                ${languageSetOpen ? 'focus:bg-transparentBlackII hover:bg-transparentBlackII focus:border focus:border-neutral-700/80 focus:border-b-0' :' border-neutral-700/80'}
                                `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-zinc-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                </svg>
                                <div className="flex flex-row items-center">
                                    <div className="text-xs ml-2 text-zinc-300">
                                        EN
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${languageSetOpen ? 'hidden' : 'flex size-3 ml-1'}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${languageSetOpen ? 'flex size-3 ml-1' : 'hidden'}`}>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>

                                </div>
                            </button>
                            {languageSetOpen && (
                                <div id="languageSelectorDropdown" className="bg-transparentBlackII rounded-b-md w-full absolute py-1 flex flex-col items-center text-xs border border-t-0 border-neutral-700/80 pb-2 ">
                                    <Link to="/" className="w-full text-center py-1 hover:bg-zinc-800 text-zinc-300">
                                        PT-BR
                                    </Link>
                                </div>
                            )}
                        </div>

                            <a href="#" className="bg-gradient-to-r from-firstColor to-secondColor py-2 px-4 rounded-md text-zinc-900 font-semibold w-fit flex justify-center">
                            Get in touch
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavbarPTBR;
