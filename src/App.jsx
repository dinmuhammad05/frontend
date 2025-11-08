import React from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};
