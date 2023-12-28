

import { Link } from "react-router-dom";
import "../../scss/compar_product/compar_product_cart.scss"
import { GrClose } from "react-icons/gr";

function compar_product_cart(props) {
    const {product} = props
    function setColor(){
        const randomColor = Math.floor(Math.random() * 360)
        return `hsl(${randomColor}deg, 100%, 25%)`
    }
    return <>
        <div className="compar-product-cart position-relative">
            <div className="close position-absolute">
                <GrClose></GrClose>
            </div>
            <div className="product-images position-relative ">
                <div className="image">
                    <img src={product.img1} alt="" />
                </div>
                <div className="image position-absolute">
                    <img src={product.img2} alt="" />
                </div>
            </div>
            <div className="product-details">
                <h3 className="text-capitalize">
                    <Link to="">{product.header}</Link>
                </h3>
                <div className="info">
                    <ul className="list-unstyled m-0 p-0">
                        <li className="d-flex text-capitalize price">
                            <span>$100.00</span>
                            <span></span>
                        </li>
                        <li className="d-flex text-capitalize brand">
                            <span>brand : </span>
                            <span>{product.brand}</span>
                        </li>
                        <li className="d-flex text-capitalize type">
                            <span>type : </span>
                            <span>{product.type}</span>
                        </li>
                        <li className="d-flex text-capitalize sky">
                            <span>sky </span>
                            <span>{product.sku}</span>
                        </li>
                        <li className="d-flex text-capitalize availability">
                            <span>availability </span>
                            <span>{product.availability}</span>
                        </li>
                        <li className="d-flex text-capitalize size">
                            <span>size </span>
                            <span>{product.size}</span>
                        </li>
                        <li className="d-flex text-capitalize color">
                            <span>color </span>
                            <div className="d-flex text-capitalize gap-2">
                                <span style={{background : setColor()}}></span>
                                <span style={{background : setColor()}}></span>
                                <span style={{background : setColor()}}></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
}

export default compar_product_cart;