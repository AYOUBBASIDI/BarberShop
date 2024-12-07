import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import AdminPanel from './private/AdminPanel';

// Layout component for main pages
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin route without header and footer */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* Main routes with header and footer */}
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/services" element={
          <MainLayout>
            <Services />
          </MainLayout>
        } />
        <Route path="/gallery" element={
          <MainLayout>
            <Gallery />
          </MainLayout>
        } />
        <Route path="/booking" element={
          <MainLayout>
            <Booking />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <Contact />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;