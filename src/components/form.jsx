import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { AppContext } from "../context/app-context/app-context";

const Form = () => {
    const { handleSubmit, register, reset } = useForm();
    const { dispatch } = React.useContext(AppContext);

    const submit = (data) => {
        dispatch({ type: "CREATE_USER", value: { ...data, id: nanoid() } });
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 relative overflow-hidden"
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')] bg-repeat"></div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center relative z-10">
                Add New User
            </h2>

            <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200 relative z-10"
            >
                Username
            </label>
            <input
                type="text"
                id="username"
                placeholder="Enter username"
                required
                {...register("username")}
                className="w-full px-5 py-3 mb-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 relative z-10"
            />

            <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
            >
                Add User
            </button>
        </form>
    );
};

export default Form;
