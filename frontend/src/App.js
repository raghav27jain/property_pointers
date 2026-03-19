import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LogoSplash from './components/LogoSplash';

import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogAddHost from './pages/BlogAddHost';
import BlogDetail from './pages/BlogDetail';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <LogoSplash onDone={() => setShowSplash(false)} />;
  }

  return (
    <Router>
      <Header />

      <div className="mb-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights/blogs" element={<BlogList />} />
          <Route path="/insights/blogs/add" element={<BlogAddHost />} />
          <Route path="/insights/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
