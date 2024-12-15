import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout';
import Price from './pages/Price/Price';
import Founders from './pages/Founders/Founders';
import Community from './pages/Community/Community';

function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/Founders" element={<Founders />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
        <Footer/>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
