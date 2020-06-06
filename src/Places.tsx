import React, { useEffect, useState } from "react";
import { Place } from "./interfaces/place";
import { database } from "./Firebase";
import { Card } from "./components/card";
import { RouteComponentProps } from "@reach/router";

export const Places = (props: RouteComponentProps): JSX.Element => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [position, setPosition] = useState<Position>();
  const [positionError, setPositionError] = useState<PositionError>();

  const getPosition = (): void => {
    navigator.geolocation.getCurrentPosition(setPosition, setPositionError, {
      timeout: 5000
    });
  };

  useEffect(() => {
    if (position) {
      sessionStorage.setItem(
        "position",
        JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      );
    }
  }, [position]);

  useEffect(() => {
    const storedPosition = sessionStorage.getItem("position");
    if (storedPosition) {
      const { latitude, longitude } = JSON.parse(storedPosition);
      setPosition({
        coords: {
          latitude,
          longitude,
          accuracy: null,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
        },
        timestamp: null
      });
    } else {
      getPosition();
    }
  }, []);

  useEffect(() => {
    database
      .collection("places")
      .limit(10)
      .get()
      .then(result => {
        const fetchedPlaces: Place[] = [];
        result.docs.forEach(doc => {
          fetchedPlaces.push({ ...doc.data(), id: doc.id } as Place);
        });
        setPlaces(fetchedPlaces);
      });
  }, []);

  const placeCards = places.map(place => (
    <Card
      title={place.name}
      link={`https://www.google.co.uk/maps/search/?api=1&query=${place.name}, ${place.address}`}
      linkText={place.address}
      content={place.description}
      key={place.id}
    />
  ));

  return places.length ? (
    <div className="card-container">{placeCards}</div>
  ) : positionError ? (
    <h2 className="error-message">
      Please allow location access to see nearby places
    </h2>
  ) : (
    <h2>Loading...</h2>
  );
};
