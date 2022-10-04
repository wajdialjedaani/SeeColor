import React from 'react'
import '../App.css';
// import { Button } from './Button';
import './SigninPage.css';


function SigninSection () {
    return (
        <div className='signin-container'>
            <h1>Sign In</h1>
            <p1>Username/email:</p1>
            <p2>Password:</p2>
            {/* <form id="signinfrm" action="action_page.php">
                Username/email: <input type="text" name="uname"></input>
                Password: <input type="text" name="pname"></input>
                <input type="button" onclick="signinfunction()" value="Submit"></input>
            </form>
            <script>
                function signinfunction () {
                    document.getElementById("signinfrm").submit()
                }
            </script> */}

            {/*
            <form id ="Login_form" onsubmit="submit_form()">  
            <h4> USERNAME</h4>  
            <input type="text" placeholder="Enter your email id"/>  
            <h4> PASSWORD</h4>  
            <input type="password" placeholder="Enter your password"/></br></br>  
            <input type="submit" value="Login"/>  
            <input type="button" value="SignUp" onClick="create()"/>  */}
        </div>
      
      
    )
}

export default SigninSection;