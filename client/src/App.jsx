import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nabvar from "./components/Nabvar.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Services } from "./pages/Services.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Signin } from "./pages/Signin.jsx";
import { Register } from "./pages/Register.jsx";

function App() {
  return (
    <>
      <Router>
        <Nabvar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
