import React from "react";
import { useSelector } from "react-redux";
import { SaveProduct } from "../components/save-product";
import { formatter } from "../config/formatter";

export const Card = () => {
    const { productList, count, totalPrice } = useSelector(
        (state) => state.product
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
                    <div className="flex flex-wrap justify-between items-center gap-6">
                        <div>
                            <p className="text-sm text-slate-500 font-medium mb-2">Jami narxi</p>
                            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 drop-shadow-lg">
                                {formatter(totalPrice)} UZS
                            </h1>
                        </div>
                        <div className="bg-gradient-to-r from-amber-400  text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <p className="text-sm font-medium opacity-90">Mahsulotlar</p>
                            <p className="text-3xl font-bold">{count}</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productList.map((item) => (
                        <SaveProduct key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
