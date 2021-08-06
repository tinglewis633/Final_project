import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, cookie, ...restOfProps }) {
  if (!cookie) {
    return (
      <Route
        {...restOfProps}
        render={(props) => <Component {...restOfProps} {...props} />}
      />
    );
  }
  const isAuthenticated = cookie.cookie;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...restOfProps} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
