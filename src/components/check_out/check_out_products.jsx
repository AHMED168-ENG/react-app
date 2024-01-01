import "../../scss/check_out/check_out_product.scss"
import { FaRegTrashCan } from "react-icons/fa6";


function CheckOutProductComponent(props) {
    return ( 
        <>
            <div className="check-out-product ">
                <div className="check-out-product-wrapper">
                    <ul className="list-unstyled">
                        <li className="py-3 product">
                            <div className=" d-flex justify-content-between gap-3">
                                <div className="product-image position-relative">
                                    <span className="position-absolute">1</span>
                                    <img src="images/headphone/black.jpg" alt="" />
                                </div>
                                <div className="product-details">
                                    <ul className="list-unstyled">
                                        <li className="text-capitalize product-name mb-1">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                            <span>size: </span>
                                            <div className="d-flex gap-2">
                                                <span>s</span>
                                                <span>xl</span>
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
                                <div className="product-price">
                                    <span>$100.00</span>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 product">
                            <div className=" d-flex justify-content-between gap-3">
                                <div className="product-image position-relative">
                                    <span className="position-absolute">1</span>
                                    <img src="images/yellow_headphone.jpg" alt="" />
                                </div>
                                <div className="product-details">
                                    <ul className="list-unstyled">
                                        <li className="text-capitalize product-name mb-1">Kids Headphone Bulk 10 Pack Multi Colored For Students</li>
                                        <li className="text-capitalize d-flex align-items-center gap-2 product-size"> 
                                            <span>size: </span>
                                            <div className="d-flex gap-2">
                                                <span>s</span>
                                                <span>xl</span>
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
                                <div className="product-price">
                                    <span>$100.00</span>
                                </div>
                            </div>
                        </li>
                
                    </ul>
                    <ul className=" list-unstyled m-0">
                        <li className="d-flex justify-content-between py-2 ">
                            <span className="text-capitalize">subtotal</span>
                            <span>$100</span>
                        </li>
                        <li className="d-flex justify-content-between py-2 ">
                            <span className="text-capitalize">shipping</span>
                            <span>$19.65</span>
                        </li>
                    </ul>
                    <ul className=" list-unstyled">
                        <li className="d-flex justify-content-between py-3 ">
                            <span className="text-capitalize">total</span>
                            <span>
                                <span>usd </span>
                                <span>$225.65</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default CheckOutProductComponent;