import { useDispatch } from "react-redux";
import { formatter } from "../config/formatter";
import { addProduct } from "../store/reducer/phone-store";

export const ProductCard = (product) => {
    const price = +product?.price?.split(" ").join("");
    const dispatch = useDispatch();

    const addStore = () => {
        dispatch(addProduct({ ...product, price }));
    };

    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer border border-slate-100 hover:border-indigo-200">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    src={product.img}
                    alt={product.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5">
                <h3 className="text-sm font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {product.title}
                </h3>
                <p className="text-lg font-bold text-indigo-600 mb-4 bg-indigo-50 px-3 py-2 rounded-lg text-center">
                    {formatter(price)} UZS
                </p>
                <button
                    onClick={addStore}
                    className="w-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-semibold py-2.5 rounded-xl hover:from-indigo-600 hover:via-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group/btn"
                >
                    <span className="group-hover/btn:scale-105 inline-block transition-transform duration-200">
                        Savatga qo'shish
                    </span>
                </button>
            </div>
        </div>
    );
};
