import BlogWrapper from "../components/blog/blog_wrapper";
import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";

export default function Blogs () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="Blog"></HelmetComponent>
            <Breadcrumb title="Blog"></Breadcrumb>
            <BlogWrapper></BlogWrapper>
        </>
     );
}
