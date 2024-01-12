import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";
import ProductDetailsWrapper from "../components/product_details/product_details_wrapper";



export default function ProductDetailsPage () {
    window.scrollTo(0,0)
    const product = {}
    return ( 
        <>
            <HelmetComponent title="product one"></HelmetComponent>
            <Breadcrumb title="product one"></Breadcrumb>
            <ProductDetailsWrapper product={product}></ProductDetailsWrapper>
        </>
     );
}

