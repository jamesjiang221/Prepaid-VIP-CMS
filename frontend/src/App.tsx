import React from 'react';

// react-router-dom v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/ui/Header';
import Footer from './pages/ui/Footer';
import HomePage from './pages/HomePage';
import PrepaidCardPage from './pages/PrepaidCardPage';
import TimesCardPage from './pages/TimesCardPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prepaid-card" element={<PrepaidCardPage />} />
          <Route path="/times-card" element={<TimesCardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      
       
      <Footer />
    </div>
  );
}

export default App;
