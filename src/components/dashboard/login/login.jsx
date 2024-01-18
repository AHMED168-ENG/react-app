
import { Link } from "react-router-dom";
import "../../../scss/dashboard/login/login.scss"

function DashboardLoginComponent() {
    return ( 
        <div className="dashboard-login">
            <div className="form p-4 mx-auto">
                <h4 className="text-capitalize text-center">login</h4>
                <p className="text-center">login to your account to continue</p>
                <form action="">
                    <div className="input">
                        <input type="text" className="form-control" placeholder="enter email"/>
                    </div>
                    <div className="input">
                        <input type="password" className="form-control" placeholder="enter password"/>
                    </div>
                    <Link to="/dashboard">Login</Link>
                </form>
            </div>
        </div>
     );
}

export default DashboardLoginComponent;