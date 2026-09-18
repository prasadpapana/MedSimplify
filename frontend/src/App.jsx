import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Analyze from './pages/ModernAnalyze';
import About from './pages/About';
import Login from './pages/ModernLogin';
import Signup from './pages/Signup';

function AppShell() {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === '/login' || pathname === '/signup';
  return <>{!isAuthRoute && <ModernNavbar />}<Routes><Route path="/" element={<Home />} /><Route path="/analyze" element={<Analyze />} /><Route path="/about" element={<About />} /><Route path="/login" element={<Login />} /><Route path="/signup" element={<Signup />} /></Routes>{!isAuthRoute && <Footer />}</>;
}

export default function App() {
  return <BrowserRouter><AppShell /></BrowserRouter>;
}
