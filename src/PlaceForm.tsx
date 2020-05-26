import React, { ChangeEvent, FormEvent, useState } from "react";
import { PlaceInput } from "./types/placeInput";
import { database } from "./Firebase";
import { RouteComponentProps, useNavigate } from "@reach/router";

export const PlaceForm = (props: RouteComponentProps): JSX.Element => {
  const defaultFormState: PlaceInput = {
    name: "",
    description: "",
    address: "",
  };
  const navigate = useNavigate();
  const [input, setInput] = useState(defaultFormState);

  const goBack = (): void => {
    navigate("../", { replace: true });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    database
      .collection("places")
      .add({
        ...input,
      })
      .then(goBack);
  };

  const formFields = Object.keys(input).map((key: keyof PlaceInput) => (
    <div key={key}>
      <label>
        {key[0].toUpperCase() + key.substring(1)}
        <input
          name={key}
          type="text"
          value={input[key]}
          onChange={handleInputChange}
          required
        >
        </input>
      </label>
    </div>
  ));

  return (
    <form onSubmit={handleSubmit}>
      {formFields}
      <button className="muted-button" type="reset" onClick={goBack}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};
