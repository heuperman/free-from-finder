import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  muted?: boolean;
  accent?: boolean;
}

export const Button = ({
  text,
  onClick,
  type,
  muted,
  accent
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button${muted ? " muted" : accent ? " accent" : ""}`}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </button>
  );
};
