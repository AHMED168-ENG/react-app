import "../../scss/product_details/product-details-wrapper.scss"
import ProductDetailsImageShow from "./product_details_images_show";
import ProductDetails from "./product_details";
import StarRatings from "react-star-ratings";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import ProductCart from "../home/product_cart";


export default function ProductDetailsWrapper(props) {
let productData = [
    {
        img1 : "/images/headphone.jpg",
        img2 : "/images/yellow_headphone.jpg",
        type : "havelis",
        header: 'a beautiful sunday morning renaissance',
        price : "$100.00"
    },
    {
        img1 : "/images/camera_classic.jpg",
        img2 : "/images/camera.jpg",
        type : "sony",
        header: 'sed ut perspiciatis unde omnis',
        price : "$100.00"
    },
    {
        img1 : "/images/tab1.jpg",
        img2 : "/images/tab.jpg",
        type : "havelis",
        header: 'vite magnes fuces laoreet porttitor',
        oldPrice : "$55.22",
        price : "$500.00",
        discount : "-33%"
    },
    {
        img1 : "/images/speaker.jpg",
        img2 : "/images/black_mike.jpg",
        type : "bajaj",
        date : "11 june 2022",
        header: 'amera soman detram sandra elit cursus',
        price : "$100.00",
    },
    {
        img1 : "/images/headphone.jpg",
        img2 : "/images/yellow_headphone.jpg",
        type : "havelis",
        header: 'a beautiful sunday morning renaissance',
        price : "$100.00"
    },
    {
        img2 : "/images/smartWatch.jpg",
        img1 : "/images/watch.jpg",
        date : "11 june 2022",
        type : "sony",
        header: 'amera soman detram sandra elit cursus',
        price : "$220.00"
    },
    {
        img1 : "/images/black_mike.jpg",
        img2 : "/images/speaker.jpg",
        date : "11 june 2022",
        type : "bajaj",
        header: 'amera soman detram sandra elit cursus',
        price : "$220.00"
    }
]
const {product} = props
const [isReview , setReview] = useState(false)
function ratingChanged(newRating) {
    console.log(newRating)
}
  return (
    <div className="product-details-wrapper py-5">
        <div className="container-xxl">
            <div className="product-info b-white">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <ProductDetailsImageShow images={product.images}></ProductDetailsImageShow>
                    </div>
                    <div className="col-md-6 p-0">
                        <ProductDetails></ProductDetails>
                    </div>
                </div>
            </div>
            <div className="product-description">
                <h4 className="text-capitalize mb-3">description</h4>
                <p className="p-4">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fugit porro nihil excepturi. Optio quaerat laudantium cum distinctio nam, velit eaque et odit alias, fuga quia est, id fugit blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fugit porro nihil excepturi. Optio quaerat laudantium cum distinctio nam, velit  nam, velit eaque et odit alias, fuga quia est, id fugit  eaque et odit alias, fuga quia est, id fugit blanditiis  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fugit porro nihil excepturi. Optio quaerat laudantium cum distinctio nam, velit eaque et odit alias, fuga quia est, id fugit blanditiis! !Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fugit porro nihil excepturi. Optio quaerat laudantium cum  nam, velit eaque et odit alias, fuga quia est, id fugit  distinctio nam, velit eaque et odit alias, fuga quia est, id fugit blanditiis!"</p>
            </div>
            <div className="product-review">
                <h4 className="text-capitalize mb-3">reviews</h4>
                <div className="product-review-wrapper py-5 px-4">
                    <div className="head d-flex align-items-end justify-content-between pb-3 mb-3">
                        <div className="left">
                            <h4 className="text-capitalize ">custom reviews</h4>
                            <div className="stars d-flex gap-2 align-items-center">
                                <StarRatings
                                    rating={4.5}
                                    starRatedColor="#ffd700"
                                    numberOfStars={5}
                                    color="#ededed"
                                    name='rating'
                                    starDimension="15px"
                                    starSpacing="0px"
                                />
                                <span>based on (2) reviews</span>
                            </div>
                        </div>
                        <div className="right">
                            <button onClick={() => setReview(!isReview)}>write review</button>
                        </div>
                    </div>
                    <div className={`write-review ${isReview ? "active" : ""}`}>
                        <h5 className="text-capitalize mb-4">write a review</h5>
                        <div className="input mb-3">
                            <label htmlFor="">name</label>
                            <input type="text" name="" placeholder="enter your name" id="" />
                        </div>
                        <div className="input mb-3">
                            <label htmlFor="">email</label>
                            <input type="email" name="" id="" placeholder="johan.smath@gmail.com" />
                        </div>
                        <div className="input mb-3">
                            <label htmlFor="">rating</label>
                            <div className="rates">
                                <ReactStars
                                    count={5}
                                    isHalf={true}
                                    value={1}
                                    onChange={ratingChanged}
                                    size={25}
                                    activeColor="#ffd700"
                                    color="#ededed"
                                />
                            </div>
    
                        </div>
                        <div className="input mb-3">
                            <label htmlFor="">review title</label>
                            <input type="text" name="" id="" placeholder="given your review title" />
                        </div>
                        <div className="input mb-3">
                            <label htmlFor="">body of review (1500)</label>
                            <textarea type="text" placeholder="write your comment hir" ></textarea>
                        </div>
                        <div className="submit mt-3">
                            <button>submit review</button>
                        </div>
                        <hr />
                    </div>

                    <div className="comments">
                        <ul className="list-unstyled">
                            <li>
                                <div className="comment py-3 mb-3">
                                    <StarRatings
                                        rating={4}
                                        starRatedColor="#ffd700"
                                        numberOfStars={5}
                                        color="#ededed"
                                        name='rating'
                                        starDimension="15px"
                                        starSpacing="0px"
                                    />
                                    <span className="title d-block">Good</span>
                                    <div className="date">
                                        <span className="writer">admin</span>
                                        <span> on </span>
                                        <span className="date">Jun 20, 2022</span>
                                    </div>
                                    <p className="message">great stuff, i think i will get more orders from you guis</p>
                                    <div className="report-comment d-flex justify-content-end mb-3">
                                        <button>report as inappropriate</button>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li className="p-3">
                                            <h5>- Digitic</h5>
                                            <p>think you for approach great stuff, i think i will get more orders from you guis</p>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <div className="comment pt-3 mb-3">
                                    <StarRatings
                                        rating={3}
                                        starRatedColor="#ffd700"
                                        numberOfStars={5}
                                        color="#ededed"
                                        name='rating'
                                        starDimension="15px"
                                        starSpacing="0px"
                                    />
                                    <span className="title d-block">Good</span>
                                    <div className="date">
                                        <span className="writer">admin</span>
                                        <span> on </span>
                                        <span className="date">Jun 20, 2022</span>
                                    </div>
                                    <p className="message">great stuff, i think i will get more orders from you guis</p>
                                    <div className="report-comment d-flex justify-content-end mb-3">
                                        <button>report as inappropriate</button>
                                    </div>                                
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="our-popular-product">
                        <header className=" mb-3">
                            <h4 className="text-capitalize">our popular product</h4>
                        </header>
                        <div className="products">                
                            <OwlCarousel className='owl-theme'
                                
                                loop={true}
                                margin={20}
                                nav={true}
                                dots={false}
                                autoplay={true}
                                autoplayTimeout={50000}
                                responsive={
                                    {0: {
                                        items: 1,
                                    },
                                    450: {
                                        items: 2,
                                    },
                                    600: {
                                        items: 4,
                                    },
                                    1000: {
                                        items: 6,
                                    }}
                                }
                                >
                                {productData.map((ele , index) => ( 
                                    <ProductCart key={index} cart={ele}></ProductCart>
                                ))}    
                            </OwlCarousel>
                        </div>
            </div>
            <div className="our-popular-product">
                        <header className=" mb-3">
                            <h4 className="text-capitalize">our featured product</h4>
                        </header>
                        <div className="products">                
                            <OwlCarousel className='owl-theme'
                                
                                loop={true}
                                margin={20}
                                nav={true}
                                dots={false}
                                autoplay={true}
                                autoplayTimeout={50000}
                                responsive={
                                    {0: {
                                        items: 1,
                                    },
                                    450: {
                                        items: 2,
                                    },
                                    600: {
                                        items: 4,
                                    },
                                    1000: {
                                        items: 6,
                                    }}
                                }
                                >
                                {productData.map((ele , index) => ( 
                                    <ProductCart key={index} cart={ele}></ProductCart>
                                ))}    
                            </OwlCarousel>
                        </div>
            </div>
        </div>
    </div>
  )
}
