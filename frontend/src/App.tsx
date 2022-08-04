import React from 'react';
import { Container, Form, Table, Button } from 'react-bootstrap';

import Header from './pages/ui/Header';
import Footer from './pages/ui/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
