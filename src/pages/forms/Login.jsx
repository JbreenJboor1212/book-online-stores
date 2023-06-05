import { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if(email.trim() === "") return toast.error("Email is required");
    if(password.trim() === "") return toast.error("Password is required");
    
    toast("it is succeed!")

    console.log({ email, password });
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="dark" />
      <h1 className="form-title">Login to your account</h1>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account yet ?{" "}
        <Link to={"/register"} className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
