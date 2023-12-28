import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";
import LoginComponent from "../components/login/form";



export default function LoginPage () {
    return ( 
        <>
            <HelmetComponent title="login"></HelmetComponent>
            <Breadcrumb title="login"></Breadcrumb>
            <LoginComponent></LoginComponent>
        </>
     );
}

