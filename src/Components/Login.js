import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

export default function Login() {
  const Login_Submit = () => {
    console.log("Login is Clicked");
    console.log(email);
    console.log(pass);
    var yes = document.getElementById("term1");
    if (yes.checked == true) {
      // console.log("Login Successfully")
    } else {
      alert("Please check the checkbox");
    }
    if (email.length == 0 && pass.length == 0) {
      alert("Please Enter Email & Password");
    } else {
      if (pass.length == 0) {
        alert("Please Enter the Password");
      } else if (email.length == 0) {
        alert("Please Enter the Email");
      }
    }

    if (
      (email == "demo@gmail.com" && pass == "12345") ||
      (email == "samcom@gmail.com" && pass == "123") ||
      (email == "samcomtechnobrains@gmail.com" && pass == "sam123@")
    ) {
      const data = { email, pass };
      console.log(data);
      axios
        .post("http://localhost:3001/profile", data)
        .then((res) => {
          localStorage.setItem("email", data.email);
          alert("Login Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Check your Email & Password");
      localStorage.removeItem("email");
    }
  };
  const handleOnChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangePass = (event) => {
    setPass(event.target.value);
  };
  const handleOnChangeT1 = (event) => {
    var yes = document.getElementById("term1");
    if (yes.checked == true) {
      alert(
        "Terms and Conditions General Site UsageLast Revised: December 16, 2013 Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully. 1. YOUR AGREEMENT By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions. 2. PRIVACY Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices."
      );
    } else {
    }
    setTerms(event.target.value);
  };
  const [email, setEmail] = useState("demo@gmail.com");
  const [pass, setPass] = useState("");
  const [terms, setTerms] = useState("Off");
  return (
    <div>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readonly
            className="form-control-plaintext"
            id="staticEmail"
            value={email}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={pass}
            onChange={handleOnChangePass}
          />
        </div>
      </div>
      <label for="terms1" className="col-sm-2 col-form-label">
        Terms & Condition
      </label>
      <input
        type="checkbox"
        id="term1"
        name="terms1"
        value="Yes"
        onChange={handleOnChangeT1}
      />

      <div className="col-auto">
        <button
          type="submit"
          onClick={Login_Submit}
          className="btn btn-secondary"
        >
          <Link to="/"> Login</Link>
        </button>
      </div>
    </div>
  );
}
