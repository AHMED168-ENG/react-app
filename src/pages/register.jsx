import Breadcrumb from "../components/breadcrumb";
import HelmetComponent from "../components/helmet";
import RegisterComponent from "../components/register/register";



export default function RegisterPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="register"></HelmetComponent>
            <Breadcrumb title="register"></Breadcrumb>
            <RegisterComponent></RegisterComponent>
        </>
     );
}

