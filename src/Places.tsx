import React, { useEffect, useState } from "react";
import { Place } from "./interfaces/place";
import { database } from "./Firebase";
import { Card } from "./components/card";
import { RouteComponentProps } from "@reach/router";

export const Places = (props: RouteComponentProps): JSX.Element => {
  const [places, setPlaces] = useState<Place[]>([]);
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
  ) : (
    <h2>Loading...</h2>
  );
};
