import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
