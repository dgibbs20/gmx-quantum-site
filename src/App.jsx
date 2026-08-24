import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GrainLayer from "./components/GrainLayer";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import FussBudget from "./pages/FussBudget";
import AetherCore from "./pages/AetherCore";
import Aitherium from "./pages/Aitherium";
import Company from "./pages/Company";
import Founder from "./pages/Founder";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-navy">
      <GrainLayer />
      <div className="relative z-10 flex min-h-screen flex-col">
        <ScrollToTop />
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/fuss-budget" element={<FussBudget />} />
            <Route path="/aethercore" element={<AetherCore />} />
            <Route path="/aitherium" element={<Aitherium />} />
            <Route path="/company" element={<Company />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
