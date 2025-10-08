import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Career from "./pages/career";
import Contact from "./pages/contact";



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