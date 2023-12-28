import Breadcrumb from "../../components/breadcrumb";
import HelmetComponent from "../../components/helmet";
import PrivacyPolicyComponent from "../../components/policy/privacy_policy";



export default function PrivacyPolicyPage () {
    return ( 
        <>
            <HelmetComponent title="privacy policy"></HelmetComponent>
            <Breadcrumb title="privacy policy"></Breadcrumb>
            <PrivacyPolicyComponent></PrivacyPolicyComponent>
        </>
     );
}

