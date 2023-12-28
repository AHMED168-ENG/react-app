import "../../scss/blog_details/blog_details_wrapper.scss"
import BlogFilter from "../blog/blog_filter";
import BlogsDetails from "./blog_details";

function BlogDetailsWrapper() {
  
    return ( 
        <>
            <div className="blog-wrapper m-0 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-3">
                            <BlogFilter></BlogFilter>
                        </div>
                        <div className="col-md-9">
                            <BlogsDetails></BlogsDetails>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default BlogDetailsWrapper ;