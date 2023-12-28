import Breadcrumb from "../components/breadcrumb";
import WishlistProductComponent from "../components/wishlist_product/wishlist_product";
import HelmetComponent from "../components/helmet";

export default function WishlistProductPage () {
    return ( 
        <>
            <HelmetComponent title="wishlist product"></HelmetComponent>
            <Breadcrumb title="wishlist product"></Breadcrumb>
            <WishlistProductComponent></WishlistProductComponent>
        </>
     );
}
