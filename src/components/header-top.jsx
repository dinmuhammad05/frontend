import locationIcon from "../assets/icon/location-icon.svg";
import toggleIcon from "../assets/icon/toggle-icon.svg";

export const HeaderTop = () => {
    return (
        <div className=" flex justify-between  items-center  px-5 py-2 border-b border-gray-300 pb-3 mt-3">

            <div className="ml-[300px]  header-top flex align-items-center justify-content-center gap-3">
                <img src={locationIcon} alt="Location Icon" />
                <p className="w-full">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>

            <div className="header-top flex align-items-center justify-content-center gap-3  mr-[300px]">
                <p>Eng</p>
                <img src={toggleIcon} alt="Toggle Icon" className=""/>
                <p>USD</p>
                <p>Sign In / Sign Up</p>
            </div>

        </div>
    );
};
