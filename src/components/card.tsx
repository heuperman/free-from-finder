import React from "react";
import "./card.css";

interface CardProps {
  title: string;
  link: string;
  linkText: string;
  content: string;
}

export const Card = ({
  title,
  link,
  linkText,
  content
}: CardProps): JSX.Element => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <div className="card-link">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};
