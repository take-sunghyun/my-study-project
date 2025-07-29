import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, Link } from "react-router-dom";
export default function MainLayout() {
    return (_jsxs("div", { children: [_jsx("header", { children: _jsxs("nav", { children: [_jsx(Link, { to: "/", children: "Home" }), " | ", _jsx(Link, { to: "/about", children: "About" })] }) }), _jsx("main", { children: _jsx(Outlet, {}) })] }));
}
