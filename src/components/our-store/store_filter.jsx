import StarRatings from "react-star-ratings";
import "../../scss/our_store/store_filter.scss"

function StoreFilter() {
    let colors = []
    while(colors.length < 54) {
        const randomColor = Math.floor(Math.random() * 360)
        colors.push(`hsl(${randomColor}deg, 100%, 30%)`)
        console.log(colors)
    }

    return ( 
        <>
            <div className="store-filter m-0">
                <div className="filter-product filter-category bg-white mb-3 p-3">
                    <h4 className="text-capitalize mb-4">shop by categories</h4>
                    <ul className="list-unstyled m-0 p-0">
                        <li className="text-uppercase curs">home</li>
                        <li className="text-uppercase">our store</li>
                        <li className="text-uppercase">blogs</li>
                        <li className="text-uppercase">contact</li>
                    </ul>
                </div>

                <div className="filter-product filter-availability bg-white mb-3 p-3">
                    <h4 className="text-capitalize mb-4">filter by </h4>
                    <div className="block-availability">
                        <h5 className="text-capitalize mb-3">availability</h5>
                        <ul className="list-unstyled m-0">
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="one" />
                                <label htmlFor="one" className="text-capitalize">in stock (21)</label>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <input type="checkbox" id="tow" />
                                <label htmlFor="tow" className="text-capitalize">out of stock (1)</label>
                            </li>
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

                    <div className="block-price">
                        <h5 className="text-capitalize mb-3">price</h5>
                        <div className="inputs d-flex gap-2">
                            <div className="from d-flex align-items-center gap-1">
                                <span>$</span>
                                <input placeholder="from" type="number" />
                            </div>
                            <div className="to d-flex align-items-center gap-1">
                                <span>$</span>
                                <input placeholder="to" type="number" />
                            </div>
                        </div>
                    </div>

                    <div className="block-colors">
                        <h5 className="text-capitalize mb-3">color</h5>
                        <div className="d-flex gap-2 flex-wrap">
                            {
                                colors.map(ele => (
                                    <span style={{background : ele}}></span>
                                ))
                            }
                        </div>
                    </div>

                    <div className="block-size">
                        <h5 className="text-capitalize mb-3">size</h5>
                        <ul className="list-unstyled m-0">
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

                <div className="filter-product filter-tags bg-white mb-3 p-3">
                    <h4 className="text-capitalize mb-4">product tag</h4>
                    <ul className="list-unstyled d-flex flex-wrap gap-2">
                        <li className="d-flex align-items-center ">
                            headphone
                        </li>
                        <li className="d-flex align-items-center">
                            laptop
                        </li>
                        <li className="d-flex align-items-center">
                            mobile
                        </li>
                        <li className="d-flex align-items-center">
                            oppo
                        </li>
                        <li className="d-flex align-items-center">
                            speaker
                        </li>
                        <li className="d-flex align-items-center">
                            tablet
                        </li>
                        <li className="d-flex align-items-center">
                            vivo
                        </li>
                        <li className="d-flex align-items-center">
                            wire
                        </li>
                    </ul>
                </div>

                <div className="filter-product filter-random bg-white p-3">
                    <h4 className="text-capitalize mb-4" >random product</h4>
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
                                    starDimension="13px"
                                    starSpacing="0px"
                                />
                                <span className="price d-block">$100.00</span>
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
                                    starDimension="13px"
                                    starSpacing="0px"
                                />
                                <span className="price d-block">$100.00</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default StoreFilter ;