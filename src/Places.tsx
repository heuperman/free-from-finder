import React, { useEffect, useState } from "react";
import { Place } from "./types/place";
import { database } from "./Firebase";

export const Places = (): JSX.Element => {
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
    <div className="card" key={place.id}>
      <div className="card-content">
        <h1>{place.name}</h1>
        <div className="subtitle">{place.address}</div>
        <p>{place.description}</p>
      </div>
    </div>
  ));

  return places.length ? (
    <div className="card-container">{placeCards}</div>
  ) : (
    <h2>Loading...</h2>
  );
};
