import "../../scss/check_out/check_out_form.scss"
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


function CheckOutFormComponent(props) {
    return ( 
        <>
            <div className="check-out-form">
                <div className="check-out-form-wrapper">
                <header className="mb-4">
                    <h5 className="text-capitalize mb-3">Digital</h5>
                    <div className="links d-flex align-items-center gap-2">
                        <Link to="/">cart</Link>
                        <FaChevronRight></FaChevronRight>
                        <Link to="/" className="active">information</Link>
                        <FaChevronRight></FaChevronRight>
                        <Link to="/">shipping</Link>
                        <FaChevronRight></FaChevronRight>
                        <Link to="/">payment</Link>
                    </div>
                </header>
                <form action="" className="">
                    <h4 className="text-capitalize mb-3">contact information</h4>
                    <p className="text-capitalize mb-1">navdeep dahiya(mouse@gmail.com)</p>
                    <h5 className="text-capitalize mb-3">log out</h5>
                    <div className="d-flex mb-4 gap-2 align-items-center">
                        <input type="checkbox" id="email" />
                        <label className="text-capitalize" htmlFor="email">email me with news and offers</label>
                    </div>
                    <h3 className=" mb-2">Shipping address</h3>
                    <div className="inputs d-flex gap-3 justify-content-between flex-wrap" >
                        <div className="input position-relative ">
                            <label htmlFor="" className="position-absolute text-capitalize">saved addresses</label>
                            <select name="" id="">
                                <option defaultValue="" className=" text-capitalize">use a new address</option>
                            </select>
                        </div>

                        <div className="input position-relative ">
                            <label htmlFor="" className="position-absolute text-capitalize">country/region</label>
                            <select name="" id="">
                                <option defaultValue="" className=" text-capitalize">united states</option>
                            </select>
                        </div>
                        
                        <div className="input half position-relative ">
                            <input type="text" placeholder="first name (optional)" />
                        </div>

                        <div className="input half position-relative ">
                            <input type="text" placeholder="last name (optional)" />
                        </div>

                        <div className="input position-relative ">
                            <input type="text" placeholder="address" />
                        </div>

                        <div className="input position-relative ">
                            <input type="text" placeholder="apartment, suite, etc. (optional)" />
                        </div>

                        <div className="input quarter position-relative ">
                            <input type="text" placeholder="city" />
                        </div>

                        <div className="input quarter position-relative ">
                            <label htmlFor="" className="position-absolute text-capitalize">state</label>
                            <select name="" id="">
                                <option defaultValue="" className=" text-capitalize">indiana</option>
                            </select>
                        </div>

                        <div className="input quarter position-relative ">
                            <input type="text" placeholder="zip code" />
                        </div>
                    </div>
                    <div className="controlled pt-5 d-flex justify-content-between">
                        <Link to="/my-cart" className="go-to-cart d-flex gap-2 align-items-center">
                            <FaAngleLeft></FaAngleLeft>
                            <span>return to cart</span>
                        </Link> 
                        <Link to="/shipping" className="shipping">continue to shipping</Link>
                    </div>
                </form>
                </div>
            </div>
        </>
     );
}

export default CheckOutFormComponent;