import "../../scss/dashboard/loading.scss"
import { RiLoader2Fill } from "react-icons/ri";

function DashboardLoading () {
    return ( 
        <div className="loading">
            <RiLoader2Fill></RiLoader2Fill>
        </div>
     );
}

export default DashboardLoading;