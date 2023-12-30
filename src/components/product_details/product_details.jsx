import { Link } from "react-router-dom"
import "../../scss/product_details/product_details.scss"
import StarRatings from "react-star-ratings"
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiExplosiveMaterials } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";
import { useState } from "react";
import { BsShare } from "react-icons/bs";


export default function ProductDetails() {  
  const [listNumber , setNumber] = useState(1)

    return (
      <div className="product-details py-4">
        <header>
          <h3 className="text-capitalize pt-4 pb-3">kids headphone bulk 10 pack multi colored for students</h3>
        </header>
        <div className="price d-flex gap-2 my-3">
          <span>$100.00</span>
          <span className="text-decoration-line-through">$150.00</span>
        </div>
        <div className="rate my-3 d-flex gap-2">
          <StarRatings
              rating={4.5}
              starRatedColor="#ffd700"
              numberOfStars={5}
              color="#ededed"
              name='rating'
              starDimension="15px"
              starSpacing="0px"
          />
          <span>(2 reviews)</span>
        </div>
        <Link to="#addReview" className="text-capitalize d-block my-3">write Review</Link>
        <hr />
        <div className="details">
          <ul className="list-unstyled">
            <li className="type d-flex align-items-center gap-2 align-items-center">
              <span className="text-capitalize">type</span>
              <span className="separate">:</span>
              <span className="text-capitalize">headsets</span>
            </li>
            <li className="categories d-flex flex-column gap-1 ">
              <span className="text-capitalize">categories</span>
              <span className="text-capitalize">airpods, camera, computers & laptops, headphones, minispeaker, our store, portable, speakers, smart phone, smart television, smart watches</span>
            </li>
            <li className="tags d-flex align-items-center gap-2">
              <span className="text-capitalize">tags</span>
              <span className="separate">:</span>
              <span className="text-capitalize d-flex gap-3">
                <span>headphone</span>
                <span>tablet</span>
                <span>mobile</span>
                <span>oppo</span>
                <span>speaker</span>
              </span>
            </li>
            <li className="sku d-flex align-items-center gap-2 align-items-center">
              <span className="text-capitalize">sku</span>
              <span className="separate">:</span>
              <span className="text-uppercase">skuo27</span>
            </li>
            <li className="availability d-flex align-items-center gap-2 align-items-center">
              <span className="text-capitalize">availability</span>
              <span className="separate">:</span>
              <span className="text-uppercase">541 in stock</span>
            </li>
            <li className="size d-flex flex-column gap-2 ">
              <span className="text-capitalize">size</span>
              <span className="text-uppercase d-flex gap-2">
                  <span className="active">S</span>
                  <span>L</span>
                  <span>xL</span>
                  <span>xxL</span>
              </span> 
            </li>
            <li className="color d-flex flex-column gap-2 ">
              <span className="text-capitalize">color</span>
              <span className="text-uppercase d-flex gap-2">
                  <span className="active" style={{border : `1px solid ${'#9A4F56'}`}}>
                    <span style={{background:"#9A4F56"}}></span>
                  </span>
                  <span style={{border : `1px solid ${'#71262A'}`}}>
                    <span style={{background:"#71262A" }}></span>
                  </span>
                  <span style={{border : `1px solid ${'#71262A'}`}}>
                    <span style={{background:"#71262A" }}></span>
                  </span>
                  <span style={{border : `1px solid ${'#71262A'}`}}>
                    <span style={{background:"#71262A" }}></span>
                  </span>
              </span> 
            </li>
            <li className="product-quantity d-flex align-items-center gap-3">
                <div className="quantity d-flex gap-4">
                  <span className="text-capitalize">quantity</span>
                  <input type="number" defaultValue={1} min={1} max={10} />
                </div>
                <div className="add-to-cart d-flex gap-2">
                  <button className="cart text-uppercase">add to cart</button>
                  <button className="buy text-uppercase">buy it now</button>
                </div>
            </li>
            <li className="favorite-compare d-flex align-items-center gap-3 mb-5" >
                <button className="d-flex align-items-center gap-2">
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                  <span className="text-capitalize">add to favorite</span>
                </button>
                <button className="d-flex align-items-center gap-2">
                  <IoIosGitCompare></IoIosGitCompare>
                  <span className="text-capitalize">add to compare</span>
                </button>
            </li>
            <li className="drop-list">
              <ul className="list-unstyled">
                  <li className={`item ${listNumber === 1 ? "active" : ""}`} onClick={() => setNumber(1)}>
                      <div className="head d-flex justify-content-between align-items-center">
                          <div className="left d-flex gap-2  align-items-center">
                            <MdOutlineLocalShipping></MdOutlineLocalShipping>
                            <span className="text-capitalize">shipping & return</span>
                          </div>
                          <FaChevronDown></FaChevronDown>
                      </div>
                      <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur tempora velit inventore molestias, quae, expedita facere ipsa obcaecati </p>
                      </div>
                  </li>

                  <li className={`item ${listNumber} ${listNumber === 2 ? "active" : ""}`} onClick={() => setNumber(2)}>
                      <div className="head d-flex justify-content-between align-items-center">
                          <div className="left d-flex gap-2  align-items-center">
                            <GiExplosiveMaterials></GiExplosiveMaterials>
                            <span className="text-capitalize">Materials</span>
                          </div>
                          <FaChevronDown></FaChevronDown>
                      </div>
                      <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur tempora velit inventore molestias, quae, expedita facere ipsa obcaecati </p>
                      </div>
                  </li>

                  <li className={`item ${listNumber === 3 ? "active" : ""}`} onClick={() => setNumber(3)}>
                      <div className="head d-flex justify-content-between align-items-center">
                          <div className="left d-flex gap-2  align-items-center">
                            <RxDimensions></RxDimensions>
                            <span className="text-capitalize">Dimensions</span>
                          </div>
                          <FaChevronDown></FaChevronDown>
                      </div>
                      <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur tempora velit inventore molestias, quae, expedita facere ipsa obcaecati </p>
                      </div>
                  </li>
                  
                  <li className={`item ${listNumber === 4 ? "active" : ""}`} onClick={() => setNumber(4)}>
                      <div className="head d-flex justify-content-between align-items-center">
                          <div className="left d-flex gap-2  align-items-center">
                            <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                            <span className="text-capitalize">care instructions</span>
                          </div>
                          <FaChevronDown></FaChevronDown>
                      </div>
                      <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur tempora velit inventore molestias, quae, expedita facere ipsa obcaecati </p>
                      </div>
                  </li>
                  <li className={`item ${listNumber === 5 ? "active" : ""}`} onClick={() => setNumber(5)}>
                      <div className="head d-flex justify-content-between align-items-center">
                          <div className="left d-flex gap-2  align-items-center">
                            <BsShare></BsShare>
                            <span className="text-capitalize">share</span>
                          </div>
                          <FaChevronDown></FaChevronDown>
                      </div>
                      <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur tempora velit inventore molestias, quae, expedita facere ipsa obcaecati </p>
                      </div>
                  </li>
                  <li className="payment py-4">
                    <h5 className="text-capitalize text-center mb-3">payment methods</h5>
                    <div className="methods d-flex gap-2 justify-content-center">
                      <div className="method">
                        <img src="images/payment/one.png" alt="" />
                      </div>
                      <div className="method">
                        <img src="images/payment/tow.png" alt="" />
                      </div>
                      <div className="method">
                        <img src="images/payment/three.png" alt="" />
                      </div>
                      <div className="method">
                        <img src="images/payment/four.png" alt="" />
                      </div>
                      <div className="method">
                        <img src="images/payment/fif.png" alt="" />
                      </div>
                      <div className="method">
                        <img src="images/payment/sex.png" alt="" />
                      </div>
                    </div>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  