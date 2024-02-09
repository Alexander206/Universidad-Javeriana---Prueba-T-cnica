import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import ScrollToTop from "../components/ScrollToTop.jsx";

import Home from "../pages/Home.jsx";
import Registrations from "../pages/Registrations.jsx";
import Blog from "../pages/Blog.jsx";
import NotFound from "../pages/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/" element={<Blog />}>
                    <Route path="/blog/:id" element={<Blog />} />
                </Route>
                <Route path="/registrations" element={<Registrations />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
