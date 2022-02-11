import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import TopNav from './components/header components/TopNav';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
