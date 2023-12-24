
import "../../scss/home/special_product.scss"
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Navigation } from "swiper/modules";
import Swiper from "swiper";
import { Link } from "react-router-dom";

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
                <div className="days-of-discount d-flex align-items-center justify-content-between">
                    <div className="days d-flex">
                        <span>887</span>
                        <span>days</span>
                    </div>
                    <div className="date">
                        <span className="bg-danger cel text-white d-flex align-items-center justify-content-center">05</span> 
                        <span className="separate">:</span>
                        <span className="bg-danger cel text-white d-flex align-items-center justify-content-center">37</span>
                        <span className="separate">:</span>
                        <span className="bg-danger cel text-white d-flex align-items-center justify-content-center">32</span>
                    </div>
                </div>
                <div className="product_progress">
                    <h4 className="text-capitalize">product: 5</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <Link to="/" className="text-uppercase">option</Link>
            </div>
        </div>
            
        </>
     );
}

export default SpecialProductCartSection;