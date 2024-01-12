import BlogDetailsWrapper from "../components/blog_details/blog_details_wrapper";
import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";

export default function BlogDetails () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="Blog details"></HelmetComponent>
            <Breadcrumb title="Blog details"></Breadcrumb>
            <BlogDetailsWrapper></BlogDetailsWrapper>
        </>
     );
}
