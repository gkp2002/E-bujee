 import './App.css'
import Careers from "./Components/Careers/Careers";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import {  Routes, Route } from "react-router-dom";
import Services from "./Components/Services/Services";
import ParticlesComponent from "./Components/Particle/ParticlesComponent";
import RightSticky from './Components/RigthStickey/RightSticky';
import SubProductOne from './Components/Services/ProductsPage/SubProductOne';
import SubProductThree from './Components/Services/ProductsPage/SubProductThree';
import SubProductSecond from './Components/Services/ProductsPage/SubProductSecond';
function App() {
  return (
    <div className=" w-full" >
    <RightSticky/>
    <Navbar />
    <ParticlesComponent id="particle"/>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Services/" element={<Services/>}>
              <Route index element ={<SubProductOne/>}/>
               <Route path='productOne'  element={<SubProductOne/>}/>
               <Route path='productThree' element={<SubProductThree/>}/>
               <Route path='productTwo' element={<SubProductSecond/>}/>
            
            </Route>
            <Route path="/*" element={<Home/>}/>
          </Routes>
          <Footer />
       
      
    </div>
  );
}

export default App;
