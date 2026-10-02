import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import Students from "./pages/Students";

function App() {
    return (
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<HeroSection />} />
           <Route path="/Students" element={<Students />} />

          </Routes>
      


        </div>
    );
}

export default App;