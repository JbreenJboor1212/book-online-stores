import { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
    if (userName.trim() === "") return toast.error("Username is required");

    toast("it is succeed!");

    console.log({ email, password, userName });
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="dark" />
      <h1 className="form-title">Create a new account</h1>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Usename"
        />
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
        <button className="form-btn">Register</button>
      </form>
      <div className="form-footer">
        Already have an account ?{" "}
        <Link to={"/login"} className="form-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
