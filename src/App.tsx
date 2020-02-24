import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { Home } from "./Home";
import { Router } from "@reach/router";
import { PlaceForm } from "./PlaceForm";

render(
  <Router>
    <Home path="/" />
    <PlaceForm path="place/new" />
  </Router>,
  document.getElementById("root")
);
