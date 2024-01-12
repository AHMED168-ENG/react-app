import Breadcrumb from "../components/breadcrumb";
import ComparProductComponent from "../components/compar_product/compar_product";
import HelmetComponent from "../components/helmet";

export default function ComparProductPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="compar product"></HelmetComponent>
            <Breadcrumb title="compar product"></Breadcrumb>
            <ComparProductComponent></ComparProductComponent>
        </>
     );
}
