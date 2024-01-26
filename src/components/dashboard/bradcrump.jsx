import { Link } from "react-router-dom";
import "../../scss/dashboard/breadcrumb.scss"

function DashboardBreadcrumb (props) {
    const {title , className} = props
    return ( 
        <>
            <div className={`breadcrumb ${className}`}>
                <p className="d-flex align-items-center px-3 py-md-4 py-3 m-0 gap-2"> 
                    <Link to="/dashboard" className="text-capitalize">Dashboard</Link> 
                    <span>/</span> 
                    <span>{title}</span>
                </p>
            </div>
        </>
     );
}

export default DashboardBreadcrumb ;