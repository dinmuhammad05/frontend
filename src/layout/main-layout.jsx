import React from "react";
import { Outlet } from "react-router";
import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
