import Breadcrumb from "../components/breadcrumb";
import WishlistProductComponent from "../components/wishlist_product/wishlist_product";
import HelmetComponent from "../components/helmet";

export default function WishlistProductPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="wishlist product"></HelmetComponent>
            <Breadcrumb title="wishlist product"></Breadcrumb>
            <WishlistProductComponent></WishlistProductComponent>
        </>
     );
}
