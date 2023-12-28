

import { Link } from "react-router-dom";
import "../../scss/forget_password/forget_password.scss"

function ForgetPasswordComponent(props) {
    return <>
        <div className="forget-password position-relative">
            <div className="container-xxl">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="form">
                        <h4 className="text-capitalize text-center mb-3">reset your password</h4>
                        <p className="text-center">we will send you an email to reset your password</p>
                        <form action="">
                            <div className="input">
                                <input type="email" placeholder="email" />
                            </div>
                            <div className="buttons flex-column d-flex align-items-center justify-content-center ">
                                <button className="text-capitalize color-white">submit</button>
                                <Link to="/login" className="text-capitalize">cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ForgetPasswordComponent;