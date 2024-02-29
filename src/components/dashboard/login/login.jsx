
import { Link, useNavigate } from "react-router-dom";
import "../../../scss/dashboard/login/login.scss"
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../../store/reducers/auth/auth_server";
import { useState , useEffect } from "react";

function DashboardLoginComponent() {
    const errorsValidation = useSelector(state => state.auth.errors)
    const isError = useSelector(state => state.auth.isError)
    const errorMessage = useSelector(state => state.auth.message)
    const isSuccess = useSelector(state => state.auth.isSuccess)
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigation = useNavigate()
    const dispatch = useDispatch()
    function login(e) {
        e.preventDefault();
        dispatch(AuthLogin({email , password}))
    }
    
    useEffect(() => {
        if(isError) {
            window.Toast.fire({
                icon: "error",
                title: errorMessage,
            });
        }
        if(isSuccess) {
            window.Toast.fire({
                icon: "success",
                title: "login successful !",
              });
            navigation("/dashboard")
        }
    });
    return ( 
        <div className="dashboard-login">
            <div className="form p-4 mx-auto">
                <h4 className="text-capitalize text-center">login</h4>      
                <p className="text-center">login to your account to continue</p>
                <form action="">
                    <div className="input">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="enter email"/>
                        {errorsValidation.email ? <small className="text-danger">{errorsValidation.email[0].msg}</small> : ""}
                    </div>
                    <div className="input">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="enter password"/>
                        {errorsValidation.password ? <small className="text-danger">{errorsValidation.password[0].msg}</small> : ""}
                    </div>
                    <Link className="forget-password-button text-right d-block my-3 text-decoration-underline" to="/dashboard/forget-password">forget password ?</Link>
                    <button onClick={login} className="login" to="/dashboard">Login</button>
                </form>
            </div>
        </div>
     );
}

export default DashboardLoginComponent;