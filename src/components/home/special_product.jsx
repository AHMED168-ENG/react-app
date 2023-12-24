
import "../../scss/home/special_product.scss"
import SpecialProductCartSection from "./special_product_cart";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
 
import { Grid, Pagination } from 'swiper/modules';


function SpecialProductSection () {
    let productData = [
        {
            img1 : "/images/camera10.png",
            img2 : "/images/camera11.png",
            img3 : "/images/camera12.png",
            type : "havelis",
            header: 'samsong galaxy note 10+ mobile phone sml...',
            price : "$60.00",
            oldprice : "$75.00",
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
            img1 : "/images/headphone.jpg",
            img2 : "/images/yellow_headphone.jpg",
            type : "havelis",
            header: 'a beautiful sunday morning renaissance',
            price : "$100.00"
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
        },
    ]
    
    return ( 
        <>
        <section className="special-product-section py-5">
            <div className="container-xxl overflow-hidden">
                <header className=" mb-4">
                    <h2 className="text-uppercase">special product </h2>
                </header>
                <div className="products">  
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                        autoplay={true}
                        loop={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid]}
                        className="mySwiper"
                    >
                        {
                        productData.map((ele, index) => (
                            <SwiperSlide key={index} >
                                <SpecialProductCartSection product={ele}></SpecialProductCartSection>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>              
                   
                </div>
            </div>
        </section>
            
        </>
     );
}

export default SpecialProductSection;