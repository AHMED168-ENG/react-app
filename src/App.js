import { Outlet, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import "./scss/App.scss";
import Home from './pages/home';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/Footer';
import OurStore from './pages/our_store';
import Blogs from './pages/blogs';
import ComparProductPage from './pages/compar_product';
import WishlistProductPage from './pages/wishlist_product';
import LoginPage from './pages/login';
import ForgetPasswordPage from './pages/forget_password';
import RegisterPage from './pages/register';
import ResetPasswordPage from './pages/reset_password';
import BlogDetails from './pages/blogs_details';
import PrivacyPolicyPage from './pages/policy/privacy_policy';
import RefundPolicyPage from './pages/policy/refund_policy';
import ShippingPolicyPage from './pages/policy/shipping_policy';
import TermsConditionPage from './pages/policy/terms_condition';
import ProductDetailsPage from './pages/product_details';
import Swal from 'sweetalert2';
import CartSideParComponent from './components/cart-side-par';
import ProductCartPage from './pages/product_cart';
import { useState } from 'react';
import CheckOutPage from './pages/check_out';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PageNotFound from './pages/404';
import DashboardLayout from './pages/dashboard/layout';
import DashboardLogin from './pages/dashboard/login';
import DashboardRegister from './pages/dashboard/register';
import DashboardForgetPasswordPage from './pages/dashboard/forget_password';
import DashboardPage from './pages/dashboard/dashboard';
 
function App() {
  window.Swal = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,   
    didOpen: (toast) => { 
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });  
  
  const [sidePar , activeSidePar] = useState(false)
  const location = useLocation()
  const sitPathName = ["/","/our-store" , "/product-details" , "/contact" , "/blogs" , "/blog-details" , "/compar-product" , "/wishlist-product" , "/login" , "/sign-up" ,  "/forget-password" , "/reset-password" , "/privacy-policy" , "/refund-policy" , "/shipping-police" , "/terms-condition" , "/my-cart" , "/check-out"]
  return (  
   <>
      {
        !location.pathname.startsWith("/dashboard") && sitPathName.includes(location.pathname) ? 
          <>
            <Header activeSidePar={activeSidePar}></Header>
            <CartSideParComponent activeSidePar={activeSidePar} sidePar={sidePar}></CartSideParComponent>
          </>
        : ""
      }
      <Routes>
        <Route path='/' element={<Outlet />} >
            <Route index element={<Home />}></Route>
            <Route path='our-store' element={<OurStore/>} />
            <Route path='product-details' element={<ProductDetailsPage/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='blogs' element={<Blogs/>}></Route>
            <Route path='blog-details' element={<BlogDetails/>}></Route>
            <Route path='compar-product' element={<ComparProductPage/>}></Route>
            <Route path='wishlist-product' element={<WishlistProductPage/>}></Route>
            <Route path='login' element={<LoginPage/>}></Route>
            <Route path='sign-up' element={<RegisterPage/>}></Route>
            <Route path='forget-password' element={<ForgetPasswordPage/>}></Route>
            <Route path='reset-password' element={<ResetPasswordPage/>}></Route>
            <Route path='privacy-policy' element={<PrivacyPolicyPage/>}></Route>
            <Route path='refund-policy' element={<RefundPolicyPage/>}></Route>
            <Route path='shipping-police' element={<ShippingPolicyPage/>}></Route>
            <Route path='terms-condition' element={<TermsConditionPage/>}></Route>
            <Route path='my-cart' element={<ProductCartPage/>}></Route>
            <Route path='check-out' element={<CheckOutPage/>}></Route>
            <Route path='dashboard' element={<Outlet/>}> 
              <Route path="" element={<DashboardLayout/>} >
                  <Route index element={<DashboardPage/>}></Route>
              </Route>
              <Route path='login' element={<DashboardLogin/>}></Route>
              <Route path='forget-password' element={<DashboardForgetPasswordPage/>}></Route>
              <Route path='register' element={<DashboardRegister/>}></Route>
          </Route>
          <Route
              path="*"
              element={<PageNotFound />}/>
          </Route>
      </Routes>
      {
        !location.pathname.startsWith("/dashboard") && sitPathName.includes(location.pathname) ? 
          <Footer></Footer>
        : ""
      }
   </>
  );
}

export default App;
