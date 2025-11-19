// import { useTranslation,  } from "react-i18next";
import { useTranslation } from "react-i18next";
import locationIcon from "../assets/icon/location-icon.svg";
import toggleIcon from "../assets/icon/toggle-icon.svg";
import i18n from "../i18n";

export const HeaderTop = () => {
    const { t } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="flex justify-between items-center px-5 py-2 border-b border-gray-300 pb-3 mt-3">
            <div className="ml-[300px] header-top flex items-center justify-center gap-3">
                <img src={locationIcon} alt="Location Icon" />
                <p className="w-full">{t("storeLocation")}</p>
            </div>

            <div className="header-top flex items-center justify-center gap-3 mr-[300px]">
                <select
                    value={i18n.language}
                    onChange={handleLanguageChange}
                    className="px-2 py-1 "
                >
                    <option value="en">Eng</option>
                    <option value="uz">Uzb</option>
                </select>
                {/* <img src={toggleIcon} alt="Toggle Icon" /> */}
                <p>{t("currency")}</p>
                <p>{t("signText")}</p>
            </div>
        </div>
    );
};
