
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { Travelpage } from "./components/Travelpage";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/travelpage" element={<Travelpage/>}/>
      </Routes>
      
      
      
      

    </div>
  );
}