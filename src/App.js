import Header from "./components/Header";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage'


function App() {
  return (
    <div>
       <Header/>

       <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/contacts" element={<Contactpage/>}/>
        </Routes>
       </Router>

       <Footer/>
    </div>
  );
}

export default App;
