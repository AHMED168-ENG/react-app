

import { Link } from "react-router-dom";
import "../../scss/cart/cart.scss"
import { FaRegTrashCan } from "react-icons/fa6";

function CartComponent(props) {
    return <>
        <div className="cart position-relative py-5">
            <div className="container-xxl">
                <div className="table-wrapper table-responsive">
                    <table className="table ">
                        <thead>
                            <tr>
                            <th scope="col text-uppercase">product</th>
                            <th scope="col text-uppercase">discount</th>
                            <th scope="col text-uppercase">price</th>
                            <th scope="col text-uppercase">quantity</th>
                            <th scope="col text-uppercase">total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="py-3">
                                <td scope="row" className="product">
                                    <div className="product-wrapper d-flex gap-2">
                                        <div className="image">
                                            <img src="images/headphone.jpg" alt="" />
                                        </div>
                                        <div className="details d-flex align-items-center">
                                            <ul className="list-unstyled m-0">
                                                <li className="text-capitalize product-name mb-2">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                                    <span>size: </span>
                                                    <span>s</span>
                                                </li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-color"> 
                                                    <span>color: </span>
                                                    <div className="colors d-flex align-items-center gap-1">
                                                        <span style={{background:"#71262A" }}></span>
                                                        <span style={{background:"#9A4F56"}}></span>
                                                        <span style={{background:"#71262A" }}></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td className="discount">
                                    10%
                                </td>
                                <td className="price">
                                    $100.22
                                </td>
                                <td className="quantity">
                                    <div className="quantity-wrapper d-flex gap-2 align-items-center">
                                        <div className="input">
                                            <input type="number" />
                                        </div>
                                        <div className="delete">
                                            <FaRegTrashCan></FaRegTrashCan>
                                        </div>
                                    </div>
                                </td>
                                <td className="total">$700.22</td>
                            </tr>
                            <tr className="py-3">
                                <td scope="row" className="product">
                                    <div className="product-wrapper d-flex gap-2">
                                        <div className="image">
                                            <img src="images/black_mike.jpg" alt="" />
                                        </div>
                                        <div className="details d-flex align-items-center">
                                            <ul className="list-unstyled m-0">
                                                <li className="text-capitalize product-name mb-2">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                                    <span>size: </span>
                                                    <span>s</span>
                                                </li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-color"> 
                                                    <span>color: </span>
                                                    <div className="colors d-flex align-items-center gap-1">
                                                        <span style={{background:"#71262A" }}></span>
                                                        <span style={{background:"#9A4F56"}}></span>
                                                        <span style={{background:"#71262A" }}></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td className="discount">
                                    10%
                                </td>
                                <td className="price">
                                    $100.22
                                </td>
                                <td className="quantity">
                                    <div className="quantity-wrapper d-flex gap-2 align-items-center">
                                        <div className="input">
                                            <input type="number" />
                                        </div>
                                        <div className="delete">
                                            <FaRegTrashCan></FaRegTrashCan>
                                        </div>
                                    </div>
                                </td>
                                <td className="total">$700.22</td>
                            </tr>
                            <tr className="py-3">
                                <td scope="row" className="product">
                                    <div className="product-wrapper d-flex gap-2">
                                        <div className="image">
                                            <img src="images/watch.jpg" alt="" />
                                        </div>
                                        <div className="details d-flex align-items-center">
                                            <ul className="list-unstyled m-0">
                                                <li className="text-capitalize product-name mb-2">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                                    <span>size: </span>
                                                    <span>s</span>
                                                </li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-color"> 
                                                    <span>color: </span>
                                                    <div className="colors d-flex align-items-center gap-1">
                                                        <span style={{background:"#71262A" }}></span>
                                                        <span style={{background:"#9A4F56"}}></span>
                                                        <span style={{background:"#71262A" }}></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td className="discount">
                                    10%
                                </td>
                                <td className="price">
                                    $100.22
                                </td>
                                <td className="quantity">
                                    <div className="quantity-wrapper d-flex gap-2 align-items-center">
                                        <div className="input">
                                            <input type="number" />
                                        </div>
                                        <div className="delete">
                                            <FaRegTrashCan></FaRegTrashCan>
                                        </div>
                                    </div>
                                </td>
                                <td className="total">$700.22</td>
                            </tr>
                            <tr className="py-3">
                                <td scope="row" className="product">
                                    <div className="product-wrapper d-flex gap-2">
                                        <div className="image">
                                            <img src="images/yellow_headphone.jpg" alt="" />
                                        </div>
                                        <div className="details d-flex align-items-center">
                                            <ul className="list-unstyled m-0">
                                                <li className="text-capitalize product-name mb-2">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                                    <span>size: </span>
                                                    <span>s</span>
                                                </li>
                                                <li className="text-capitalize d-flex align-items-center gap-2 product-color"> 
                                                    <span>color: </span>
                                                    <div className="colors d-flex align-items-center gap-1">
                                                        <span style={{background:"#71262A" }}></span>
                                                        <span style={{background:"#9A4F56"}}></span>
                                                        <span style={{background:"#71262A" }}></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td className="discount">
                                    10%
                                </td>
                                <td className="price">
                                    $100.22
                                </td>
                                <td className="quantity">
                                    <div className="quantity-wrapper d-flex gap-2 align-items-center">
                                        <div className="input">
                                            <input type="number" />
                                        </div>
                                        <div className="delete">
                                            <FaRegTrashCan></FaRegTrashCan>
                                        </div>
                                    </div>
                                </td>
                                <td className="total">$700.22</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="continue-shoping py-4">
                        <Link to="/">continue shopping</Link>
                    </div>
                    <div className="check-out pb-4 d-flex justify-content-end">
                        <ul className="list-unstyled mb-0">
                            <li className="text-capitalize d-flex gap-3"><span>subtotal </span> <span>$100.00</span></li>
                            <li><p className="text-capitalize">taxes and shipping calculate at checkout</p></li>
                            <li><Link to="/check-out" className="text-capitalize d-inline-block check-out text-center">check out</Link></li>
                        </ul>
                    </div>
                </div>
             
            </div>
        </div>
    </>;
}

export default CartComponent;