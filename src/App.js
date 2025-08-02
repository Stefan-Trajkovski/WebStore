import logo from './logo.svg';
import './App.css';
import CharachterList from './pages/CharachterList';
import Footer from './components/Footer';
import Header from './components/Header';
import Mid from './components/Mid';
import Black from './components/Black';
import Feed from './components/Feed';
import FrontPage from './components/FrontPage'
import SecondHeader from './components/SecondHeader';
import Guitars from './components/Guitars';
import SecondPage from './components/SecondPage';
import ThirdMain from './components/ThirdMain';
import Specification from './components/Specification';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
    <div className="App">
      <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/brand/:id" element={<SecondPage />} />
     <Route path="/brand/:brandId/details" element={<ThirdMain />} />
      </Routes>
    
      
    </div>

  );
}

export default App;
