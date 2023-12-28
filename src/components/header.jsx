import { Link } from "react-router-dom"
import "../scss/header.scss"
import { BsSearch } from 'react-icons/bs';


export default function Header() {
    return (
       <>
        <header>
            <div className="header_top py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-0 text-white">Free shaping over $100 & free Return</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-0 text-end">
                                <span className="text-white">Hotline </span>
                                <a className="text-white" href="tel:+20 1024756410">+20 1024756410</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_mid py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-lg-2 ">
                            <div className="logo">
                                <Link to="/" className="text-white">Dev Corner</Link>
                            </div>
                        </div>
                        <div className="col-lg-6" >
                            <div className="input-group">
                                <input type="text" className="form-control outline-none" placeholder="search product hear..." aria-label="search product hear..." aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><BsSearch></BsSearch></span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header_mid_links d-flex align-items-center justify-content-around">
                                <Link to="/compar-product" className="link text-white d-flex gap-6">
                                    <div className="image">
                                        <img src="/images/compare.svg" alt="" />
                                    </div>
                                    <p className="mb-0">compar <br /> product </p>
                                </Link>

                                <Link className="link text-white d-flex gap-6">
                                    <div className="image">
                                        <img src="/images/wishlist.svg" alt="" />
                                    </div>
                                    <p className="mb-0">favorite <br /> wishlist </p>
                                </Link>

                                <Link className="link text-white d-flex gap-6">
                                    <div className="image">
                                        <img src="/images/user.svg" alt="" />
                                    </div>
                                    <p className="mb-0">login in <br /> my account </p>
                                </Link>

                                <Link className="gap-15 link cart text-white d-flex justify-content-center ">
                                    <div className="image">
                                        <img src="/images/cart.svg" alt="" />
                                    </div>
                                    <dev className="gap-6 mony d-flex flex-column">
                                        <span className="count test-white bg-white text-dark d-flex align-items-center justify-content-center">0</span>
                                        <span className="badge">$ 500</span>
                                    </dev>
                                </Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom py-2">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="main d-flex gap-5 align-items-center ">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-3 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="image">
                                            <img src="/images/menu.svg" alt="" />
                                        </div>
                                        <span className="me-5">
                                            show category
                                        </span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link to="/" className="dropdown-item text-white" >Action</Link></li>
                                        <li><Link to="/" className="dropdown-item text-white" >Another action</Link></li>
                                        <li><Link to="/" className="dropdown-item text-white" >Something else here</Link></li>
                                    </ul>
                                </div>
                                <div className="menu">
                                    <ul className="menu_links d-flex p-0 m-0 gap-4">
                                        <Link to="/">Home</Link>
                                        <Link to="/our-store">our store</Link>
                                        <Link to="/blogs">blogs</Link>
                                        <Link to="/contact">contact</Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

       </>
    )
}