import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';

import TopNav from './components/header/TopNav';
import HomeScreen from './screens/HomeScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/:id" element={<UserDetailsScreen />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
