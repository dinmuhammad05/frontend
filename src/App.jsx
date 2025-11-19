import React, { use } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { Detail } from "./pages/detail";
import { Recipes } from "./pages/Recipes";

const App = () => {
    const location = useLocation();
    const background = location.state && location.state.background;
    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/recipes/:data" element={<Recipes />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

            {background && (
                <Routes>
                    <Route
                        path="/detail/:id"
                        element={<Detail isModal={true} />}
                    />
                </Routes>
            )}
        </>
    );
};

export default App;
