import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact.jsx";

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
