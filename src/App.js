import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/Footer';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OurStore from './pages/our_store';
import Blogs from './pages/blogs';
import ComparProductPage from './pages/compar_product';

function App() {
  return (
   <>
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Layout />} >
              <Route index path='' element={<Home/>}></Route>
              <Route path='our-store' element={<OurStore/>}></Route>
              <Route path='about' element={<About/>}></Route>
              <Route path='contact' element={<Contact/>}></Route>
              <Route path='blogs' element={<Blogs/>}></Route>
              <Route path='compar-product' element={<ComparProductPage/>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
   </>
  );
}

export default App;
