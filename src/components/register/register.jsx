

import "../../scss/register/register.scss"

function RegisterComponent(props) {
    return <>
        <div className="register position-relative">
            <div className="container-xxl">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="form">
                        <h4 className="text-capitalize text-center mb-3">create account</h4>
                        <form action="">
                            <div className="input">
                                <input type="text" placeholder="first name" />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="last name" />
                            </div>
                            <div className="input">
                                <input type="email" placeholder="email" />
                            </div>
                            <div className="input">
                                <input type="password" placeholder="password" />
                            </div>
                            <div className="buttons flex-column flex-md-row row-gap-0 d-flex align-items-center justify-content-center gap-3">
                                <button className="text-capitalize color-white">create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default RegisterComponent;