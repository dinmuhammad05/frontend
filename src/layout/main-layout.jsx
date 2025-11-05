import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Navbar from "./header/navbar";
import Footer from "./footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;