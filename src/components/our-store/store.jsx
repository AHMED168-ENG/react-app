import { useState } from "react";
import "../../scss/our_store/store.scss"
import ProductCart from "../home/product_cart";

function Store() {
    let productData = [
        {
            img1 : "./images/mobile.jpg",
            img2 : "./images/mobile2.jpg",
            img3 : "./images/mobile3.jpg",
            type : "sony",
            rate : 4.5,
            header: 'hero session action camera with 8mb',
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
            price : "$260.00",
            days : 598,
            productPercentage : "10%"        
        },
        {
            img1 : "./images/headphone.jpg",
            img2 : "./images/yellow_headphone.jpg",
            img3 : "./images/yellow_headphone.jpg",
            type : "havelis",
            header: 'a beautiful sunday morning renaissance',
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
            price : "$260.00",
            days : 598,
            productPercentage : "10%"          },
        {
            img2 : "./images/laptop.jpg",
            img1 : "./images/watch.jpg",
            img3 : "./images/smart_phone.png",
            date : "11 june 2022",
            type : "sony",
            header: 'amera soman detram sandra elit cursus',
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
            price : "$260.00",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
            price : "$220.00"
        },
        {
            img1 : "./images/speker1.jpg",
            img2 : "./images/speker2.jpg",
            img3 : "./images/speker3.jpg",
            type : "havelis",
            header: 'vite magnes fuces laoreet bluetooth',
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
            price : "$90.00",
            oldPrice : "$260.00",
            days : 598,
            productPercentage : "60%"
        },
        {
            img1 : "./images/mobile.jpg",
            img2 : "./images/mobile2.jpg",
            img3 : "./images/mobile3.jpg",
            type : "sony",
            rate : 4.5,
            header: 'hero session action camera with 8mb',
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
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
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
            price : "$220.00"
        },
        {
            img1 : "./images/speker1.jpg",
            img2 : "./images/speker2.jpg",
            img3 : "./images/speker3.jpg",
            type : "havelis",
            header: 'vite magnes fuces laoreet bluetooth',
            paragraph : "hero session action camera with 8mb hero session action camera with 8mb hero session action camera with 8mb",
            price : "$90.00",
            oldPrice : "$260.00",
            days : 598,
            productPercentage : "60%"
        },
    ]
    const [grid, setGrid] = useState(3);
    return ( 
        <>
            <div className="store m-0">
                <div className="product-sort mb-3 bg-white flex-column d-flex row-gap-3  flex-md-row align-items-md-center justify-content-between p-2 px-3">
                    <div className="sort-by d-flex align-items-center gap-3 ">
                        <span>sort by</span>
                        <select name="" id="">
                            <option value="" selected className="text-capitalize">best seeling</option>
                            <option value="" className="text-capitalize">best seeling</option>
                            <option value="" className="text-capitalize">best seeling</option>
                            <option value="" className="text-capitalize">best seeling</option>
                        </select>
                    </div>
                    <div className="set-grid d-flex align-items-center gap-2  justify-content-between justify-content-md-start">
                        <span className="total-product">21 products</span>
                        <div className="d-flex gap-2">
                            <div className={`image ${grid === 3 ? "active" : "" }`} onClick={() => setGrid(3)}>
                                <img src="./images/gr4.svg" alt="" />
                            </div>
                            <div className={`image ${grid === 4 ? "active" : "" }`} onClick={() => setGrid(4)}>
                                <img src="./images/gr3.svg" alt="" />
                            </div>
                            <div className={`image ${grid === 6 ? "active" : "" }`} onClick={() => setGrid(6)}>
                                <img src="./images/gr2.svg" alt="" />
                            </div>
                            <div className={`image ${grid === 12 ? "active" : "" }`} onClick={() => setGrid(12)}>
                                <img src="./images/gr.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="row row-gap-4">
                        {
                            productData.map((ele, index) => (
                                <div className={`col-md-${grid}`}>
                                    <ProductCart grid={grid} key={index} cart={ele}></ProductCart>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
     );
} 

export default Store ;