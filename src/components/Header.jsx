import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/booking', label: 'Booking' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className={`ml-4 text-2xl font-bold flex items-center ${
              scrolled ? 'text-white' : 'text-white'
            }`}>
              Classic Ba<img src="./logo.png" alt="Logo" className="h-12" />ber
            </h1>
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`p-2 ${scrolled ? 'text-white' : 'text-white'}`}
            >
              {isNavOpen ? <X /> : <Menu />}
            </button>
          </div>

          <nav className={`hidden md:flex space-x-8 md:items-center ${
            scrolled ? 'text-white' : 'text-white'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-yellow-600 transition-colors ${
                  location.pathname === item.path ? 'text-yellow-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
            >
              Book Now
            </Link>
          </nav>
        </div>

        {isNavOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="bg-white rounded-lg shadow-xl p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 ${
                    location.pathname === item.path 
                      ? 'text-yellow-600' 
                      : 'text-gray-800 hover:text-yellow-600'
                  }`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="block w-full bg-yellow-600 text-white text-center px-4 py-2 rounded hover:bg-yellow-700"
                onClick={() => setIsNavOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;