

import { Link } from "react-router-dom";
import "../../scss/login/login.scss"

function LoginComponent(props) {
    return <>
        <div className="Login position-relative">
            <div className="container-xxl">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="form">
                        <h4 className="text-capitalize text-center mb-3">login</h4>
                        <form action="">
                            <div className="input">
                                <input type="email" placeholder="email" />
                            </div>
                            <div className="input">
                                <input type="password" placeholder="password" />
                            </div>
                            <Link className="mb-3 d-block" to="/forget-password">forget your password</Link>
                            <div className="buttons flex-column flex-md-row row-gap-0 d-flex align-items-center justify-content-center gap-3">
                                <button className="text-capitalize color-white">login</button>
                                <Link to="/sign-up">sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default LoginComponent;