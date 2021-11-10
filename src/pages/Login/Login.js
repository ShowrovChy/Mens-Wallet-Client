import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
// import google from "../../images/icon/google.png";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
  const {
    handleUserGoogleLogIn,
    setUser,
    setError,
    handleUserSignInWithEmail,
    error,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  // Handle User Login With Google and Redirect

  const handleGoogleSignIn = () => {
    handleUserGoogleLogIn(location, history)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  /*
  // Get and Set User Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Get and Set User Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle User Login With Email and Password
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    handleUserSignInWithEmail(email, password)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  }; */

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

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
        {/* <Form
          onSubmit={handleLoginWithEmail}
          className="form-container mx-auto mt-5"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={handleEmail}
              className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
            <Form.Control
              onBlur={handlePassword}
              className="loginInput border-top-0  border-end-0 border-start-0 rounded-0"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button
            className="loginBtn mt-4 text-white border-0"
            // variant="warning"
            type="submit"
          >
            Log in
          </Button>
          <hr />
          <p>
            New here?
            <Link to="/signup" className="ms-2">
              {" "}
              Sign up
            </Link>
          </p>
        </Form> */}
        <div>
          <h5 className="orStyle text-center">or continue with</h5>
          <div className="text-center mt-1">
            <Button
              onClick={handleGoogleSignIn}
              className="bg-primary border-0 mx-1  link-btn"
            >
              Google log in
            </Button>

            <p className="text-danger my-3"> {error}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
