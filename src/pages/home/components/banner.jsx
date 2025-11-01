import React from "react";
import products from "../../../data/product.js";
import { ProductCard } from "../../../components/product-card.jsx";
import { Hero } from "../../../assets/icons/hero-img.jsx";

export const Banner = () => {
    return (
        <section className="pt-4 pb-14">
            <div className="container">
                <div className="flex gap-6">
                    <div className="flex grow bg-blue-100 justify-between rounded-2xl">
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold ml-4 mb-3">
                                Кўп ўқилаётганлар
                            </h2>
                            <Hero />
                        </div>
                        <div className="w-[600px] h-[200px] flex gap-3 m-8 text-center">
                            {products
                                .filter((e, i) => i <= 2)
                                .map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        img={item.img}
                                        title={item.title}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className="w-[261px] h-[351px] py-10 px-6 bg-blue-600 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-white">
                            Китоб ўқишни ёқтирасизми?
                        </h2>
                        <p className="text-[18px] font-normal text-white mt-5 mb-[77px]">
                            Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга
                            обуна бўлинг
                        </p>
                        <button className="bg-white w-[210px] h-12 font-semibold rounded-2xl">
                            Обуна бўлиш
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
