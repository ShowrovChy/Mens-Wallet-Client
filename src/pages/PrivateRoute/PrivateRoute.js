import React from "react";
import { Redirect, Route } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import useAuth from "../../hooks/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  window.scroll(0, 0);
  if (isLoading) {
    return (
      <p className="text-center text-warning m-5 p-5 bg-dark d-flex align-items-center justify-content-center rounded-2">
        <h1 className="d-inline-block ">Loading...</h1>
        <Spinner
          as="span"
          animation="border"
          size="lg"
          role="status"
          aria-hidden="true"
        />
      </p>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
