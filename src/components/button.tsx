import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  muted?: boolean;
  accent?: boolean;
}

export const Button = ({
  text,
  onClick,
  muted,
  accent
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button${muted ? " muted" : accent ? " accent" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
