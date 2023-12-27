import "../../scss/blog/blog_wrapper.scss"
import Blogs from "./blogs";
import BlogFilter from "./blog_filter";

function BlogWrapper() {
  
    return ( 
        <>
            <div className="blog-wrapper m-0 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-3">
                            <BlogFilter></BlogFilter>
                        </div>
                        <div className="col-md-9">
                            <Blogs></Blogs>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default BlogWrapper ;