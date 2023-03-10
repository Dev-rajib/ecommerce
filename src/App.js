import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurStore from './pages/OurStore';

function App() {
  return (
     <>
     <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/store' element={<OurStore/>} />
          <Route path='/blog' element={<Blog/>} />
        </Route>
      </Routes>
     </Router>
     </>
  );
}

export default App;
