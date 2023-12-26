import StarRatings from "react-star-ratings";
import "../../scss/our_store/store_filter.scss"

function StoreFilter() {
    let colors = []
    while(colors.length < 100) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        colors.push(randomColor)
    }
    return ( 
        <>
            <div className="store-filter m-0">
                <div className="filter-product bg-white mb-3 p-3">
                    <h4 className="text-capitalize mb-4">shop by categories</h4>
                    <ul className="list-unstyled m-0 p-0">
                        <li className="text-uppercase curs">home</li>
                        <li className="text-uppercase">our store</li>
                        <li className="text-uppercase">blogs</li>
                        <li className="text-uppercase">contact</li>
                    </ul>
                </div>
                <div className="filter-product bg-white mb-3 p-3">
                    <h4 className="text-capitalize mb-4">filter by </h4>
                    <div className="block availability">
                        <h5 className="text-capitalize mb-4">availability</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="one" />
                                <label htmlFor="one" className="text-capitalize">in stock (21)</label>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="tow" />
                                <label htmlFor="tow" className="text-capitalize">out of stock (1)</label>
                            </li>
                        </ul>
                    </div>

                    <div className="block price">
                        <h5 className="text-capitalize mb-4">price</h5>
                        <div className="inputs d-flex gap-2">
                            <div className="from d-flex align-items-center">
                                <span>$</span>
                                <input type="number" />
                            </div>
                            <div className="to d-flex align-items-center">
                                <span>$</span>
                                <input type="number" />
                            </div>
                        </div>
                    </div>

                    <div className="block colors">
                        <h5 className="text-capitalize mb-4">color</h5>
                        <div className="d-flex gap-2 flex-wrap">
                            {
                                colors.map(ele => (
                                    <span style={{background : ele}}></span>
                                ))
                            }
                        </div>
                    </div>

                    <div className="block size">
                        <h5 className="text-capitalize mb-4">size</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="one" />
                                <label htmlFor="one" className="text-capitalize">s(10)</label>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="tow" />
                                <label htmlFor="tow" className="text-capitalize">m(10)</label>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="three" />
                                <label htmlFor="three" className="text-capitalize">l(10)</label>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="four" />
                                <label htmlFor="four" className="text-capitalize">xl(10)</label>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="fif" />
                                <label htmlFor="fif" className="text-capitalize">xxl(10)</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filter-product bg-white mb-3 p-3">
                    <h4 className="text-capitalize">product tag</h4>
                    <ul className="list-unstyled d-flex flex-wrap">
                        <li className="d-flex align-items-center gap-2">
                            headphone
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            laptop
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            mobile
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            oppo
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            speaker
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            tablet
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            vivo
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            wire
                        </li>
                    </ul>
                </div>
                <div className="filter-product bg-white mb-3 p-3">
                    <h4 className="text-capitalize">random product</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center gap-2">
                            <div className="image">
                                <img src="images/yellow_headphone.jpg" alt="" />
                            </div>
                            <div className="details">
                                <h4>kids headphone bulks 10 pack multi colored for</h4>
                                <StarRatings
                                    rating={3.5}
                                    starRatedColor="#ffd700"
                                    numberOfStars={5}
                                    color="#ededed"
                                    name='rating'
                                    starDimension="15px"
                                    starSpacing="0px"
                                />
                                <span className="price">$100.00</span>
                            </div>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <div className="image">
                                <img src="images/watch.jpg" alt="" />
                            </div>
                            <div className="details">
                                <h4>kids headphone bulks 10 pack multi colored for</h4>
                                <StarRatings
                                    rating={3.5}
                                    starRatedColor="#ffd700"
                                    numberOfStars={5}
                                    color="#ededed"
                                    name='rating'
                                    starDimension="15px"
                                    starSpacing="0px"
                                />
                                <span className="price">$100.00</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default StoreFilter ;