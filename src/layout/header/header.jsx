import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { SearchBar } from "./search-bar";
import { Navbar } from "./navbar";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";

export const Header = () => {
    return (
        <header className="py-[21px]">
            <div className="container flex justify-between gap-5 items-center">
                <div className="flex gap-[46px] grow py-[21px]">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <SearchBar />
                </div>
                <div className="w-[276px] h-[52px] flex gap-5 ">
                    <div className="w-[105px] flex gap-2 items-center bg-blue-200 rounded-2xl px-4 py-2">
                        <span>
                            <img src={icon1} alt="icon" />
                        </span>
                        <p>Ўз</p>
                        <span>
                            <img src={icon2} alt="icon" />
                        </span>
                    </div>
                    <div className="w-[151px] flex gap-2 items-center bg-blue-600 text-white rounded-2xl px-4 py-2">
                        <img src={icon3} alt="icon" />
                        <p className="text-white font-semibold">Кириш</p>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
};
