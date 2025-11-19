import { formatter } from "../config/formatter";
import { useDispatch } from "react-redux";
import {
    incrementPrice,
    decrementPrice,
    deleteProduct,
} from "../store/reducer/phone-store";

export const SaveProduct = (product) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden p-5 flex flex-col border-t-4 border-indigo-500 hover:-translate-y-1">
            <div className="h-56 w-full overflow-hidden mb-4 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 relative group">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    src={product.img}
                    alt={product.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-2 text-center line-clamp-2 flex-grow">
                {product.title}
            </h3>
            <p className="text-lg font-bold text-indigo-600 mb-5 text-center bg-indigo-50 py-2 rounded-lg">
                {formatter(product.userPrice)} UZS
            </p>
            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-xl border border-indigo-200">
                <button
                    onClick={() => dispatch(incrementPrice({ id: product.id }))}
                    className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold w-9 h-9 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 active:scale-90 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                    +
                </button>
                <span className="font-bold text-lg text-slate-800 min-w-[2rem] text-center">
                    {product.userCount}
                </span>
                {product.userCount < 2 ? (
                    <button
                        onClick={() =>
                            dispatch(deleteProduct({ id: product.id }))
                        }
                        className="bg-gradient-to-br from-red-400 to-red-500 text-white font-bold w-9 h-9 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-200 active:scale-90 shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                        ✕
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            dispatch(decrementPrice({ id: product.id }))
                        }
                        className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold w-9 h-9 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 active:scale-90 shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                        −
                    </button>
                )}
            </div>
        </div>
    );
};

