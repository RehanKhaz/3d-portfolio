'use client'
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { navItems } from "../constants";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-dvw top-0  bg-black/40  left-0 z-50 ">
            <div className="flex items-center text-neutral-400 justify-between w-full py-6 max-lg:px-10 max-sm:px-7   px-16">
                {/* Logo */}
                <Link href={'/'} className="text-3xl transition-colors hover:text-white ease-in-out duration-500 max-sm:text-2xl  font-bold">
                    &lt;Rehan./&gt;
                </Link>

                {/* Menu Icon */}
                <div onClick={() => setIsMenuOpen((prev) => !prev)} className="cursor-pointer md:hidden">
                    <Image src={!isMenuOpen ? '/assets/menu.svg' : '/assets/close.svg'} alt="menu" width={26} height={26} />
                </div>

                {/* SideBar Menu and NavBar (Fully Reusable) */}
                <nav className={`${isMenuOpen ? 'flex-col backdrop-blur-sm transition-all duration-1000 ease-in-out overflow-hidden z-20 absolute top-20 left-0 w-full h-[50vh] justify-center bg-[#0E0E10] flex gap-8 px-10' : 'max-md:hidden'} flex md:items-center max-md:gap-5 gap-8`}>
                    {
                        navItems.map((item, i) => {
                            return <a onClick={() => setIsMenuOpen(false)} className="cursor-pointer max-md:w-full max-md:hover:bg-[#3A3A49] max-md:px-4 max-md:py-3 rounded-xl font-medium transition-colors duration-1000 ease-in-out hover:text-white text-lg " key={i} href={`#${item.toLowerCase()}`}>
                                {item}
                            </a>
                        })
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header;