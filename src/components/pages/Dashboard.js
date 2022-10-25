import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";
import "./Dashboard.css";
import "firebase/auth";
import "firebase/database";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";

function handleLogout() {
  localStorage.clear();
  let cookies = new Cookies();
  cookies.remove("refreshToken");
}

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <Link to="/" onClick={handleLogout}>
            <li className="PopUpAccountMenuDivbtn">Logout</li>
          </Link>
       </div>
     </div>
  );
}
export default Dashboard;
