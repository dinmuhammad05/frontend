import { Route, Routes } from "react-router-dom";
import { Typography } from "./pages/typography/typogrphy";
import { Colors } from "./pages/colors/colors";
import { Buttons } from "./pages/buttons/buttons";
import { Inputs } from "./pages/inputs";
import { Home } from "./pages/home/home";

export const App = () => {
    return (
        <Routes>
           <Route path="/" element={<Home />} >
             <Route path="/typography" element={<Typography />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/inputs" element={<Inputs />} />
           </Route>
        </Routes>
    );
};
