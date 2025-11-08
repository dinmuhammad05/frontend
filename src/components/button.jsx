import React, { useState } from "react";

export const FilterButton = ({
    label,
    onClick,
    isActive,
    mobileWidth = "w-[106px]",
    mobileHeight = "h-[45px]",
    tabletWidth = "tablet:w-[155px]",
    tabletHeight = "tablet:h-[58px]",
    desktopWidth,
    desktopHeight,
}) => {
    const [hovered, setHovered] = useState(false);

    const finalDesktopWidth = desktopWidth || tabletWidth;
    const finalDesktopHeight = desktopHeight || tabletHeight;

    return (
        <button
            className={`
                border border-gray-300 rounded-[100px] font-semibold 
                flex items-center justify-center text-sm
                transition-all duration-300
                
                ${mobileWidth} ${mobileHeight}
                ${tabletWidth} ${tabletHeight}
                ${finalDesktopWidth} ${finalDesktopHeight}
                
                ${
                    isActive || hovered
                        ? "bg-[#299764] text-white border-[#299764]"
                        : "bg-white text-black hover:bg-[#299764] hover:text-white hover:border-[#299764]"
                }
            `}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
        </button>
    );
};
