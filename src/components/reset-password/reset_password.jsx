

import "../../scss/reset_password/reset_password.scss"

function ResetPasswordComponent(props) {
    return <>
        <div className="reset-password position-relative">
            <div className="container-xxl">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="form">
                        <h4 className="text-capitalize text-center mb-3">reset password</h4>
                        <form action="">
                            <div className="input">
                                <input type="text" placeholder="first name" />
                            </div>
                            <div className="input">
                                <input type="password" placeholder="password" />
                            </div>
                            <div className="buttons d-flex align-items-center justify-content-center gap-3">
                                <button className="text-capitalize color-white">Ok</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ResetPasswordComponent;