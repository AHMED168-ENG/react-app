import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";
import LoginComponent from "../components/login/form";



export default function LoginPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="login"></HelmetComponent>
            <Breadcrumb title="login"></Breadcrumb>
            <LoginComponent></LoginComponent>
        </>
     );
}

