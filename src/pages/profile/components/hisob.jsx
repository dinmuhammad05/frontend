import cashIcon from "../../../assets/icons/profile/cash-icon.svg";
import paymeLogo from "../../../assets/icons/profile/payme-logo.svg";
import clickLogo from "../../../assets/icons/profile/click-logo.svg"

const Hisob = () => {
    return (
        <div className="w-[906px]">
            <h2 className="mb-[31px] font-bold text-2xl ">Э-Хисоб</h2>
            <div className="relative bg-[#3F51B5] rounded-[10px]  h-[98px]">
                <ul className="ml-[22px]  text-white ">
                    <li className="text-[14px] mb-3 pt-4">Баланс</li>
                    <li className="text-[18px] font-bold">45 000 сўм</li>
                </ul>
                <img
                    src={cashIcon}
                    alt="cash img"
                    className="absolute bottom-0 right-0 "
                />
            </div>

            <div className="flex justify-center items-center h-[61px] border  border-gray-200 mt-9 rounded-[10px]">
                <img src={paymeLogo} alt="payme icon" className="" />
            </div>

            <div className="flex justify-center items-center h-[61px] border  border-gray-200 mt-9 rounded-[10px]">
                <img src={clickLogo} alt="payme icon" className="" />
            </div>


        </div>
    );
};

export default Hisob;
