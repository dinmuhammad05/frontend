"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/request";
import Cookies from "js-cookie";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await request.post("/admin/signin", {
                username,
                password,
            });

            const token = response.data.data?.token;
            if (token) {
                Cookies.set("token", token);
                navigate("/", { replace: true });
            } else {
                setError("Token olinmadi");
            }
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || "Login muvaffaqiyatsiz");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-slate-100 to-slate-50">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-30"></div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="relative bg-white shadow-2xl rounded-3xl p-12 w-full max-w-sm border border-slate-100"
            >
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 text-center">
                        Kirish
                    </h1>
                    <p className="text-slate-500 text-center text-sm mt-2">
                        Admin panelga kirish
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-700 text-center text-sm font-medium">
                            {error}
                        </p>
                    </div>
                )}

                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Foydalanuvchi nomi
                        </label>
                        <input
                            type="text"
                            placeholder="Nomingizni kiriting"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={loading}
                            className="w-full px-4 py-3 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white placeholder-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Parol
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Parolingizni kiriting"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            className="w-full px-4 py-3 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white placeholder-slate-400 pr-12 disabled:bg-slate-100 disabled:cursor-not-allowed"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            disabled={loading}
                            className="absolute right-4 top-12 text-slate-500 hover:text-slate-700 transition-colors disabled:opacity-50 text-lg"
                        >
                            {showPassword ? "👁️" : "🙈"}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-3 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:shadow-lg hover:-translate-y-0.5 disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                Kirish...
                            </span>
                        ) : (
                            "Kirish"
                        )}
                    </button>
                </div>

                
            </form>
        </div>
    );
};
