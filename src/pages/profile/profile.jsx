import profileAvatar from "../../assets/png/profile-avatar.png";
import hisobIcon from "../../assets/icons/profile/hisob-icon.svg";
import kitoblarimIcon from "../../assets/icons/profile/kitoblarim-icon.svg";
import saqlanganlarIcon from "../../assets/icons/profile/saqlanganlar-icon.svg";
import sozlamalarIcon from "../../assets/icons/profile/sozlamalar-icon.svg";
import tungiRejimIcon from "../../assets/icons/profile/light-rejim-icon.svg";
import obunaIcon from "../../assets/icons/profile/obuna-icon.svg";

// 1. useEffect endi kerak emas, olib tashlandi
import { useEffect, useState } from "react";

import Obuna from "./components/obuna";
import Hisob from "./components/hisob";
import Kitoblarim from "./components/kitoblarim";
import Saqlanganlar from "./components/saqlanganlar";
import Sozlamalar from "./components/sozlamalar";

export const Profile = () => {
    const [activeTab, setActiveTab] = useState("obuna");

    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector(".navbar"); // <-- O'Z NAVBARINGIZ KLASSINI YOZING

        if (navbar) {
            // Navbar'ning eski 'display' qiymatini eslab qolamiz
            const oldDisplay = navbar.style.display;

            // Navbar'ni yashiramiz
            navbar.style.display = "none";

            // Sahifadan chiqib ketilganda, Navbar'ni qayta ko'rsatish uchun
            return () => {
                navbar.style.display = oldDisplay || "block"; // Yoki "flex"
            };
        }
    }, []);

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


    // 3. useEffect va localStorage bilan ishlaydigan barcha kod olib tashlandi

    // 4. Tugmani bosish funksiyasi (rangni o'zgartirmaydi)
    const handleToggle = () => {
        setIsToggled((prev) => !prev);
    };

    return (
        // 5. Asosiy div'dan "dark:bg-gray-900" olib tashlandi
        <div className="container pb-16 dark:bg-[#364e9c]black  dark:text-white">
            <div className="flex bg-[#FAFAFA] shadow-md items-center p-6 mt-10  dark:bg-[#364e9c]  dark:text-white">
                <img src={profileAvatar} alt="" />
                <div className="p-5 rounded-lg">
                    <h2 className="text-3xl mb-2 font-bold">
                        Суғдиёна Икромова
                    </h2>
                    <p className="text-lg mb-2">+998 90 253 77 53</p>
                    <p>ID: 0001 Баланс: 45 000 сўм</p>
                </div>
            </div>
            <div className=" mt-[62px] flex gap-8 ">

                <div className="w-[288px] h-[345px] shrink-0 rounded-2xl shadow-md border border-gray-100 py-6 dark:bg-[#364e9c] dark:text-white">
                    {" "}
                    <ul className="flex flex-col gap-2">
                        <li
                            onClick={() => setActiveTab("obuna")}
                            className="flex gap-4 items-center px-6 py-2 cursor-pointer hover:text-blue-600"
                        >
                            <img src={obunaIcon} alt="" />
                            <p>Обуна бўлиш</p>
                        </li>
                        <li
                            onClick={() => setActiveTab("hisob")}
                            className="flex gap-4 items-center px-6 py-2 cursor-pointer hover:text-blue-600"
                        >
                            <img src={hisobIcon} alt="" />
                            <p>Э-Хисоб</p>
                        </li>
                        <li
                            onClick={() => setActiveTab("kitoblarim")}
                            className="flex gap-4 items-center px-6 py-2 cursor-pointer hover:text-blue-600"
                        >
                            <img src={kitoblarimIcon} alt="" />
                            <p>Китобларим</p>
                        </li>
                        <li
                            onClick={() => setActiveTab("saqlanganlar")}
                            className="flex gap-4 items-center px-6 py-2 cursor-pointer hover:text-blue-600"
                        >
                            <img src={saqlanganlarIcon} alt="" />
                            <p>Сақланганлар</p>
                        </li>
                        <li
                            onClick={() => {setActiveTab("sozlamalar" )}}
                            className="flex gap-4 items-center px-6 py-2 cursor-pointer hover:text-blue-600"
                        >
                            <img src={sozlamalarIcon} alt="" />
                            <p>Созламалар</p>
                        </li>

                        {/* --- YANGILANGAN TUNGI REJIM --- */}
                        <li
                            onClick={handleToggle} // Funksiya nomi o'zgardi
                            className="flex justify-between items-center px-6 py-2 cursor-pointer hover:text-blue-600"
                        >
                            <div className="flex gap-4 items-center">
                                
                                <img src={tungiRejimIcon} alt="" />
                                <p onClick={()=>{setDark(!dark)}}>Тунги режим</p>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setDark(!dark)
                                }}
                                className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${isToggled ? "bg-blue-600" : "bg-gray-200" // "dark:bg-gray-600" olib tashlandi
                                    }`}
                                role="switch"
                                aria-checked={isToggled}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isToggled
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                        }`}
                                />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    {activeTab === "obuna" && <Obuna />}
                    {activeTab === "hisob" && <Hisob />}
                    {activeTab === "kitoblarim" && <Kitoblarim />}
                    {activeTab === "saqlanganlar" && <Saqlanganlar />}
                    {activeTab === "sozlamalar" && <Sozlamalar />}
                </div>
            </div>
        </div>
    );
};
