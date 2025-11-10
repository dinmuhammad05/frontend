import React, { useEffect, useState } from "react";
import logo from "../assets/svg/logo.svg";
import { MenuIcon } from "../assets/icon/menu-icon";
import { DarkMode } from "../assets/icon/dark-mode-icon";
import { LightModeIcon } from "../assets/icon/light-mode-icon";
import { LogoutIcon } from "../assets/icon/logout-icon";    
    

export const Header = () => {
    const [dark, setDark] = useState(() => {
        const stored = localStorage.getItem("darkMode");
        return stored ? JSON.parse(stored) : false;
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", JSON.stringify(dark));
    }, [dark]);

    return (
        <header className="w-full tablet:h-[94px] border-b border-gray-400 dark:bg-[#1C1C1C] dark:text-white">
            <div
                className="
                max-w-[390px] mx-auto px-4
                tablet:max-w-[834px] tablet:px-[30px] tablet:py-[27px]
                desktop:max-w-[1440px] desktop:px-[120px]
            "
            >
                <div className="flex justify-between items-center py-4 tablet:py-0">
                    <img src={logo} alt="logo site" className="w-[150px]" />

                    <nav className="hidden desktop:flex gap-8 font-medium">
                        <p className="cursor-pointer text-black dark:text-white">
                            Categories
                        </p>
                        <p className="cursor-pointer text-black dark:text-white">
                            About Us
                        </p>
                        <p className="cursor-pointer text-black dark:text-white">
                            Help center
                        </p>
                    </nav>

                    <div className="desktop:hidden">
                        <button>
                            <MenuIcon />
                        </button>
                    </div>

                    <div className="hidden desktop:flex desktop:justify-between desktop:items-center">
                        <a
                            href="tel:+998908199751"
                            className="font-bold mr-6 text-black dark:text-white"
                        >
                            +1 855 420 0000
                        </a>

                        <button
                            onClick={() => setDark(!dark)}
                            className="mr-4 cursor-pointer dark:hidden"
                        >
                            <DarkMode />
                        </button>

                        <button
                            onClick={() => setDark(!dark)}
                            className="mr-4 cursor-pointer hidden dark:block"
                        >
                            <LightModeIcon />
                        </button>

                        <div
                            className="
                            desktop:flex desktop:justify-center desktop:items-center
                            desktop:bg-[#299764] desktop:ml-4 desktop:w-[142px] desktop:h-[58px]
                            desktop:rounded-[100px] desktop:gap-2
                        "
                        >
                            <p className="font-medium text-white dark:text-white">
                                Login
                            </p>
                            <button>
                                <LogoutIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
