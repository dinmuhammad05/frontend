import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { HeaderTop } from "./header-top";
import { Navbar } from "./navbar";

const Layout = () => {
    return (
        <>
            <HeaderTop />
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
