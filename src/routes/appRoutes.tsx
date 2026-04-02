import { Routes, Route } from "react-router";

import { Home } from "../pages/home";
import { About } from "../pages/About";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}