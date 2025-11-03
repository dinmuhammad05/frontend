import { Star } from "../../../assets/icons/star"

export const LookLikeBook = ({ title, ganre, comment, img, star }) => {
    return (
        <a href="#">
            <div className="flex gap-4 w-[350px] grow">
                <img src={img} alt={title} className="w-[139px] h-[196px]" />
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-primary_color">{ganre}</p>
                    <div className="flex justify-between items-center gap-7">
                        <div className="flex text-[#FF754C]">
                            <Star />
                            <p className="font-bold">{star}</p>
                        </div>
                        <p className="text-[#AAAAAA]">{comment} фикpлар</p>
                    </div>
                </div>
            </div>
        </a>
    )
}
