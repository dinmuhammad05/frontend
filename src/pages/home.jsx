import React from "react";
import { ProductCard } from "../components/product-card";

export const Home = () => {
    const [produts, setProduts] = React.useState([]);

    React.useEffect(() => {
        fetch("https://market-backend-zeta.vercel.app/phones")
            .then((res) => res.json())
            .then((data) => {
                setProduts(data);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-slate-900 mb-3">
                        Telefonlar
                    </h1>
                    <p className="text-lg text-slate-600">
                        Eng yangi va sifatli modellarni tanlang
                    </p>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {produts.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
