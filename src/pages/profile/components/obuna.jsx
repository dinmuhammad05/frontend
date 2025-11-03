import profileObuna from "../../../assets/profile-obuna.svg";
import profileObunaChiziq from "../../../assets/profile-obuna-chiziq.svg";
import toggle from "../../../assets/icons/profile/toggle-icon.svg";

const Obuna = () => {
    return (
        // Asosiy fon uchun wrapper
        <div className="">
            {/* 1. Yuqori banner (bu qism to'g'ri edi) */}
            <div className="relative flex items-center w-full h-[175px] bg-[#FF7F4D] rounded-[10px] px-10 overflow-hidden">
                {/* Matn */}
                <p className="w-[331px] h-16 text-[26px] font-bold leading-[123%] text-white">
                    Узингиз севган булимга обуна бўлинг
                </p>

                {/* Orqa fon chiziqlari (absolyut) */}
                <img
                    src={profileObunaChiziq}
                    alt="line "
                    className="absolute left-0 top-0 w-full h-full object-cover"
                />
                {/* Rasm (absolyut) */}
                <img
                    src={profileObuna}
                    alt="line"
                    className="absolute right-10 -bottom-5 w-[210px] select-none pointer-events-none"
                />
            </div>

            <div className=" w-[939px] h-[463px] p-[30px] shadow-lg rounded-[10px] mt-8">
                {/* Blok sarlavhasi */}
                <h2 className="font-extrabold text-2xl mb-8">Обуна</h2>

                {/* Endi layout 2 ustunga bo'linadi: 'flex' */}
                <div className="flex justify-between gap-8">
                    {/* --- CHAP USTUN (Inputlar) --- */}
                    <div className="flex-1">
                        {/* Birinchi "Dropdown" */}
                        <div className="mb-6">
                            <p className="font-bold mb-2">
                                Обуна давом этиш вакти
                            </p>
                            {/* "Soxta" dropdown: border va flex bilan */}
                            <div className="flex justify-between items-center w-full max-w-[320px] h-12 border rounded-lg px-4 cursor-pointer">
                                <p>30 кун</p>
                                <img src={toggle} alt="toggle" />
                            </div>
                        </div>

                        {/* Ikkinchi "Dropdown" */}
                        <div className="mb-6">
                            <p className="font-bold mb-2">Булимни танланг</p>
                            <div className="flex justify-between items-center w-full max-w-[320px] h-12 border rounded-lg px-4 cursor-pointer">
                                <p>Фантастика</p>
                                <img src={toggle} alt="toggle" />
                            </div>
                        </div>

                        {/* Qalin matn */}
                        <p className="font-bold text-2xl mt-10">
                            Обуна 30 кун давом этади
                        </p>
                    </div>

                    <div className="w-full max-w-[320px] flex flex-col">
                        {/* Xulosa ro'yxati */}
                        <ul className="flex flex-col gap-4 mb-6">
                            <li className="flex justify-between items-center">
                                <p className="text-gray-600">Бошланиш вакти</p>
                                <p className="font-bold">12/09/2021</p>
                            </li>
                            <li className="flex justify-between items-center">
                                <p className="text-gray-600">Якунланиш вакти</p>
                                <p className="font-bold">12/10/2021</p>
                            </li>
                            <li className="flex justify-between items-center">
                                <p className="text-gray-600">Обуна нархи</p>
                                {/* Kodingizda 'text-' prefiksi tushib qolgan edi */}
                                <p className="font-bold text-[#3F51B5]">
                                    12 000 сум
                                </p>
                            </li>
                        </ul>

                        <button className="mt-4 w-full bg-[#3F51B5] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                            Обуна булиш
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Obuna;
