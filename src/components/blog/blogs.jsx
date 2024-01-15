import "../../scss/blog/blog.scss"
import NewsCart from "../home/news_cart";

function Blog() {
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
            <div className="blogs">
                <div className="row">
                    {
                        newsData.map((ele , index) => (
                            <div className="col-md-6 mb-4" key={index}>
                                <NewsCart cart={ele} key={index}></NewsCart>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
     );
} 

export default Blog ;