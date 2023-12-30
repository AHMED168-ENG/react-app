import "../../scss/product_details/product-details-wrapper.scss"
import ProductDetailsImageShow from "./product_details_images_show";
import ProductDetails from "./product_details";
import StarRatings from "react-star-ratings";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

export default function ProductDetailsWrapper(props) {
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
            <div className="product-review ">
                <h4 className="text-capitalize mb-3">review</h4>
                <div className="product-review-wrapper py-5 px-4">
                    <div className="head d-flex align-items-end justify-content-between pb-3 mb-3">
                        <div className="left">
                            <h4 className="text-capitalize ">custom reviews</h4>
                            <div className="stars d-flex gap-2 ">
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
                                <div className="comment">
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
                                        <span>on</span>
                                        <span className="date">Jun 20, 2022</span>
                                    </div>
                                    <p className="message">great stuff, i think i will get more orders from you guis</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li>
                                        <h5>- Digitic</h5>
                                        <p>think you for approach great stuff, i think i will get more orders from you guis</p>
                                    </li>
                                </ul>
                                <div className="report-comment">
                                    <button>report as inappropriate</button>
                                </div>
                            </li>

                            <li>
                                <div className="comment">
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
                                        <span>on</span>
                                        <span className="date">Jun 20, 2022</span>
                                    </div>
                                    <p className="message">great stuff, i think i will get more orders from you guis</p>
                                </div>
                                <div className="report-comment">
                                    <button>report as inappropriate</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
