
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import "../../scss/home/landing_page.scss"


function LandingPage () {
    return ( 
        <>
        <section className="landingPage py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="right_banner">
                            <OwlCarousel className='owl-theme' 
                                loop={true}
                                margin={10}
                                nav={false}
                                dots={true}
                                autoplay={true}
                                autoplayTimeout={5000}
                                items={4}
                                responsive={
                                    {0: {
                                        items: 1,
                                    },
                                    450: {
                                        items: 1,
                                    },
                                    600: {
                                        items: 1,
                                    },
                                    1000: {
                                        items: 1,
                                    }}
                                }>
                                <div className='item position-relative'>
                                    <div className="img">
                                        <img src="./images/main-banner-1.jpg" alt="" />
                                    </div>
                                    <div className="over position-absolute">
                                        <h4 className='text-uppercase'>supercharged for pros</h4>
                                        <h2 className='text-capitalize'>special sale</h2>
                                        <p>from <span>$999.00 </span> or <span>$41.62/mo.</span> <br /> for 24 mo. Footnote*</p>
                                        <Link to="/">Buy now</Link>
                                    </div>
                                </div>

                                <div className='item position-relative'>
                                    <div className="img">
                                        <img src="./images/main-banner.jpg" alt="" />
                                    </div>
                                    <div className="over position-absolute">
                                        <h4 className='text-uppercase'>supercharged for pros</h4>
                                        <h2 className='text-capitalize'>special sale</h2>
                                        <p>from <span>$999.00 </span> or <span>$41.62/mo.</span> <br /> for 24 mo. Footnote*</p>
                                        <Link to="/">Buy now</Link>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                       <div className="left_banner right_banner">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='item position-relative'>
                                        <div className="img">
                                            <img src="./images/catbanner-01.jpg" alt="" />
                                        </div>
                                        <div className="over position-absolute">
                                            <h4 className='text-uppercase'>best sale</h4>
                                            <h2 className='text-capitalize'>laptops Max</h2>
                                            <p>from <span>$1695.00 </span> or <br /> <span>$65.62/mo.</span> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='item position-relative'>
                                        <div className="img">
                                            <img src="./images/catbanner-02.jpg" alt="" />
                                        </div>
                                        <div className="over position-absolute">
                                            <h4 className='text-uppercase'>new arrival</h4>
                                            <h2 className='text-capitalize'>buy ipad air</h2>
                                            <p>from <span>$999.00 </span> or <br /> <span>$41.62/mo.</span> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='item position-relative'>
                                        <div className="img">
                                            <img src="./images/catbanner-03.jpg" alt="" />
                                        </div>
                                        <div className="over position-absolute">
                                            <h4 className='text-uppercase'>15% off</h4>
                                            <h2 className='text-capitalize'>smartwatch 7</h2>
                                            <p>shop the latest band <br /> styles and color </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='item position-relative'>
                                        <div className="img">
                                            <img src="./images/catbanner-04.jpg" alt="" />
                                        </div>
                                        <div className="over position-absolute">
                                            <h4 className='text-uppercase'>free engraving</h4>
                                            <h2 className='text-capitalize'>airpods max</h2>
                                            <p>high-fidelity playback & ultra-low distortion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
     );
}

export default LandingPage;