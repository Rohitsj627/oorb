import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PortKillerLanding from './components/product/PortKillerLanding';
import OorbFormsApp from './components/forms/OorbFormsApp';
import FormRenderer from './components/forms/FormRenderer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        {/* Public form route (no navbar/footer) */}
        <Route path="/form/:shareUrl" element={<FormRenderer />} />
        
        {/* Main app routes (with navbar/footer) */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />

                {/* Products */}
                <Route path="/port-killer" element={<PortKillerLanding />} />
                <Route path="/oorb-forms" element={<OorbFormsApp />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;