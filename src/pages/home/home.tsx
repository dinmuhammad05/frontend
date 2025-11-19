import { Outlet } from "react-router-dom";
import { Header } from "./components/header"; // agar navbar bo'lsa

export const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};
