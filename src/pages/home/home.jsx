import React from "react";
import { Banner } from "./components/banner";
import { Spark } from "../../assets/icons/spark";
import { categoryData } from "../../data/data";
import { CategoryCard } from "./components/category-card";
import { ProductCard } from "../../components/product-card.jsx";
import { AudioCard } from "../../components/audio-card.jsx";
import products from "../../data/product.js";

export const Home = () => {
    return (
        <>
            <Banner />
            <section>
                <div className="container">
                    <div className="flex justify-between">
                        <div className="flex gap-5 items-center">
                            <Spark />
                            <div className="w-[212px]">
                                <h4 className="text-[15px] font-bold">
                                    Тезкор етказиш
                                </h4>
                                <p className="text-[11px] font-normal">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Spark />
                            <div className="w-[212px]">
                                <h4 className="text-[15px] font-bold">
                                    Тўлов химояси
                                </h4>
                                <p className="text-[11px] font-normal">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Spark />
                            <div className="w-[212px]">
                                <h4 className="text-[15px] font-bold">
                                    Юқори сифат
                                </h4>
                                <p className="text-[11px] font-normal">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Spark />
                            <div className="w-[212px]">
                                <h4 className="text-[15px] font-bold">
                                    Энг сара китоблар
                                </h4>
                                <p className="text-[11px] font-normal">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10 mb-[62px]">
                <div className="container">
                    <h2 className="mb-8 font-semibold text-3xl">Рукнлар</h2>
                    <div className="grid grid-cols-6 gap-4">
                        {categoryData.map((item) => (
                            <CategoryCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="my-16">
                <div className="container">
                    <h1 className="mb-8 font-semibold text-3xl">
                        Янги қўшилганлар
                    </h1>
                    <div className="flex gap-6">
                        {products.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h1 className="mb-8 font-semibold text-3xl">
                        Аудио китоблар
                    </h1>
                    <div className="flex gap-6">
                        {products.map((item) => (
                            <AudioCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
