
import "../../scss/home/categorys.scss"


function CategorySection () {
    return ( 
        <>
        <section className="category-section pb-5">
            <div className="container-xxl">
                <div className="inside flex-wrap d-flex px-3 pt-3 pb-3">
                    <div className="item d-flex">
                        <div className="details">
                            <h4>computers & laptop</h4>
                            <p><span>8</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/laptop.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>cameras & video</h4>
                            <p><span>10</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/camera.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>smart & television</h4>
                            <p><span>12</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/tv.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>smart & watch</h4>
                            <p><span>8</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/smart_watch.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>music & gaming</h4>
                            <p><span>8</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/playStasion.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>mobiles & tablets</h4>
                            <p><span>8</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/smart_phone.png" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>headphones</h4>
                            <p><span>8</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/headphone.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>accessors</h4>
                            <p><span>8</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/acc.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>portable & speaker</h4>
                            <p><span>3</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/speaker.jpg" alt="" />
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="details">
                            <h4>home & homeapp</h4>
                            <p><span>3</span> items</p>
                        </div>
                        <div className="image">
                            <img src="./images/homeapp.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
     );
}

export default CategorySection;