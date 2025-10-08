import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Career from "./pages/Career";
import Contact from "./pages/Contact";



function App() {
  return (
    <main >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </main>
  );
}

export default App;
