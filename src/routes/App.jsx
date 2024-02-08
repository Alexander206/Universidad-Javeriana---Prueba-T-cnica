import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/home/Home.jsx";
import Registrations from "../pages/registrations/Registrations.jsx";
import Blog from "../pages/blog/Blog.jsx";
import NotFound from "../pages/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/registrations" element={<Registrations />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
