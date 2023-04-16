import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Locations from './pages/Locations'
import ErrorPage from './pages/ErrorPage'
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Nav from './components/Nav'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>   
    <div className='body'>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/logement/:id' element={<Locations />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
    </div>
  </React.StrictMode>
  </Router>
);

reportWebVitals();
