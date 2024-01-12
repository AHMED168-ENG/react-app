
import "../../scss/home/special_product_cart.scss"
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

function SpecialProductCartSection (props) {
    const [src , setSrc] = useState(null)
    return (    
        <div className="item special-product-cart p-2 d-flex">
            <div className="product-assets position-relative">
                <div className="parian-image mb-2">
                    <img src={src ? src : props.product.img1} alt="" />
                </div>
                <div className="product_action position-absolute d-flex flex-column">
                    <div><CiHeart /></div>
                    <div><IoGitCompareOutline /></div>
                    <div><IoEyeOutline /></div>
                </div>
                <div className="product_discount position-absolute">
                    -20%
                </div>
                <div className="child-image">
                    <Swiper 
                        slidesPerView={2}
                        spaceBetween={10}
                        speed={1000}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[ Autoplay]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className="image" >
                                <img src={props.product.img2} onClick={() => setSrc(props.product.img2)} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image">
                                <img src={props.product.img3} onClick={() => setSrc(props.product.img3)} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image">
                                <img src={props.product.img2} onClick={() => setSrc(props.product.img2)} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image">
                                <img src={props.product.img3} onClick={() => setSrc(props.product.img3)} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="product-details py-4">
                <span className="product-type">{props.product.type}</span>
                <h2 className="text-capitalize product-title">{props.product.header}</h2>
                <div className="rate">
                    <StarRatings
                        rating={4.5}
                        starRatedColor="#ffd700"
                        numberOfStars={5}
                        color="#ededed"
                        name='rating'
                        starDimension="15px"
                        starSpacing="0px"
                    />
                </div> 
                <div className="price d-flex gap-2 align-items-center">
                    <span className="new-price text-danger">
                        {props.product.price} 
                    </span>
                    <span className="old-price text-decoration-line-through text-secondary">
                        {props.product.oldPrice}
                    </span>
                </div>
                <div className="days-of-discount d-flex align-items-md-center flex-column flex-md-row ali gap-2">
                    <div className="days d-flex gap-2">
                        <span>{props.product.days}</span>
                        <span className="text-capitalize">days</span>
                    </div>
                    <div className="date d-flex gap-1">
                        <span className="bg-danger cel text-white d-flex align-items-center justify-content-center">05</span> 
                        <span className="separate">:</span>
                        <span className="bg-danger cel text-white d-flex align-items-center justify-content-center">37</span>
                        <span className="separate">:</span>
                        <span className="bg-danger cel text-white d-flex align-items-center justify-content-center">32</span>
                    </div>
                </div>
                <div className="product_progress">
                    <h4 className="text-capitalize">product: 5</h4>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <Link to="/" className="text-uppercase option">option</Link>
            </div>
        </div>
     );
}

export default SpecialProductCartSection;