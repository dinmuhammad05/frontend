import React, { useState } from "react";
import malibuImg from "../assets/png/malibu.png";
import { SearchIcon } from "../assets/icon/searcn-icon";
import { cars } from "../data";
import { Cars } from "./components/cars";
import { FilterButton } from "../components/button";

export const Home = () => {
    const [activeFilter, setActiveFilter] = useState("Compact");

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
    };
    return (
        <main>
            <div className="container">
                {/* section 1 */}
                <div
                    className="w-[358px] h-[300px] mx-auto rounded-[20px] bg-cover bg-center mt-5 text-center relative tablet:w-[794px] tablet:h-[500px] tablet:rounded-[20px] desktop:w-[1200px] "
                    style={{ backgroundImage: `url(${malibuImg})` }}
                >
                    <div className="text-center pt-10">
                        <div className="max-w-[416px] mx-auto">
                            <h2 className="text-2xl font-bold text-white tablet:text-4xl">
                                Compact cars
                            </h2>
                            <p className="text-white text-sm pt-1.5 tablet:text-base tablet:font-normal">
                                Rent cars as you are comfortable and where you
                                are comfortable.
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-[100px] overflow-hidden">
                        <button className="bg-white w-[350px] h-[60px] flex items-center justify-between pl-5 pr-1 tablet:w-[600px] tablet:h-[66px]">
                            <p className="text-[#6A6A6A] ">
                                Find the car of your dreams
                            </p>
                            <div className="w-14 h-14 bg-[#299764] rounded-full flex items-center justify-center ">
                                <SearchIcon className="text-white" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* section 2 */}
                <div>
                    <div className="text-center text-black  pt-[67px] desktop:pt-[87px] desktop:max-w-[575px] mx-auto">
                        <h2 className="font-semibold text-4xl">
                            Choose the car of your dreams
                        </h2>
                        <p className="text-base font-normal pt-2.5 text-[#606060]">
                            We provide our customers with the most incredible
                            driving emotions. That is why there are only
                            world-class cars in our fleet
                        </p>
                    </div>

                    <ul className="flex justify-between gap-3.5 pt-[30px] text-[#000000] m-[15px] max-w-[328px] tablet:gap-4 tablet:max-w-[476px] mx-auto">
                        <FilterButton
                            label="Compact"
                            onClick={() => handleFilterClick("Compact")}
                            isActive={activeFilter === "Compact"}
                            mobileWidth="w-[106px]"
                            mobileHeight="h-[45px]"
                            tabletWidth="tablet:w-[155px]"
                            tabletHeight="tablet:h-[58px]"
                        />
                        <FilterButton
                            label="Sports cars"
                            onClick={() => handleFilterClick("Sports cars")}
                            isActive={activeFilter === "Sports cars"}
                            mobileWidth="w-[119px]"
                            mobileHeight="h-[45px]"
                            tabletWidth="tablet:w-[170px]"
                            tabletHeight="tablet:h-[58px]"
                        />
                        <FilterButton
                            label="Vans"
                            onClick={() => handleFilterClick("Vans")}
                            isActive={activeFilter === "Vans"}
                            mobileWidth="w-[75px]"
                            mobileHeight="h-[45px]"
                            tabletWidth="tablet:w-[119px]"
                            tabletHeight="tablet:h-[58px]"
                        />
                    </ul>
                </div>

                {/* section 3 */}
                <div className="tablet:grid tablet:grid-cols-2 tablet:gap-5 desktop:grid-cols-3">
                    {cars.map((car) => (
                        <Cars key={car.id} bgColor={"#F5F5F5"} {...car} />
                    ))}
                </div>

                <div className="flex justify-center pt-[30px] desktop:pt-10">
                    <FilterButton
                            label="Compact"
                            mobileWidth="w-[173px]"
                            mobileHeight="h-[58px]"
                            tabletWidth="tablet:w-[173px]"
                            tabletHeight="tablet:h-[58px]"
                        />
                </div>
            </div>
        </main>
    );
};
