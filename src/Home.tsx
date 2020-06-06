import React from "react";
import { RouteComponentProps } from "@reach/router";

export const Home = (props: RouteComponentProps): JSX.Element => {
  return (
    <div className="home">
      <h2 className="welcome">Welcome to Free From Finder</h2>
    </div>
  );
};
