import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { PlaceInput } from "./types/placeInput";

export const PlaceForm = (props: RouteComponentProps): JSX.Element => {
  const defaultFormState: PlaceInput = {
    name: "",
    description: "",
    address: ""
  };

  const [input, setInput] = useState(defaultFormState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const inputs = Object.keys(input).map((key: keyof PlaceInput) => (
    <label key={key}>
      {key[0].toUpperCase() + key.substring(1)}:
      <input
        name={key}
        type="string"
        value={input[key]}
        onChange={handleInputChange}
        required
      />
    </label>
  ));

  return (
    <form
      onSubmit={(event: FormEvent): void => {
        event.preventDefault();
        console.log(`Name: ${input.name} - details ${input.description}`);
      }}
    >
      {inputs}
      <div className="button-container">
        <Link to="/" className="form-button">
          <button className="cancel">Cancel</button>
        </Link>
        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
    </form>
  );
};
