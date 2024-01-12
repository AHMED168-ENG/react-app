import CheckOutWrapperComponent from "../components/check_out/check_out_wrapper";
import HelmetComponent from "../components/helmet";


export default function CheckOutPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="check out"></HelmetComponent>
            <CheckOutWrapperComponent></CheckOutWrapperComponent>
        </>
     );
}