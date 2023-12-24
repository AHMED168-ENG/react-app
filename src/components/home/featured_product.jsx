
import "../../scss/home/featured_product.scss"
import ProductCart from "./product_cart";
import OwlCarousel from 'react-owl-carousel';


function FeatureProductSection () {
    let productData = [
        {
            img1 : "/images/headphone.jpg",
            img2 : "/images/yellow_headphone.jpg",
            type : "havelis",
            header: 'a beautiful sunday morning renaissance',
            price : "$100.00"
        },
        {
            img1 : "/images/camera_classic.jpg",
            img2 : "/images/camera.jpg",
            type : "sony",
            header: 'sed ut perspiciatis unde omnis',
            price : "$100.00"
        },
        {
            img1 : "/images/tab1.jpg",
            img2 : "/images/tab.jpg",
            type : "havelis",
            header: 'vite magnes fuces laoreet porttitor',
            oldPrice : "$55.22",
            price : "$500.00",
            discount : "-33%"
        },
        {
            img1 : "/images/speaker.jpg",
            img2 : "/images/black_mike.jpg",
            type : "bajaj",
            date : "11 june 2022",
            header: 'amera soman detram sandra elit cursus',
            price : "$100.00",
        },
        {
            img2 : "/images/smartWatch.jpg",
            img1 : "/images/watch.jpg",
            date : "11 june 2022",
            type : "sony",
            header: 'amera soman detram sandra elit cursus',
            price : "$220.00"
        },
        {
            img1 : "/images/black_mike.jpg",
            img2 : "/images/speaker.jpg",
            date : "11 june 2022",
            type : "bajaj",
            header: 'amera soman detram sandra elit cursus',
            price : "$220.00"
        }
    ]
    return ( 
        <>
        <section className="FeatureProductSection py-5">
            <div className="container-xxl overflow-hidden">
                <header className=" mb-4">
                    <h2 className="text-uppercase">Featured collections </h2>
                </header>
                <div className="products">                
                    <OwlCarousel className='owl-theme' 
                        loop={true}
                        margin={20}
                        nav={true}
                        dots={false}
                        autoplay={true}
                        autoplayTimeout={50000}
                        responsive={
                            {0: {
                                items: 1,
                            },
                            450: {
                                items: 2,
                            },
                            600: {
                                items: 4,
                            },
                            1000: {
                                items: 6,
                            }}
                        }>
                        {productData.map(ele => ( 
                            <ProductCart cart={ele}></ProductCart>
                        ))}    
                    </OwlCarousel>
                </div>
            </div>
        </section>
            
        </>
     );
}

export default FeatureProductSection;