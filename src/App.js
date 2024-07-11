import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import MailTo from './Components/MailTo'


function App() {
  return (
    <Router>
      <div className='container'> 
        <div className='navbar'>
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" element={<Banner/>} />
            <Route path="/about-us" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
      </div>
      <MailTo/>
    </Router>
  );
}

export default App;
