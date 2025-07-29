import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Routes, Route } from "react-router-dom";
export default function AppRoutes() {
    return (_jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(MainLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) })] }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }));
}
