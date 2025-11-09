import React from "react";
import { UserIcon } from "../../assets/icon/user-icon";
import { TransmissionIcon } from "../../assets/icon/tranmission-icon";
import { ManageIcon } from "../../assets/icon/manage-icon";
import { EngineIcon } from "../../assets/icon/engine-icon";

export const Cars = ({
    image,
    name,
    type,
    seats,
    transmission,
    minAge,
    engine,
}) => {
    return (
        <div className="container rounded-[20px] p-5 mt-2.5 bg-[#F5F5F5] dark:bg-[#272727] dark:text-white">
            <h2 className="font-semibold text-black dark:text-white text-2xl">{name}</h2>
            <p className="font-medium text-[#555] dark:text-gray-300 text-sm">
                {type}
            </p>

            <img src={image} alt={name} className="w-full" />

            <div className="grid grid-cols-2 gap-6 font-semibold text-base mt-5">
                <div className="flex items-center gap-3">
                    <UserIcon />
                    <p className="text-black dark:text-white">{seats} Seats</p>
                </div>
                <div className="flex items-center gap-3">
                    <TransmissionIcon />
                    <p className="text-black dark:text-white">{transmission}</p>
                </div>
                <div className="flex items-center gap-3">
                    <ManageIcon />
                    <p className="text-black dark:text-white">{minAge}+ Years</p>
                </div>
                <div className="flex items-center gap-3">
                    <EngineIcon />
                    <p className="text-black dark:text-white">{engine}</p>
                </div>
            </div>
        </div>
    );
};
