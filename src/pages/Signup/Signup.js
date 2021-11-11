import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Signup.css";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const {
    handleUserRegisterWithEmail,
    error,
    setUser,
    setError,
    auth,
    UserInformation,
    userName,
    setUserName,
    updateProfile,
  } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleUserRegisterWithEmail(data.email, data.password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
        });
        setUser({
          ...result.user,
          displayName: data.name,
        });
        UserInformation(data.email, data.name);
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
      <div className="signup-main-container">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <input
            {...register("name", { required: true })}
            placeholder=" Your Name"
            className="border-0 field "
          />

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

          <input type="submit" value="Sign up" className="border-0 field" />
          <hr />
          <p>
            Already have an account?
            <Link to="/login" className="ms-2">
              {" "}
              Log in
            </Link>
          </p>
          <p className="text-danger my-2"> {error}</p>
        </form>
        {/*  <Form
          onSubmit={handleRegistration}
          className="form-container mx-auto mt-5"
        >
          <Form.Group className="mb-3 mt-4" controlId="formBasicName">
            <Form.Control
              onBlur={handleName}
              className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
              type="text"
              placeholder="Enter name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
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
            className="loginBtn text-white border-0  mt-4 mb-4"
            variant="info"
            type="submit"
          >
            Sign up
          </Button>
          <hr />
          <p>
            Already have an account?
            <Link to="/login" className="ms-2">
              {" "}
              Log in
            </Link>
          </p>
          <p className="text-danger my-2"> {error}</p>
        </Form> */}
      </div>
    </>
  );
};

export default Signup;
