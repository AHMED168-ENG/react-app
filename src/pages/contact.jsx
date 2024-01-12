import Breadcrumb from "../components/breadcrumb";
import ContactComponent from "../components/contact/contact";
import MapComponent from "../components/contact/map";
import HelmetComponent from "../components/helmet";

export default function Contact () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="contact us"></HelmetComponent>
            <Breadcrumb title="contact us"></Breadcrumb>
            <MapComponent></MapComponent>
            <ContactComponent></ContactComponent>
        </>
     );
}
