
import "../../scss/home/special_product.scss"
import SpecialProductCart from "./special_product_cart";
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import Swiper from "swiper";

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
                </div>
                <div className="child-image">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                </Swiper>
                    
                </div>
            </div>
            <div className="details">

            </div>
        </div>
            
        </>
     );
}

export default SpecialProductCartSection;