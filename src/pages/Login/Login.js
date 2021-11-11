import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";
import { useForm } from "react-hook-form";
const Login = () => {
  const { setUser, setError, handleUserSignInWithEmail, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleUserSignInWithEmail(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
    reset();
  };
  window.scroll(0, 0);
  return (
    <>
      <Header></Header>
      <div className="login-main-Container">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder=" Your Email "
            className="border-0 field"
          />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Your Password"
            className="border-0 field"
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Login" className="border-0 field" />
          <hr />
          <p>
            New here?
            <Link to="/signup" className="ms-2">
              {" "}
              Sign up
            </Link>
          </p>
          <p className="text-danger my-2"> {error}</p>
        </form>
      </div>
    </>
  );
};

export default Login;
