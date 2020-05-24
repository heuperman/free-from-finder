import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { PlaceForm } from "./PlaceForm";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { PlacesList } from "./PlacesList";
import { auth, uiConfig } from "./Firebase";

export const Home = (): JSX.Element => {
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
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  ) : signedInState === "signedIn" ? (
    <div>
      <Router>
        <PlacesList path="/"></PlacesList>
        <PlaceForm path="/places/new"></PlaceForm>
      </Router>
      <button
        className="muted-button"
        onClick={(): Promise<void> => auth.signOut()}
      >
        Sign-out
      </button>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};
