
import { Link } from "react-router-dom";
import "../../scss/home/news_cart.scss"


function NewsCart (prop) {
    return ( 
        <>
        <div className="news_cart">
            <div className="cart-image">
                <img src={prop.cart.img} alt="" />
            </div>
            <div className="cart-details py-4 px-3">
                <span className="cart-date text-uppercase mb-2 d-block">
                    11 june 2022
                </span>
                <h2 className="cart-head text-capitalize">{prop.cart.header}</h2>
                <p className="text-capitalize ">{prop.cart.paragraph}</p>
                <Link to="/blog-details" className="text-uppercase text-white d-inline-block">{prop.cart.button}</Link>
            </div>
        </div>
            
        </>
     );
}

export default NewsCart;