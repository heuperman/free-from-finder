import React from "react";
import { render } from "react-dom";
import { Home } from "./Home";
import "./app.css";
import { Header } from "./components/header";
import { Router, Location, LocationContext } from "@reach/router";
import { Places } from "./Places";
import { ProtectedRoute } from "./components/protectedRoute";
import { PlaceForm } from "./PlaceForm";
import { Footer } from "./components/footer";

render(
  <div className="app">
    <Header></Header>
    <Router className="router">
      <Home path="/" />
      <Places path="/places" />
      <ProtectedRoute component={<PlaceForm />} path="/places/new" />
    </Router>
    <Location>
      {(locationContext: LocationContext): JSX.Element => {
        return (
          locationContext.location.pathname !== "/places/new" && (
            <Footer></Footer>
          )
        );
      }}
    </Location>
  </div>,
  document.getElementById("root")
);
