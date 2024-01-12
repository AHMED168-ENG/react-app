import Breadcrumb from "../../components/breadcrumb";
import HelmetComponent from "../../components/helmet";
import TermsConditionComponent from "../../components/policy/terms_condition";



export default function TermsConditionPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="terms condition"></HelmetComponent>
            <Breadcrumb title="terms condition"></Breadcrumb>
            <TermsConditionComponent></TermsConditionComponent>
        </>
     );
}

