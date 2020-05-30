import React from "react";
import { Router } from "@reach/router";
import { PlaceForm } from "./PlaceForm";
import { PlacesList } from "./PlacesList";
import { auth } from "./Firebase";
import { Button } from "./components/button";
import { ProtectedRoute } from "./components/protectedRoute";

export const Home = (): JSX.Element => {
  return (
    <div>
      <Button
        muted
        text="Sign out"
        onClick={(): Promise<void> => auth.signOut()}
      />
      <Router>
        <PlacesList path="/" />
        <ProtectedRoute component={<PlaceForm />} path="/places/new" />
      </Router>
    </div>
  );
};
