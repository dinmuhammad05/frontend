import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import searchIcon from "../assets/icon/search-icon.svg";
import heartIcon from "../assets/icon/heart-icon.svg";
import cartIcon from "../assets/icon/cart-icon.svg";

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <div className=" container p-5 flex justify-between">
            <div onClick={handleLogoClick}>
                <img src={logo} alt="Logo" />
            </div>

            <div className="flex items-center pl-4 h-10 rounded-md border">
                <div className="flex items-center gap-2 flex-1">
                    <img
                        src={searchIcon}
                        alt="Search Icon"
                        className="w-5 h-5"
                    />

                    <input
                        type="text"
                        className="flex-1 outline-none"
                        placeholder="Search"
                    />
                </div>

                <button className="ml-auto px-4 bg-[#00B207] text-white rounded-md h-full">
                    Submit
                </button>
            </div>

            <div className="flex  items-center">
                <NavLink className={"active:text-red-600"} to="/">
                    <img
                        className="mt-1 pr-4 border-r-2 mr-4"
                        src={heartIcon}
                        alt="Heart Icon"
                    />
                </NavLink>
                <NavLink className={"active:text-red-600"} to="/cart">
                    <img className="mr-3" src={cartIcon} alt="Cart Icon" />
                </NavLink>
                <div>
                    <p>Shopping cart:</p>
                    <p>$57.00</p>
                </div>

                {/* <NavLink className={"active:text-red-600"} to="/">Home</NavLink>
        <NavLink className={"active:text-red-600"} to="/about">About</NavLink>
        <NavLink className={"active:text-red-600"} to="/blog">Blog</NavLink>
        <NavLink className={"active:text-red-600"} to="/news">News</NavLink> */}
            </div>
        </div>
    );
};

export default Header;
