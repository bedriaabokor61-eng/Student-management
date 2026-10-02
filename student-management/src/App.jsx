import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<HeroSection />} />
           <Route path="/Students" element={<Students />} />
            <Route path="/Students/:id" element={<StudentDetails />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/About" element={<About />} />

          </Routes>
          <Footer />
      


        </div>
    );
}

export default App;