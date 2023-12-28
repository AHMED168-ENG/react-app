

import { Link } from "react-router-dom";
import "../../scss/wishlist_product/wishlist_product_cart.scss"
import { GrClose } from "react-icons/gr";

function WishlistProductCart(props) {
    const {product} = props
    return <>
        <div className="wishlist-product-cart position-relative">
            <div className="close position-absolute">
                <GrClose></GrClose>
            </div>
            <div className="product-images position-relative ">
                <div className="image">
                    <img src={product.img1} alt="" />
                </div>
                <div className="image position-absolute">
                    <img src={product.img2} alt="" />
                </div>
            </div>
            <div className="product-details">
                <h3 className="text-capitalize">
                    <Link to="">{product.header}</Link>
                </h3>
                <div className="info">
                    <ul className="list-unstyled m-0 p-0">
                        <li className="d-flex text-capitalize price">
                            <span>$100.00</span>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
}

export default WishlistProductCart;