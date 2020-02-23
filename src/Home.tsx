import React, { useState } from "react";

export const Home = (): JSX.Element => {
  const [position, setPosition] = useState<Position>();
  const [positionError, setPositionError] = useState<PositionError>();

  const onLocationSucces = (currentPosition: Position): void => {
    setPosition(currentPosition);
  };

  const onLocationError = (error: PositionError): void => {
    setPositionError(error);
  };

  const getPosition = (): void => {
    navigator.geolocation.getCurrentPosition(
      onLocationSucces,
      onLocationError,
      { timeout: 5000 }
    );
  };

  return (
    <div className="center-text">
      <h1>Free From Finder</h1>
      <button onClick={getPosition}>Find places near me</button>
      {positionError && (
        <h2 className="error-message">
          Please allow location access to see nearby places
        </h2>
      )}
    </div>
  );
};
