import Breadcrumb from "../components/breadcrumb";
import ComparProductComponent from "../components/compar_product/compar_product";
import HelmetComponent from "../components/helmet";

export default function ComparProductPage () {
    return ( 
        <>
            <HelmetComponent title="compar product"></HelmetComponent>
            <Breadcrumb title="compar product"></Breadcrumb>
            <ComparProductComponent></ComparProductComponent>
        </>
     );
}
