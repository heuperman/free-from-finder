import React from "react";
import { Place } from "./types/place";

interface PlacesProps {
  places: Place[];
}

export const Places: React.FC<PlacesProps> = (
  props: PlacesProps
): JSX.Element => {
  const places = props.places.map(place => (
    <div key={place.id} className="place">
      <h2 className="name">{place.name}</h2>
      <p>{place.description}</p>
      <p>{place.address}</p>
    </div>
  ));
  return <div>{places}</div>;
};
