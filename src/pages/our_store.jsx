import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";
import StoreWrapper from "../components/our-store/store_wrapper";



export default function OurStore () {
    return ( 
        <>
            <HelmetComponent title="our store"></HelmetComponent>
            <Breadcrumb title="our store"></Breadcrumb>
            <StoreWrapper></StoreWrapper>
        </>
     );
}

