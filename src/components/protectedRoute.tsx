import { RouteComponentProps } from "@reach/router";
import React, { useState, useEffect } from "react";
import { auth, uiConfig } from "../Firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

interface ProtectedRouteProps extends RouteComponentProps {
  component: JSX.Element;
}

export const ProtectedRoute = ({
  component
}: ProtectedRouteProps): JSX.Element => {
  const [signedInState, setSingedInState] = useState<string>("unknown");
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(user =>
      setSingedInState(user ? "signedIn" : "notSignedIn")
    );
    return unregisterAuthObserver;
  }, []);

  return signedInState === "notSignedIn" ? (
    <div>
      <h1>Free From Finder</h1>
      <p>You need to be signed in to add new places:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  ) : signedInState === "signedIn" ? (
    component
  ) : (
    <h2>Loading...</h2>
  );
};
