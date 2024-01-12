import { Link } from "react-router-dom";
import "../scss/breadcrumb.scss"

function Breadcrumb (props) {
    const {title} = props
    return ( 
        <>
            <div className="breadcrumb m-0">
                <div className="container-xxl">
                    <p className="d-flex align-items-center justify-content-center py-md-4 py-3 m-0 gap-2"> 
                        <Link to="/" className="text-capitalize">home</Link> 
                        <span>/</span> 
                        <span>{title}</span>
                    </p>
                </div>
            </div>
        </>
     );
}

export default Breadcrumb ;