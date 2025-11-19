import { Link, Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Card } from "./pages/card";

function App() {
    return (
        <>
            <header className="flex justify-between items-center bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-6 py-5 shadow-lg sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-white drop-shadow-md">
                    Market
                </h1>

                <nav className="flex gap-8">
                    <Link
                        to={"/"}
                        className="font-semibold text-lg text-white hover:text-indigo-100 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Asosiy
                    </Link>
                    <Link
                        to={"/cart"}
                        className="font-semibold text-lg text-white hover:text-indigo-100 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Savat
                    </Link>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Card />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
