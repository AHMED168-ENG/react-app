
import Marquee from "react-fast-marquee";
import "../../scss/home/brand.scss"
import { Link } from "react-router-dom";


function BrandPage () {
    return ( 
        <>
        <section className="brandPage py-5">
            <div className="container-xxl">
                <div className="marque_inside d-flex px-2">
                    <Marquee>
                        <div className="brand mx-4">
                            <div className="image">
                                <Link to="/">
                                    <img src="/images/brand-01.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="brand mx-4">
                            <div className="image">
                                <Link to="/">
                                    <img src="/images/brand-02.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="brand mx-4">
                            <div className="image">
                                <Link to="/">
                                    <img src="/images/brand-03.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="brand mx-4">
                            <div className="image">
                                <Link to="/">
                                    <img src="/images/brand-04.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="brand mx-4">
                            <div className="image">
                                <Link to="/">
                                    <img src="/images/brand-05.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="brand mx-4">
                            <div className="image">
                                <Link to="/">
                                    <img src="/images/brand-06.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="brand mx-4">
                            <div className="image">
                                <Link to="/">
                                    <img src="/images/brand-07.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
            
        </>
     );
}

export default BrandPage;