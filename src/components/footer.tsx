import React from "react";
import "./footer.css";
import { Link } from "@reach/router";
import { Button } from "./button";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <nav>
        <Link to="/places">
          <Button text="Find places near me" />
        </Link>
        <Link to="/places/new">
          <Button text="Add a new place" />
        </Link>
      </nav>
    </footer>
  );
};
