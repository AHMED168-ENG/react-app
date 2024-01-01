import CheckOutWrapperComponent from "../components/check_out/check_out_wrapper";
import HelmetComponent from "../components/helmet";


export default function CheckOutPage () {
    return ( 
        <>
            <HelmetComponent title="check out"></HelmetComponent>
            <CheckOutWrapperComponent></CheckOutWrapperComponent>
        </>
     );
}