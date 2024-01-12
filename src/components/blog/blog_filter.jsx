import "../../scss/blog/blog_filter.scss"

function BlogFilter() {
    return ( 
        <>
            <div className="blog-filter m-0">
                <div className="filter-product filter-category bg-white mb-3 p-3">
                    <h4 className="text-capitalize mb-lg-4 mb-3">shop by categories</h4>
                    <ul className="list-unstyled m-0 p-0">
                        <li className="text-uppercase curs">watch</li>
                        <li className="text-uppercase">tv</li>
                        <li className="text-uppercase">camera</li>
                        <li className="text-uppercase">laptop</li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default BlogFilter ;