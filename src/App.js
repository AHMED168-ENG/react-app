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
import DashboardForgetPasswordPage from './pages/dashboard/forget_password';
import DashboardPage from './pages/dashboard/dashboard';
import DashboardCustomerCreate from './pages/dashboard/customer/create';
import DashboardCustomerAll from './pages/dashboard/customer/all';
import DashboardProductAll from './pages/dashboard/product/all';
import DashboardProductCreate from './pages/dashboard/product/create';
import DashboardProductCategoryAll from './pages/dashboard/product_category/all';
import DashboardProductCategoryCreate from './pages/dashboard/product_category/create';
import DashboardBrandAll from './pages/dashboard/brand/all';
import DashboardBrandCreate from './pages/dashboard/brand/create';
import DashboardCouponAll from './pages/dashboard/coupon/all';
import DashboardCouponCreate from './pages/dashboard/coupon/create';
import DashboardColorCreate from './pages/dashboard/color/create';
import DashboardColorAll from './pages/dashboard/color/all';
import DashboardBlogAll from './pages/dashboard/blog/all';
import DashboardBlogCreate from './pages/dashboard/blog/create';
import DashboardBlogCategoryCreate from './pages/dashboard/blog_categorys/create';
import DashboardBlogCategoryAll from './pages/dashboard/blog_categorys/all';
import DashboardEnquiriesComponent from './components/dashboard/enquiries/all';
import DashboardEnquiryCategoryAll from './pages/dashboard/enquiries/all';
import DashboardOrderAll from './pages/dashboard/order/order';
import DashboardCustomerEdit from './pages/dashboard/customer/edit';
import DashboardColorEdit from './pages/dashboard/color/edit';
import DashboardBrandUpdate from './pages/dashboard/brand/edit';
 
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
                  <Route path='customer' element={<Outlet/>}>
                    <Route index element={<DashboardCustomerAll/>}></Route>
                    <Route path='add' element={<DashboardCustomerCreate/>}></Route>
                    <Route path='edit/:id' element={<DashboardCustomerEdit/>}></Route>
                  </Route>
                  <Route path='product' element={<Outlet/>}>
                    <Route index element={<DashboardProductAll/>}></Route>
                    <Route path='add' element={<DashboardProductCreate/>}></Route>
                  </Route>
                  <Route path='product-category' element={<Outlet/>}>
                    <Route index element={<DashboardProductCategoryAll/>}></Route>
                    <Route path='add' element={<DashboardProductCategoryCreate />}></Route>
                  </Route>
                  <Route path='brand' element={<Outlet/>}>
                    <Route index element={<DashboardBrandAll/>}></Route>
                    <Route path='add' element={<DashboardBrandCreate />}></Route>
                    <Route path='edit/:id' element={<DashboardBrandUpdate />}></Route>
                  </Route>
                  <Route path='coupon' element={<Outlet/>}>
                    <Route index element={<DashboardCouponAll/>}></Route>
                    <Route path='add' element={<DashboardCouponCreate />}></Route>
                  </Route>
                  <Route path='color' element={<Outlet/>}>
                    <Route index element={<DashboardColorAll/>}></Route>
                    <Route path='add' element={<DashboardColorCreate />}></Route>
                    <Route path='edit/:id' element={<DashboardColorEdit/>}></Route>
                  </Route>
                  <Route path='blog' element={<Outlet/>}>
                    <Route index element={<DashboardBlogAll/>}></Route>
                    <Route path='add' element={<DashboardBlogCreate />}></Route>
                  </Route>
                  <Route path='blog-category' element={<Outlet/>}>
                    <Route index element={<DashboardBlogCategoryAll/>}></Route>
                    <Route path='add' element={<DashboardBlogCategoryCreate />}></Route>
                  </Route>
                  <Route path='enquiries' element={<Outlet/>}>
                    <Route index element={<DashboardEnquiryCategoryAll/>}></Route>
                  </Route>
                  <Route path='order' element={<Outlet/>}>
                    <Route index element={<DashboardOrderAll/>}></Route>
                  </Route>
              </Route>
              <Route path='login' element={<DashboardLogin/>}></Route>
              <Route path='forget-password' element={<DashboardForgetPasswordPage/>}></Route>
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
