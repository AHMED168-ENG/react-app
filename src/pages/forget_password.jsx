import Breadcrumb from "../components/breadcrumb";
import ForgetPasswordComponent from "../components/forget_password/forget_password";
import HelmetComponent from "../components/helmet";



export default function ForgetPasswordPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="forget password"></HelmetComponent>
            <Breadcrumb title="forget password"></Breadcrumb>
            <ForgetPasswordComponent></ForgetPasswordComponent>
        </>
     );
}

