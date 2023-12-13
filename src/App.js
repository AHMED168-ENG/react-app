import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
   <>
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Layout />} >
              <Route index path='' element={<Home/>}></Route>
              <Route path='about' element={<About/>}></Route>
              <Route path='contact' element={<Contact/>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
   </>
  );
}

export default App;
