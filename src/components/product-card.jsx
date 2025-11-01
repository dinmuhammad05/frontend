import React from "react";

export const ProductCard = ({ img, title, sub_title = "", icon = "" }) => {
    if (sub_title && icon) {
        return (
            <div>
                <img className="w-[239px] h-[336px]" src={img} alt="img" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="font-normal text-sm">{sub_title}</p>
                <img src={icon} alt="icon" />
            </div>
        );
    }
    return (
        <div>
            <img className="w-[190px] h-[267px]" src={img} alt="img" />
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
    );
};
