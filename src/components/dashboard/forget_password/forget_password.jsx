
import "../../../scss/dashboard/forget_password/forget-password.scss"

function DashboardforgetPasswordComponent() {
    return ( 
        <div className="dashboard-forget-password">
            <div className="form p-4 mx-auto">
                <h4 className="text-capitalize text-center">forget password</h4>
                <p className="text-center">please enter your registration email to get reset password mail</p>
                <form action="">
                    <div className="input">
                        <input type="password" className="form-control" placeholder="enter password"/>
                    </div>
                    <button>send link</button>
                </form>
            </div>
        </div>
     );
}

export default DashboardforgetPasswordComponent;