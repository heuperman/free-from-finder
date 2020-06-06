import React from "react";
import "./card.css";
import { Button } from "./button";
import { auth } from "../Firebase";
import "./header.css";

export const Header = (): JSX.Element => {
  return (
    <header>
      <span className="header-title">Free From Finder</span>
      <Button
        muted
        text="Sign out"
        onClick={(): Promise<void> => auth.signOut()}
      />
    </header>
  );
};
