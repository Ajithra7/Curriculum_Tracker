import axios from "axios";
import React, { useState } from "react";
import Signin from "./SignIn";
import SignUp from "./SignUp";


const Account = () => {
 
const [checked,setChecked] = useState("SignIn")

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked={checked ==="SignIn" && true}  onChange={(e)=>{setChecked("SignIn")}}/>
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" checked={checked==="SignUp" && true } onChange={(e)=>{setChecked("SignUp")}} />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div class="login-form">
           <Signin />
          <SignUp/>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Account;
