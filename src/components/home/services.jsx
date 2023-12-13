
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../../scss/home/servicePage.scss"


function ServicePage () {
    return ( 
        <>
        <section className="servicePage py-5">
            <div className="container-xxl">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  
                    <div className="item d-flex align-items-center justify-content-center mb-3 mb-md-0 gap-3">
                        <div class="image">
                            <img src="/images/service.png" alt="" />
                        </div>
                        <div className="details">
                            <h4 className='text-capitalize'>free shipping</h4>
                            <p>From all orders over $100 </p>
                        </div>
                    </div>

                    <div className="item d-flex align-items-center justify-content-center mb-3 mb-md-0 gap-3">
                        <div class="image">
                            <img src="/images/service-02.png" alt="" />
                        </div>
                        <div className="details">
                            <h4 className='text-capitalize'>daily surprise offers</h4>
                            <p>From all orders over $100 </p>
                        </div>
                    </div>
            
                    <div className="item d-flex align-items-center justify-content-center mb-3 mb-md-0 gap-3">
                        <div class="image">
                            <img src="/images/service-03.png" alt="" />
                        </div>
                        <div className="details">
                            <h4 className='text-capitalize'>sport 24/7</h4>
                            <p>shop with an expert</p>
                        </div>
                    </div>
                  
                    <div className="item d-flex align-items-center justify-content-center mb-3 mb-md-0 gap-3">
                        <div class="image">
                            <img src="/images/service-04.png" alt="" />
                        </div>
                        <div className="details">
                            <h4 className='text-capitalize'>affordable price</h4>
                            <p>get factory direct price </p>
                        </div>
                    </div>
                  
                    <div className="item d-flex align-items-center justify-content-center mb-3 mb-md-0 gap-3">
                        <div class="image">
                            <img src="/images/service-05.png" alt="" />
                        </div>
                        <div className="details">
                            <h4 className='text-capitalize'>secure payments</h4>
                            <p>100% protected payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
     );
}

export default ServicePage;