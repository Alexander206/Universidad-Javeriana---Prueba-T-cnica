import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/home/Home.jsx";
import Blog from "../pages/blog/Blog.jsx";
import NotFound from "../pages/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
