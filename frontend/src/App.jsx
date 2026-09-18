import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return <BrowserRouter><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/analyze" element={<Analyze />} /><Route path="/about" element={<About />} /><Route path="/login" element={<Login />} /><Route path="/signup" element={<Signup />} /></Routes><Footer /></BrowserRouter>;
}
