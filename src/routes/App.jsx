import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
