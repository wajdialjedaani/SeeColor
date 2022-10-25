import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import Home  from "./Home.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div id="LoginPageSignInFormDiv">
        <h2>LOGIN</h2>
        <form onSubmit={Home.handleLoginSubmit} id="SignInForm">
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={Home.handleEmailChange}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={Home.handlePasswordChange}
          />

          <div id="LoginBtnsSection">
            <input
              type="submit"
              value="Login"
              className="PopUpAccountMenuDivbtn"
            />
            <a href="/register"
              id="SignUpBtnsSection">
              Sign Up
            </a>
          </div>
          <div className="GuestLinkContainer">
            <button
              id="SignInWithGooglebtn"
              onClick={Home.handleLoginWithGoogleSubmit}
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
  );
}
export default Login;

/*

            <a href="/register">
              <button className="PopUpAccountMenuDivbtn">Sign Up</button>
            </a>
            */