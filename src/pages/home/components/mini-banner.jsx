import { Heart } from "../../../assets/icons/heart"

export const MiniBanner = () => {
    return (
        <div className="text-[#ffff]">
            <h1 className="text-2xl text-center pt-8 pb-5">Китоб ўқишни ёқтирасизми?</h1>
            <p className="font-normal text-start pl-[22px] pr-6">Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
            <a href="#">
                <div className="cursor-pointer mt-[77px] mx-auto flex justify-center px-6 py-2 gap-3 bg-white max-w-[210px] rounded-[14px]">
                    <Heart />
                    <p className="text-black">Обуна бўлиш</p>
                </div>
            </a>
        </div>
    )
}
