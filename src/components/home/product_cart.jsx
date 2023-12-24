
import { Link } from "react-router-dom";
import "../../scss/home/product_cart.scss"
// import ReactStars from "react-rating-stars-component";
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

function ProductCart (prop) {
    return ( 
        <>
        <div className="product_cart">
            <div className="cart-image position-relative">
                <img src={prop.cart.img1} alt="" />
                <div className="over-img position-absolute">
                    <img src={prop.cart.img2} alt="" />
                </div>
                <div className="product_action position-absolute d-flex flex-column">
                    <CiHeart />
                    <IoGitCompareOutline />
                    <IoEyeOutline />
                    <BiShoppingBag />
                </div>
                {
                    prop.cart.discount ? ( 
                        <div className="product_discount position-absolute ">
                            {prop.cart.discount}
                        </div>
                        ) : ""
                }
                                
            </div>
            <div className="cart-details py-3 px-3">
                <span className="product-type text-uppercase mb-2 d-block">
                    {prop.cart.type}    
                </span>
                <Link className="product-head text-capitalize mb-1">{prop.cart.header}</Link>
                <StarRatings
                    rating={3.5}
                    starRatedColor="#ffd700"
                    numberOfStars={5}
                    color="#ededed"
                    name='rating'
                    starDimension="15px"
                    starSpacing="0px"
                />
                <span className={`product-price d-block mt-1 ${prop.cart.oldPrice ? "active" : ""}` }>{prop.cart.price} <span> {prop.cart.oldPrice}</span> </span>
            </div>
        </div>
            
        </>
     );
}

export default ProductCart;