
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
            img1 : "./images/mobile.jpg",
            img2 : "./images/mobile2.jpg",
            img3 : "./images/mobile3.jpg",
            type : "sony",
            rate : 4.5,
            header: 'hero session action camera with 8mb',
            price : "$60.00",
            oldPrice : "$75.00",
            discount : "35%",
            days : 878,
            productPercentage : "35%"
        },
        {
            img1 : "./images/camera10.png",
            img2 : "./images/camera11.png",
            img3 : "./images/camera12.png",
            type : "havelis",
            rate : 4,
            header: 'samsong galaxy note 10+ mobile phone sml',
            price : "$60.00",
            oldPrice : "$75.00",
            discount : "40%",
            days : 743,
            productPercentage : "10%"
        },
        {
            img1 : "./images/speker1.jpg",
            img2 : "./images/speker2.jpg",
            img3 : "./images/speker3.jpg",
            type : "havelis",
            header: 'vite magnes fuces laoreet bluetooth',
            price : "$90.00",
            oldPrice : "$260.00",
            days : 598,
            productPercentage : "60%"
        },
        {
            img1 : "./images/smart_phone.png",
            img2 : "./images/black_mike.jpg",
            img3 : "./images/watch.jpg",
            type : "bajaj",
            date : "11 june 2022",
            header: 'amera soman detram sandra elit cursus',
            oldPrice : "$260.00",
            days : 598,
            productPercentage : "10%"        
        },
        {
            img1 : "./images/headphone.jpg",
            img2 : "./images/yellow_headphone.jpg",
            img3 : "./images/yellow_headphone.jpg",
            type : "havelis",
            header: 'a beautiful sunday morning renaissance',
            oldPrice : "$260.00",
            days : 598,
            productPercentage : "10%"          },
        {
            img2 : "./images/laptop.jpg",
            img1 : "./images/watch.jpg",
            img3 : "./images/smart_phone.png",
            date : "11 june 2022",
            type : "sony",
            header: 'amera soman detram sandra elit cursus',
            oldPrice : "$260.00",
            days : 598,
            productPercentage : "20%" 
        },
        {
            img1 : "./images/black_mike.jpg",
            img2 : "./images/speaker.jpg",
            img3 : "./images/black_mike.jpg",
            date : "11 june 2022",
            type : "bajaj",
            header: 'amera soman detram sandra elit cursus',
            price : "$220.00"
        },
        {
            img1 : "./images/speker1.jpg",
            img2 : "./images/speker2.jpg",
            img3 : "./images/speker3.jpg",
            type : "havelis",
            header: 'vite magnes fuces laoreet bluetooth',
            price : "$90.00",
            oldPrice : "$260.00",
            days : 598,
            productPercentage : "60%"
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