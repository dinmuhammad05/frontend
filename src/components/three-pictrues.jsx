import React, { useEffect, useState } from "react";
import banner1 from "../assets/png/banner-time.png";
import banner2 from "../assets/png/banner-meat.png";
import banner3 from "../assets/png/banner-vagetable.png";

export const ThreePictures = () => {
    const [time, setTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            let now = new Date();
            let end = new Date("2025-12-31");

            let diff = end - now;

            let d = Math.floor(diff / (1000 * 60 * 60 * 24));
            let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            let m = Math.floor((diff / (1000 * 60)) % 60);
            let s = Math.floor((diff / 1000) % 60);

            setTime({
                days: d < 10 ? `0${d}` : d,
                hours: h < 10 ? `0${h}` : h,
                minutes: m < 10 ? `0${m}` : m,
                seconds: s < 10 ? `0${s}` : s,
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (

        <div className=" container grid grid-cols-3 gap-6">

            {/* 1 - TIME BANNER */}
            <div
                className="w-[424px] h-[536px] flex flex-col rounded-xl overflow-hidden bg-cover bg-center relative"
                style={{ backgroundImage: `url(${banner1})` }}
            >

                <div className="mt-[65px] w-full text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Sale of the Month</h2>
                    <div className="flex justify-center items-center gap-4 text-white text-lg font-bold">
                        <div className="flex flex-col items-center">
                            <span className="text-white text-3xl font-normal rounded-md w-14 h-14 flex items-center justify-center">
                                {time.days}
                            </span>
                            <p>Days</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-white text-3xl font-normal rounded-md w-14 h-14 flex items-center justify-center">
                                {time.hours}
                            </span>
                            <p>Hours</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-white text-3xl font-normal rounded-md w-14 h-14 flex items-center justify-center">
                                {time.minutes}
                            </span>
                            <p>Mins</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-white text-3xl font-normal rounded-md w-14 h-14 flex items-center justify-center">
                                {time.seconds}
                            </span>
                            <p>Secs</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2 - MEAT */}
            <div
                className="w-[424px] h-[536px] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${banner2})` }}
            ></div>

            {/* 3 - VEGETABLE */}
            <div
                className="w-[424px] h-[536px] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${banner3})` }}
            ></div>
        </div>
    );
    
};
