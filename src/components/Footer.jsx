
import { BsSearch } from "react-icons/bs"
import "../scss/footer.scss"
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer_upper d-flex py-4">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="footer_upper_right d-flex align-items-center gap-4">
                                    <div className="icon text-white">
                                        <img src="/images/newsletter.png" alt="" />
                                    </div>
                                    <h2 className="text-white mb-0">sign up for news letter</h2>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="footer_upper_left">
                                    <div className="input-group">
                                        <input type="text" className="form-control outline-none" placeholder="your email address" aria-label="your email address" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">subscribe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_mid py-5">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="contact_us">
                                    <h3 className="text-capitalize text-white mb-4">contact us</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <p className="test-capitalize">Demo store <br /> No 1259 freedom, new york, 1111  <br /> united states</p>
                                        </li>
                                        <li>
                                            <p>+91-9876544321</p>
                                        </li>
                                        <li>
                                            <p>demo@exampledemo.com</p>
                                        </li>
                                        <li className="social mt-4">
                                            <ul className="d-flex gap-2 list-unstyled">
                                                <li><a href="/"><FaTwitter></FaTwitter></a></li>
                                                <li><a href="/"><FaFacebook></FaFacebook></a></li>
                                                <li><a href="/"><FaPinterest ></FaPinterest></a></li>
                                                <li><a href="/"><FaInstagram /></a></li>
                                                <li><a href="/"><FaYoutube /></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="information">
                                    <h3 className="text-capitalize text-white mb-4">information</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">privacy police</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">refund police</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">shipping police</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">terms of service</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">blogs</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="information">
                                    <h3 className="text-capitalize text-white mb-4">account</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">search</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">about us</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">faq</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">contact</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">size chart</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="information">
                                    <h3 className="text-capitalize text-white mb-4">quick links</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">accessories</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">laptops</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">headphone</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">smart watches</Link>
                                        </li>
                                        <li>
                                            <Link className="text-capitalize text-white" to="/">tables</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="our_app">
                                    <h3 className="text-capitalize text-white mb-4">our app</h3>
                                    <p className="text-white">download our app and extra %15 discount <br /> on your first order...</p>
                                    <div className="apps">
                                        <div className="app">
                                            <img src="/public/images/" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </footer>
        </>
    )
}