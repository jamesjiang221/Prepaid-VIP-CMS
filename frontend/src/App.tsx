import React from 'react';

// react-router-dom v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/ui/Header';
import Footer from './pages/ui/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/prepaid-cards" element={<PrepaidCardPage />} />
          <Route path="/times-cards" element={<TimesCardPages />} />
          <Route path="/" element={< />} /> */}
        </Routes>
      </Router>
      
       
      <Footer />
    </div>
  );
}

export default App;
