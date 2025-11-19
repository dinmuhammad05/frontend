import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
    const { pathname } = useLocation();

    const navItem = (path: string, label: string) => (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `py-10 font-extrabold cursor-crosshair ${
                    isActive ? "text-red-400" : "text-black"
                }`
            }
        >
            {label}
        </NavLink>
    );

    return (
        <div className="w-[1200px] mx-auto flex justify-center pb-6 items-center">
            <ul
                className={
                    pathname === "/"
                        ? "text-5xl flex flex-col justify-center items-center gap-10"
                        : "text-3xl flex justify-between items-center gap-10"
                }
            >
                <li>{navItem("/", "Home")}</li>
                <li>{navItem("/typography", "Typography")}</li>
                <li>{navItem("/colors", "Colors")}</li>
                <li>{navItem("/buttons", "Buttons")}</li>
                <li>{navItem("/inputs", "Inputs")}</li>
            </ul>
        </div>
    );
};
