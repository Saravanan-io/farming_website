import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Joinus from "./components/Joinus";
import Navbar from "./components/Navbar";
import Contect from "./components/Contect";
import Productscards from "./components/Productscards";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/join" element={<Joinus />} />
        <Route path="/products" element={<Productscards />} />
      </Routes>
    </div>
  );
}

export default App;