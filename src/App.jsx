import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

export const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};