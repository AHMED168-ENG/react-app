import { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";
import CartComponent from "../components/product_cart/cart";



export default function ProductCartPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="my cart"></HelmetComponent>
            <Breadcrumb title="my cart"></Breadcrumb>
            <CartComponent></CartComponent>
        </>
     );
}

