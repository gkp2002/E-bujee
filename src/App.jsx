// import './App.css'
import Careers from "./Components/Careers/Careers";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Components/Services/Services";
function App() {
  return (
    <div className="bg-black">
      {
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="Careers" element={<Careers />} />
            <Route path="Services" element={<Services/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
