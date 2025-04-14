import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"
import PrivacyPage from "./pages/PrivacyPage"

function App() {
  return (
    <Router>
      <Header />

      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      
      
      <Footer />
      </Router>
  );
}


export default App;






