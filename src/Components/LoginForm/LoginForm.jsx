import React from "react";
import './LoginForm.css';
import { FaLock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginForm = ({ email, setEmail, password, setPassword,remember,setRemember}) =>{
    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }

    function changeRemember(event) {
        setRemember(event.target.value);
    } 

    return(
        <div className="wrapper">
            <form className="form-box">
                <h1>Login</h1>
                <div className="input-box">
                    <MdEmail className="icon"/>
                    <input type="email" placeholder="Email" value={email} onChange={changeEmail} required/>                   
                </div>
                <div className="input-box">
                    <FaLock className="icon"/>
                    <input type="password" placeholder="Password" value={password} onChange={changePassword} required/> 
                </div> 
                <div className="remember">                   
                    <label><input type="checkbox" checked={remember}  onChange={changeRemember}/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>  
                <button type="submit" className="button-login">Login</button>  
                <div className="register-link">
                    <p>Don't have an account?  <a href="#">Register</a></p>
                </div>           
            </form>
        </div>
    )
}

export default LoginForm;