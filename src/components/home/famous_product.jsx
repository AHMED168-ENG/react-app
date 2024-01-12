
import "../../scss/home/famous_product.scss"


function FamousProductSection () {

    return ( 
        <>
        <section className="famousProductSection py-5">
            <div className="container-xxl">
                <div className="row row-gap-4">
                    <div className="col-md-3">
                        <div className="item">
                            <div className="details">
                                <span className="text-uppercase">big screen</span>
                                <h4 className="text-capitalize">smart watch series 7</h4>
                                <p>from $399or $16.62/mo. for 24mo.</p>
                            </div>
                            <div className="image">
                                <img src="images/clock1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <div className="details">
                                <span className="text-uppercase">studio display</span>
                                <h4 className="text-capitalize">600 nits of brightness </h4>
                                <p>27-inch 5k Retina display</p>
                            </div>
                            <div className="image">
                                <img src="images/lap2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <div className="details">
                                <span className="text-uppercase">smarthons</span>
                                <h4 className="text-capitalize">smartphone 13 pro</h4>
                                <p className="text-uppercase">now in green from $999.00 or $41.62/mo. for 24 mo.footnote</p>
                            </div>
                            <div className="image">
                                <img src="images/mobile2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <div className="details">
                                <span className="text-uppercase">home speaker</span>
                                <h4 className="text-capitalize">room filling sound </h4>
                                <p>from $99or $22.62/mo. total for 24mo.</p>
                            </div>
                            <div className="image">
                                <img src="images/vazza.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
     );
}

export default FamousProductSection;