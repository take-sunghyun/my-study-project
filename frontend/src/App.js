import { jsx as _jsx } from "react/jsx-runtime";
import "@/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }));
}
export default App;
