import React from "react";
import { UserIcon } from "../../assets/icon/user-icon";
import { TransmissionIcon } from "../../assets/icon/tranmission-icon";
import { ManageIcon } from "../../assets/icon/manage-icon";
import { EngineIcon } from "../../assets/icon/engine-icon";

export const Cars = ({ bgColor, image, name, type, seats, transmission, minAge, engine, color }) => {
    return (
        <div className="container rounded-[20px] p-5 mt-2.5" style={{ backgroundColor: bgColor }}>
            <h2 className="font-semibold text-black text-2xl">{name}</h2>
            <p className="font-medium text-[#555] text-sm">{type}</p>
            <img src={image} alt={name} className="w-full" />
            
            <div className="grid grid-cols-2 gap-6 font-semibold text-base text-black mt-5">
                <div className="flex items-center gap-3">
                    <UserIcon />
                    <p>{seats} Seats</p>
                </div>
                <div className="flex items-center gap-3">
                    <TransmissionIcon />
                    <p>{transmission}</p>
                </div>
                <div className="flex items-center gap-3">
                    <ManageIcon />
                    <p>{minAge}+ Years</p>
                </div>
                <div className="flex items-center gap-3">
                    <EngineIcon />
                    <p>{engine}</p>
                </div>
            </div>
        </div>
    );
};