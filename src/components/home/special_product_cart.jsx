
import "../../scss/home/special_product.scss"
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Navigation } from "swiper/modules";
import Swiper from "swiper";

function SpecialProductCartSection ({product}) {
    
    return ( 
        <>
        <div className="item product p-2 d-flex">
            <div className="product-assets">
                <div className="parian-image">
                    <img src="" alt="" />
                </div>
                <div className="product_action position-absolute d-flex flex-column">
                    <CiHeart />
                    <IoGitCompareOutline />
                    <IoEyeOutline />
                </div>
                <div className="child-image">
                <Swiper navigation={true} modules={[Navigation]}>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                </Swiper>
                    
                </div>
            </div>
            <div className="details">
                <span>{product.type}</span>
                <h2 className="text-transform">{product.header}</h2>
                <StarRatings
                    rating={4.5}
                    starRatedColor="#ffd700"
                    numberOfStars={5}
                    color="#ededed"
                    name='rating'
                    starDimension="15px"
                    starSpacing="0px"
                />
                <div className="price">
                    <span className="new-price text-danger">
                        $16.55
                    </span>
                    <span className="old-price text-primary text-decoration-line-throw">
                        $30.00
                    </span>
                </div>
                <div className="days-of-discount d-flex">
                    <div className="left">
                        <span>887</span>
                        <span>days</span>
                    </div>
                </div>
            </div>
        </div>
            
        </>
     );
}

export default SpecialProductCartSection;