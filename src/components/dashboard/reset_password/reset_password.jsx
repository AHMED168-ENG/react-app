
import "../../../scss/dashboard/reset_password/reset_password.scss"

function DashboardResetPasswordComponent() {
    return ( 
        <div className="dashboard-reset_password">
            <div className="form p-4 mx-auto">
                <h4 className="text-capitalize text-center">reset password</h4>
                <p className="text-center">reset password to your account to continue</p>
                <form action="">
                    <div className="input">
                        <input type="text" className="form-control" placeholder="enter email"/>
                    </div>
                    <div className="input">
                        <input type="password" className="form-control" placeholder="new password"/>
                    </div>
                    <div className="input">
                        <input type="password" className="form-control" placeholder="old password"/>
                    </div>
                    <button>send link</button>
                </form>
            </div>
        </div>
     );
}

export default DashboardResetPasswordComponent;