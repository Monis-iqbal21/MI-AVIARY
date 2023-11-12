import Navbar from "./Navbar/Navbar"
import Footer from "./footer/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home page/Home";
import Dove from "./home page/Pages/Dove/Dove";
import Java from "./home page/Pages/Java/Java";
import LoveBirds from "./home page/Pages/Lovebirds/LoveBirds";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dove" element={<Dove />} />
        <Route path="java" element={<Java />} />
        <Route path="love-birds" element={<LoveBirds />} />
      </Routes>
      <Footer  />
    </BrowserRouter>

  );
}

export default App;
