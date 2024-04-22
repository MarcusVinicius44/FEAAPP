import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroForm from "./Login/CadastroForm";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<CadastroForm />} />

      </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;