import React from 'react'; 
import Header from './components/Header';
import Navbar from './components/Navbar';
import Email from './pages/Email';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cards from './pages/Cards';
import About from './pages/About';
import Playground from './pages/Playground';
import Forms from './pages/Forms';
import Music from './pages/Music';
import Authentication from './pages/Authentication';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
        <Header /> 
       {/* <Navbar/> */}
       <Navbar />

      <Routes>
        <Route path="/email" element={<Email/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/music" element={<Music />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

