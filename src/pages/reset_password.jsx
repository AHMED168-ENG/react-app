import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";
import ResetPasswordComponent from "../components/reset-password/reset_password";



export default function ResetPasswordPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="reset password"></HelmetComponent>
            <Breadcrumb title="reset password"></Breadcrumb>
            <ResetPasswordComponent></ResetPasswordComponent>
        </>
     );
}

