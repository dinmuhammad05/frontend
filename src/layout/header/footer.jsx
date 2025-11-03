import { AppleStore } from "../../assets/icons/apple-store"
import { GooglePlaymarket } from "../../assets/icons/google-playmarket"
import { Facebook } from "../../assets/icons/social/facebook"
import { Humo } from "../../assets/icons/social/humo"
import { Instagram } from "../../assets/icons/social/instagram"
import { Payme } from "../../assets/icons/social/payme"
import { Telegram } from "../../assets/icons/social/telegram"
import { TikTok } from "../../assets/icons/social/tik-tok"
import { Uzcard } from "../../assets/icons/social/uzcard"
import { Youtube } from "../../assets/icons/social/youtube"

export const Footer = () => {
    return (
        <>
            <div className="bg-primary_soft">
                <div className="container h-70 flex gap-36">
                    <div className="flex flex-col gap-4 mt-8 ml-19">
                        <h3 className="font-bold text-[19px]">Платформа хақида</h3>
                        <p>Liber ўзи нима?</p>
                        <p>Фойдаланиш шартлари</p>
                        <p>Ёрдам</p>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="font-bold text-[19px]">Обуна хақида</h3>
                        <p>Обуна бўлиш</p>
                        <p>Қандай тўлаш</p>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="font-bold text-[19px]">Китоблар</h3>
                        <p>Аудио китоблар</p>
                        <p>Электрон китоблар</p>
                        <p>Китоблар</p>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="font-bold text-[19px]">Мобил илова</h3>
                        <GooglePlaymarket />
                        <AppleStore />
                    </div>


                </div>
            </div>
            <div className="bg-[#10182c] h-25">
                <div className="container flex gap-30">

                    <div className="mt-4">
                        <h4 className="text-white font-light">Ижтимоий тармоқлар</h4>
                        <div className="flex gap-6 my-3">
                            <Facebook />
                            <Youtube />
                            <TikTok />
                            <Telegram />
                            <Instagram />
                        </div>
                    </div>

                    <div className="text-white mt-4 font-light">
                        <p>Боғланиш</p>
                        <div className="flex gap-3 mt-3">
                            <p>+998 90 253 77 53</p>
                            <p>support@liber.uz</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-white font-light">Биз қабул қиламиз</h4>
                        <div className="flex mt-2 gap-2">
                            <Uzcard />
                            <Humo />
                            <div className="bg-white w-[57px] h-7 mt-1 rounded-[5px] flex justify-center items-center">
                                <Payme />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
