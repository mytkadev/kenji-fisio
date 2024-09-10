import logo from "../../assets/images/logo.svg"
import { navItemsPTBR } from "../../constants";
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { Link } from 'react-router-dom';

// Colocar um hover bonitinho na navbar em dispositivos maiores

const NavbarPTBR = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar =  () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    

    return (
    <nav className="text-emerald-50 sticky  top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-[transparentBlack]">

        <div className="px-6">
            <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0 relative top-1 w-56">
                <img src={logo} alt="" className="mr-2 w-26 h-auto"/>
            </div>
                <ul className="hidden lg:flex space-x-8 font-normal text-zinc-300">
                    {navItemsPTBR.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className=" hover:text-zinc-50 group relative transition-colors duration-[400ms] py-1.5 px-0.5">{item.label}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-firstColor transition-all delay-75 duration-100 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-5 items-center">
                    <div className="inline-flex rounded-md shadow-sm">
                    <Link to="/" className="px-4 py-2 text-sm font-medium border rounded-s-lg  bg-[#1F2E25] border-firstColor text-zinc-100 hover:text-white hover:bg-[#1A3726] dark:focus:text-white">
                        PT-BR
                    </Link>
                    <Link to="/en" className="px-4 py-2 text-sm font-medium border rounded-e-lg border-gray-700 text-zinc-200 hover:text-white hover:bg-[#252525] dark:focus:text-white">
                        EN
                    </Link>
                    </div>
                    <a href="#" className="bg-gradient-to-r from-firstColor to-secondColor py-2 px-4 rounded-md text-zinc-900 font-semibold w-24 flex justify-center">Contato</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 top-full bg-transparentBlackII w-full pt-2 pb-6 px-6 flex flex-col justify-center items-center text-center lg:hidden gap-6 border-b-[1px] border-neutral-700/80">
                    <ul className="w-full">
                        {navItemsPTBR.map((item, index) => (
                            <li key={index} className="text-lg border-b border-neutral-700/30 py-2.5">
                                <a href={item.href} className=" font-normal text-zinc-300">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-4 items-center">
                    <div className="inline-flex rounded-md shadow-sm">
                    <Link to="/" className="px-4 py-2 text-sm font-medium border rounded-s-lg focus:z-10  bg-[#1F2E25] border-firstColor text-zinc-100 hover:text-white hover:bg-[#1A3726] dark:focus:ring-blue-500 dark:focus:text-white">
                        PT-BR
                    </Link>
                    <Link to="/en" className="px-4 py-2 text-sm font-medium border rounded-e-lg focus:z-10 focus:ring-2 border-gray-700 text-zinc-200 hover:text-white hover:bg-[#252525] dark:focus:text-white">
                        EN
                    </Link>
                    </div>
                    <a href="#" className="bg-gradient-to-r from-firstColor to-secondColor py-2 px-4 rounded-md text-zinc-900 font-semibold w-fit flex justify-center">Entrar em contato</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
    )
}

export default NavbarPTBR