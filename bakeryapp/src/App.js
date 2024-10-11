import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='*' element={<Home/>}/>

      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='offers' element={<Offers/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='contact' element={<Contact/>}/>
      

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
