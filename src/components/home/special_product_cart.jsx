
import "../../scss/home/special_product.scss"
import SpecialProductCart from "./special_product_cart";
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

function SpecialProductCartSection ({product}) {
    
    return ( 
        <>
        <div className="item product p-2 d-flex">
            <div className="assets">
                <div className="pairant-image">
                    <img src="" alt="" />
                </div>
                <div className="product_action position-absolute d-flex flex-column">
                    <CiHeart />
                    <IoGitCompareOutline />
                    <IoEyeOutline />
                    <BiShoppingBag />
                </div>
                <div className="pairant-image">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="details">

            </div>
        </div>
            
        </>
     );
}

export default SpecialProductCartSection;