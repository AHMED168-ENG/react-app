import Breadcrumb from "../../components/breadcrumb";
import HelmetComponent from "../../components/helmet";
import RefundPolicyComponent from "../../components/policy/refund_policy copy";



export default function RefundPolicyPage () {
    window.scrollTo(0,0 )
    return ( 
        <>
            <HelmetComponent title="refund policy"></HelmetComponent>
            <Breadcrumb title="refund policy"></Breadcrumb>
            <RefundPolicyComponent></RefundPolicyComponent>
        </>
     );
}

