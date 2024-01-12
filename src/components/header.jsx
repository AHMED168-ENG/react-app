import { Link } from "react-router-dom"
import "../scss/header.scss"
import { BsSearch } from 'react-icons/bs';
import { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";


export default function Header(props) {
    const header = useRef(null)
    const {activeSidePar} = props
    let scrollY = 0
    const [menu , setMenu] = useState(false)
    window.onscroll = (e) => {
        const headerHeight = header.current.offsetHeight
        if(window.pageYOffset > 500) {
            if(window.pageYOffset < scrollY) {
                header.current.className = "active animation"
                document.body.style.paddingTop = `${headerHeight}px`
            } else {
                header.current.className = "active"
            }
            scrollY = window.pageYOffset
        } else {
            document.body.style.paddingTop = `0px`
            header.current.className = ""
        }

    }

    function openMenu() {
        setMenu(!menu)
        document.body.classList.add("hide")
    }

    function closeMenu() {
        setMenu(!menu)
        document.body.classList.remove("hide")
    }

    const header_top = useRef()
    const header_bottom = useRef()

    return (
       <>
        <div className="header position-relative">
            <div className={`over position-fixed p-3 ${menu ? "active" : ""}`}>
                <div className="close position-absolute">
                    <GrClose onClick={() => closeMenu()} className=""></GrClose>
                </div>
                <div className="inside d-flex flex-column justify-content-between">
                    <div ref={header_bottom} className="menu">
                        <ul className="menu_links d-flex p-0 m-0 gap-1 list-unstyled">
                            <li><Link onClick={() => closeMenu()} to="/">Home</Link></li>
                            <li><Link onClick={() => closeMenu()} to="/our-store">our store</Link></li>
                            <li><Link onClick={() => closeMenu()} to="/our-store">our category</Link></li>
                            <li><Link onClick={() => closeMenu()} to="/blogs">blogs</Link></li>
                            <li><Link onClick={() => closeMenu()} to="/contact">contact</Link></li>
                        </ul>
                        <div className="header_mid_links d-flex flex-column gap-1 ">
                            <Link onClick={() => closeMenu()} to="/compar-product" className="link text-white d-flex gap-6">
                                <div className="image">
                                    <img src="./images/compare.svg" alt="" />
                                </div>
                                <p className="mb-0">compar product </p>
                            </Link>

                            <Link onClick={() => closeMenu()} to="/wishlist-product" className="link text-white d-flex gap-6">
                                <div className="image">
                                    <img src="./images/wishlist.svg" alt="" />
                                </div>
                                <p className="mb-0">favorite wishlist </p>
                            </Link>

                            <Link onClick={() => closeMenu()} to="/login" className="link text-white d-flex gap-6">
                                <div className="image">
                                    <img src="./images/user.svg" alt="" />
                                </div>
                                <p className="mb-0">login in account </p>
                            </Link>

                            <button onClick={() => {activeSidePar(true) ; closeMenu() ; document.body.classList.add("hide")} } className="gap-2 px-0 link cart text-white d-flex align-items-center bg-transparent border-0 outline-0">
                                <div className="image">
                                    <img src="./images/cart.svg" alt="" />
                                </div>
                                <dev className=" mony d-flex">
                                    <span className="count test-white bg-white text-dark d-flex align-items-center justify-content-center">0</span>
                                    <span className="badge">$ 505.23</span>
                                </dev>
                            </button>
                        </div>
                    </div>

                    <div ref={header_top} className="header_top py-2">
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <p className="mb-0 text-white text-md-start text-center">Free shaping over $100 & free Return</p>
                                </div>
                                <div className="col-md-6 ">
                                    <p className="mb-0 text-end text-md-end text-center">
                                        <span className="text-white">Hotline </span>
                                        <a className="text-white" href="tel:+20 1024756410">+20 1024756410</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header ref={header}>
                <div ref={header_top} className="header_top py-2 d-lg-block d-none">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-md-6 ">
                                <p className="mb-0 text-white text-md-start text-center">Free shaping over $100 & free Return</p>
                            </div>
                            <div className="col-md-6 ">
                                <p className="mb-0 text-end text-md-end text-center">
                                    <span className="text-white">Hotline </span>
                                    <a className="text-white" href="tel:+20 1024756410">+20 1024756410</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_mid py-md-3 py-2 ">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2">
                                <div className="logo">
                                    <Link to="/" className="text-white">
                                        <img src="/images/logos/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-8 col-sm-9 col-md-5 col-xl-6" >
                                <div className="input-group">
                                    <input type="text" className="form-control outline-none" placeholder="search product hear..." aria-label="search product hear..." aria-describedby="basic-addon2" />
                                    <span className="input-group-text" id="basic-addon2"><BsSearch></BsSearch></span>
                                </div>
                            </div>
                            <div className="col-xl-4 px-md-2 p-0 col-md-5 d-md-block d-none">
                                <div className="header_mid_links d-flex align-items-center justify-content-between">
                                    <Link to="/compar-product" className="link text-white d-flex gap-6">
                                        <div className="image">
                                            <img src="./images/compare.svg" alt="" />
                                        </div>
                                        <p className="mb-0">compar <br /> product </p>
                                    </Link>

                                    <Link to="/wishlist-product" className="link text-white d-flex gap-6">
                                        <div className="image">
                                            <img src="./images/wishlist.svg" alt="" />
                                        </div>
                                        <p className="mb-0">favorite <br /> wishlist </p>
                                    </Link>

                                    <Link to="/login" className="link text-white d-flex gap-6">
                                        <div className="image">
                                            <img src="./images/user.svg" alt="" />
                                        </div>
                                        <p className="mb-0">login in <br /> account </p>
                                    </Link>

                                    <button onClick={() => activeSidePar(true)} className="gap-2 px-0 link cart text-white d-flex justify-content-center align-items-center bg-transparent border-0 outline-0">
                                        <div className="image">
                                            <img src="./images/cart.svg" alt="" />
                                        </div>
                                        <dev className=" mony d-flex flex-column">
                                            <span className="count test-white bg-white text-dark d-flex align-items-center justify-content-center">0</span>
                                            <span className="badge">$ 505.23</span>
                                        </dev>
                                    </button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_bottom py-2">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="main d-flex gap-2 gap-md-5 align-items-center justify-content-between">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-3 align-items-center px-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="image">
                                                <img src="./images/menu.svg" alt="" />
                                            </div>
                                            <span className="me-md-0">
                                                show category
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link to="/" className="dropdown-item text-white" >Action</Link></li>
                                            <li><Link to="/" className="dropdown-item text-white" >Another action</Link></li>
                                            <li><Link to="/" className="dropdown-item text-white" >Something else here</Link></li>
                                        </ul>
                                    </div>
                                    <div ref={header_bottom} className="menu d-md-block d-none">
                                        <ul className="menu_links d-flex p-0 m-0 gap-3 list-unstyled">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/our-store">our store</Link></li>
                                            <li><Link to="/our-store">our category</Link></li>
                                            <li><Link to="/blogs">blogs</Link></li>
                                            <li><Link to="/contact">contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="menu-icon d-block d-md-none">
                                        <IoMenu onClick={() => openMenu()} className="text-white"></IoMenu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
       </>
    )
}