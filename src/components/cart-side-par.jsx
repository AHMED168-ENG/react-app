import { FaRegTrashCan } from "react-icons/fa6";
import "../scss/cart_side_par.scss"
import { Link } from "react-router-dom";


function CartSideParComponent(props) {
    const {sidePar , activeSidePar} = props
    return ( 
        <>
            <div className={`cart-side-par position-fixed top-0 right-0 height-100 d-flex justify-content-end ${sidePar ? "active" : ""}`} onClick={(e) => activeSidePar(false)}>
                <div className="cart-side-par-wrapper " onClick={(e) => e.stopPropagation()}>
                    <ul className="list-unstyled product-details">
                        <li className="p-3">
                            <div className="product d-flex justify-content-between">
                                <div className="product-image">
                                    <img src="images/headphone/black.jpg" alt="" />
                                </div>
                                <div className="product-details">
                                    <ul className="list-unstyled">
                                        <li className="text-capitalize product-name mb-2">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-price"> 
                                            <span>price: </span>
                                            <span>$100.00</span>
                                        </li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                            <span>size: </span>
                                            <div className="d-flex gap-2">
                                                <span>s</span>
                                                <span>xl</span>
                                                <span>xxl</span>
                                            </div>
                                        </li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-color"> 
                                            <span>color: </span>
                                            <div className="product-colors d-flex align-items-center gap-1">
                                                <span style={{background:"#71262A" }}></span>
                                                <span style={{background:"#9A4F56"}}></span>
                                                <span style={{background:"#71262A" }}></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-trash" onClick={(e) => activeSidePar(false)}>
                                    <FaRegTrashCan></FaRegTrashCan>
                                </div>
                            </div>
                        </li>
                        <li className="p-3">
                            <div className="product d-flex justify-content-between">
                                <div className="product-image">
                                    <img src="images/camera_classic.jpg" alt="" />
                                </div>
                                <div className="product-details">
                                    <ul className="list-unstyled">
                                        <li className="text-capitalize product-name mb-2">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-price"> 
                                            <span>price: </span>
                                            <span>$100.00</span>
                                        </li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                            <span>size: </span>
                                            <div className="d-flex gap-2">
                                                <span>s</span>
                                                <span>xl</span>
                                                <span>xxl</span>
                                            </div>
                                        </li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-color"> 
                                            <span>color: </span>
                                            <div className="product-colors d-flex align-items-center gap-1">
                                                <span style={{background:"#71262A" }}></span>
                                                <span style={{background:"#9A4F56"}}></span>
                                                <span style={{background:"#71262A" }}></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-trash" onClick={(e) => activeSidePar(false)}>
                                    <FaRegTrashCan></FaRegTrashCan>
                                </div>
                            </div>
                        </li>
                        <li className="p-3">
                            <div className="product d-flex justify-content-between">
                                <div className="product-image">
                                    <img src="images/yellow_headphone.jpg" alt="" />
                                </div>
                                <div className="product-details">
                                    <ul className="list-unstyled">
                                        <li className="text-capitalize product-name mb-2">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-price"> 
                                            <span>price: </span>
                                            <span>$100.00</span>
                                        </li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                            <span>size: </span>
                                            <div className="d-flex gap-2">
                                                <span>s</span>
                                                <span>xl</span>
                                                <span>xxl</span>
                                            </div>
                                        </li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-color"> 
                                            <span>color: </span>
                                            <div className="product-colors d-flex align-items-center gap-1">
                                                <span style={{background:"#71262A" }}></span>
                                                <span style={{background:"#9A4F56"}}></span>
                                                <span style={{background:"#71262A" }}></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-trash" onClick={(e) => activeSidePar(false)}>
                                    <FaRegTrashCan></FaRegTrashCan>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="price-details list-unstyled">
                        <li className="d-flex justify-content-between p-3 px-4">
                            <div className="count d-flex flex-column">
                                <span>total</span>
                                <span>1</span>
                            </div>
                            <div className="total d-flex flex-column">
                                <span className="text-capitalize">subtotal</span>
                                <span>$100.00</span>
                            </div>
                        </li>
                        <li className="buttons d-flex align-items-center gap-2 justify-content-center py-4">
                            <Link  onClick={(e) => activeSidePar(false)} to="/my-cart" className="text-capitalize">view cart</Link>
                            <Link onClick={(e) => activeSidePar(false)} to="/my-cart" className="text-capitalize">view cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default CartSideParComponent;