import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppContext } from "../ContextProvider/ContextProvider";

// Private route. Check if user is logged in. If is, render given Component. If not, redirects to login page
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAppContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};
