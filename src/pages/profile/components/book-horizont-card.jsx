import { Star } from "../../../assets/icons/star";
import { Headphone } from "../../../assets/icons/headphone";
import { SaveIcon } from "../../../assets/icons/save-icon";

export const BookProfileCard = ({ img, title, ganre, star, desc }) => {
    return (
        <div className="w-[970px] h-[354px] p-5 bg-white border border-[#E5E7EB] rounded-xl flex gap-6 shadow-sm hover:shadow-md transition-all cursor-pointer">

            <img
                src={img}
                alt={title}
                className="w-[218px] h-[307px] object-cover rounded-md"
            />

            <div className="flex-1 flex flex-col justify-between">

                {/* Top section */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-[18px] font-bold leading-tight">{title}</h3>
                        <p className="text-[#3F51B5] text-[14px] mt-1">{ganre}</p>
                    </div>

                    <div className="flex gap-1 items-center text-[#FF7F4D]">
                        <Star />
                        <span className="font-semibold text-[15px]">{star}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#6B7280] leading-[1.4] mt-3 line-clamp-3">
                    {desc}
                </p>

                {/* Bottom icons */}
                <div className="flex justify-end gap-5 mt-4">
                    <Headphone />
                    <SaveIcon />
                </div>

            </div>

        </div>
    );
};
