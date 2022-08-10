import React, { useState } from "react";
import amazonLogo2 from "../imgs/amazonLogo2.png";
import "./Login.css";
import { Link , useHistory } from "react-router-dom";
import { auth } from '../firebase';
import { useStateValue } from "../StateProvider";


export const Login = () => {
  const History = useHistory()
  const [{cart , user} , dispatch]= useStateValue()
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();
    try {
      const userSignin = await auth.signInWithEmailAndPassword(Email, Password);
      if (userSignin) {
        History.push("/")
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
        <h1>Sign-In</h1>
        <form action="" method="post">
          <span>Email or mobile phone number</span>

          <input
            type="text"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <span>Enter password</span>

          <input
            type="password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" className="btn_signin" onClick={signin}>
            Continue
          </button>
        </form>

        <small>
          By continuing, you agree to Amazon's{" "}
          <Link to="/login">Conditions of Use</Link> and{" "}
          <Link to="/login">Privacy Notice.</Link>
        </small>
      </div>

      <div className="login_box_2">
        <div className="login_box_2_text">
          <h5>New to Amazon</h5>
        </div>
        <Link to="/regester">
          <button className="btn_create_acc" type="submit">
            Create your Amazon account
          </button>
        </Link>
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
