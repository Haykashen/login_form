import React from "react";
import './LoginForm.css';
import { FaLock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginForm = () =>{
    return(
        <div className="wrapper">
            <form className="form-box">
                <h1>Login</h1>
                <div className="input-box">
                    <MdEmail className="icon"/>
                    <input type="email" placeholder="Email" required/>
                    
                </div>
                <div className="input-box">
                    <FaLock className="icon"/>
                    <input type="password" placeholder="Password" required/> 
                </div> 
                <div className="remember">                   
                    <label><input type="checkbox"/>Remember me</label>
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