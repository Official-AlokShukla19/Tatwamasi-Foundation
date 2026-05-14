import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Education from './pages/Education';
import Community from './pages/Community';
import Innovation from './pages/Innovation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/initiatives/:id" element={<Initiatives />} />
            <Route path="/education-growth" element={<Education />} />
            <Route path="/community-roots" element={<Community />} />
            <Route path="/innovative-horizons" element={<Innovation />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
