
import "../../scss/home/latest_news.scss"
import NewsCart from "./news_cart";


function LatestNewsSection () {
    let newsData = [
        {
            img : "./images/blog-1.jpg",
            date : "11 june 2022",
            header: 'a beautiful sunday morning renaissance',
            paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi ",
            button: "read more"
        },
        {
            img : "./images/blog-2.jpg",
            date : "11 june 2022",
            header: 'sed ut perspiciatis unde omnis',
            paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi ",
            button: "read more"
        },
        {
            img : "./images/blog-3.jpg",
            date : "11 june 2022",
            header: 'vite magnes fuces laoreet porttitor',
            paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi ",
            button: "read more"
        },
        {
            img : "./images/blog-4.jpg",
            date : "11 june 2022",
            header: 'amera soman detram sandra elit cursus',
            paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi ",
            button: "read more"
        }
    ]
    return ( 
        <>
        <section className="latestNewsSection py-5">
            <div className="container-xxl">
                <header className=" mb-4">
                    <h2 className="text-uppercase">our latest news</h2>
                </header>
                <div className="row">
                    {
                        newsData.map((ele ,index) => (
                                <div className="col-md-3" key={index}>
                                    <NewsCart cart={ele}></NewsCart>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
            
        </>
     );
}

export default LatestNewsSection;