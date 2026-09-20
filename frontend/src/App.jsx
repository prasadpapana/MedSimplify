import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Analyze from './pages/ModernAnalyze';
import About from './pages/About';
import Login from './pages/ModernLogin';
import Signup from './pages/Signup';

function AppShell({ theme, onThemeToggle }) {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === '/login' || pathname === '/signup';
  return <><ModernNavbar theme={theme} onThemeToggle={onThemeToggle} /><Routes><Route path="/" element={<Home />} /><Route path="/analyze" element={<Analyze />} /><Route path="/about" element={<About />} /><Route path="/login" element={<Login />} /><Route path="/signup" element={<Signup />} /></Routes>{!isAuthRoute && <Footer />}</>;
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('medsimplify-theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('medsimplify-theme', theme);
  }, [theme]);

  return <BrowserRouter><AppShell theme={theme} onThemeToggle={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')} /></BrowserRouter>;
}
