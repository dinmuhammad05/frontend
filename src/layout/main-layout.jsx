import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import Cookies from "js-cookie";

export const MainLayout = () => {
    const [token, setToken] = useState(Cookies.get("token"));

    useEffect(() => {
        const checkToken = () => {
            const currentToken = Cookies.get("token");
            setToken(currentToken);
        };

        checkToken();
    }, []);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
