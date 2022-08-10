import React, { useState } from "react";
import amazonLogo2 from "../imgs/amazonLogo2.png";
import "./Login.css";
import { Link , useHistory } from "react-router-dom";
import { auth } from '../firebase'

export const Regestration = () => {
  const History = useHistory()

  const [UserInfo, setUserInfo] = useState({
    Name: "",
    Mno: "",
    Email: "",
    Password: "",
  });

  let key, value;
  const handleInput = (e) => {
    key = e.target.name;
    value = e.target.value;

    setUserInfo({ ...UserInfo, [key]: value });
  };

  const regester = async (e) => {
    e.preventDefault();
    try {

      const userCreate = await auth.createUserWithEmailAndPassword(UserInfo.Email, UserInfo.Password);

      if (userCreate) {
        History.push("/login")
      }
      
    } catch (error) {
      alert(error.message)
    }



  };

  return (
    <div className="login_page">
      <Link to="/">
        <img src={amazonLogo2} alt="" className="Logo" />
      </Link>
      <div className="login_box">
        <h1>Create Account</h1>
        <form method="post">
          <span>Your name</span>
          <input
            type="text"
            value={UserInfo.Name}
            name="Name"
            onChange={handleInput}
          />

          <span>Mobile number</span>
          <input
            type="text"
            name="Mno"
            value={UserInfo.Mno}
            onChange={handleInput}
            placeholder="Mobile number"
          />

          <span>Email</span>
          <input
            type="text"
            name="Email"
            value={UserInfo.Email}
            onChange={handleInput}
          />

          <span>Enter password</span>
          <input
            type="password"
            name="Password"
            value={UserInfo.Password}
            onChange={handleInput}
            placeholder="At least 6 charactors"
          />

          <button type="submit" className="btn_signin" onClick={regester}>
            Continue
          </button>
        </form>

        <small>
          By continuing, you agree to Amazon's{" "}
          <Link to="/login">Conditions of Use</Link> and{" "}
          <Link to="/login">Privacy Notice.</Link>
        </small>

        <div className="login_box-3">
          <div className="login_box_3_row"></div>
              </div>
              
        <small>
          Already have an account ? <Link to="/login">Click here</Link>
        </small>
      </div>

      <div className="login_box-3">
        <div className="login_box_3_row">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>help</p>
        </div>
        <small>&copy; 1996-2021, AmazonClone.com Inc. or it's Affiliates</small>
      </div>
    </div>
  );
};
