import React from "react";
import logo from "../assets/svg/logo.svg";
import { MenuIcon } from "../assets/icon/menu-icon";
import { DarkMode } from "../assets/icon/dark-mode-icon";
import { LogoutIcon } from "../assets/icon/logout-icon";

export const Header = () => {
    return (
        <header className="w-full tablet:h-[94px] border-b border-gray-400">
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
                        <p className="text-black cursor-pointer">Categories</p>
                        <p className="text-black cursor-pointer">About Us</p>
                        <p className="text-black cursor-pointer">Help center</p>
                    </nav>

                    <div className="desktop:hidden">
                        <button>
                            <MenuIcon />
                        </button>
                    </div>

                    <div className="hidden desktop:flex desktop:justify-between desktop:items-center">
                        <a
                            href="tel:+998908199751"
                            className="font-bold text-black mr-6"
                        >
                            +1 855 420 0000
                        </a>

                        <DarkMode />

                        <div
                            className="
                                        desktop:flex desktop:justify-center desktop:items-center
                                        desktop:bg-[#299764] desktop:ml-4 desktop:w-[142px] desktop:h-[58px]
                                        desktop:rounded-[100px] desktop:gap-2
                                        "
                        >
                            <p className="text-white font-medium">Login</p>
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
