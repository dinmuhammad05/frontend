import userIcon from "../../../assets/icons/profile/user-icon.svg";
import toggle from "../../../assets/icons/profile/toggle-icon.svg";

const Sozlamalar = () => {
    return (
        <div className="w-[966px] h-[463px] shadow-lg rounded-[10px] p-5">
            <h2 className="font-extrabold text-2xl mb-8">Созламалар</h2>

            <div className="mb-10 flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#3F51B5] mr-4">
                    <img
                        src={userIcon}
                        alt="user icon"
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="text-[#3F51B5] cursor-pointer hover:underline">
                    Сурат юклаш
                </p>
            </div>

            <p className="font-bold mb-2">Исмингиз</p>

            <div className="flex justify-between items-center w-full max-w-[320px] h-12 border rounded-lg px-4 cursor-pointer">
                <p>Исмингиз</p>
                <img src={toggle} alt="toggle" />
            </div>

            <button className="w-[343px] h-11 mt-16 bg-[#3F51B5] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Сақлаш
            </button>
        </div>
    );
};

export default Sozlamalar;
