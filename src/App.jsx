import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Proyectos from "./pages/Proyectos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      

      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Proyectos" element={<Proyectos />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
