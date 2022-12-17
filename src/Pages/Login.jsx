import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
  const [login,setLogin] = useState([]);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(emailRef.current.value, passwordRef.current.value);
    // const obj = {
    //     email:emailRef.current.value,
    //     password:passwordRef.current.value,
    // }
    axios.post("https://reqres.in/api/login",{
        email:emailRef.current.value,
        password:passwordRef.current.value
    }).then(res=>setLogin(res.data.token));
    if(login){
      navigate("/home")
    }
  };

  return (
    <div className="form"> 
        <div className="segment">
          <h1>Login Here To See The Data</h1>
        </div> 
        <label>
          <input type="email" ref={emailRef} placeholder="Email Address"/>
        </label>
        <label>
          <input type="password" ref={passwordRef} placeholder="Password"/>
        </label>
        <button onClick={handleClick} className="red" type="button"><i className="icon ion-md-lock"></i> Log in</button>
    </div>
  );
}

export default Login;
