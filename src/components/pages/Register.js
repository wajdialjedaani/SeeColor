import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./Register.css";
import { get } from "firebase/database";
import Home from "./Home.js";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    createUserWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate.replace("/dashboard");
  }, [user, loading]);
  return (
    <div id="RegistrationPageSignInFormDiv">
          <h2>SIGN UP</h2>
          <form onSubmit={Home.handleSignUpSubmit} id="SignInForm">
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={Home.handleEmailChange}
              onBlur={Home.validateEmail}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={Home.handlePasswordChange}
              onBlur={Home.validateConfirmPassword}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              value={Home.confirmPassword}
              onChange={Home.handleConfirmPasswordChange}
              onBlur={Home.validateConfirmPassword}
            />
            <div id="LoginBtnsSection">
              <input
                type="submit"
                value="Sign Up"
                className="PopUpAccountMenuDivbtn"
              />
              <button
                id="SignInWithGooglebtn"
                onClick={Home.handleLoginWithGoogleSubmit}
              >
                Sign Up with Google
              </button>
            </div>
          </form>
        </div>
  );
}
export default Register;