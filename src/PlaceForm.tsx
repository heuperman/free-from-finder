import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, RouteComponentProps } from "@reach/router";

export const PlaceForm = (props: RouteComponentProps): JSX.Element => {
  const defaultFormState = { name: "", description: "", address: "" };

  const [input, setInput] = useState(defaultFormState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={(event: FormEvent): void => {
        event.preventDefault();
        console.log(`Name: ${input.name} - details ${input.description}`);
      }}
    >
      <label>
        Name:
        <input
          name="name"
          type="string"
          value={input.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          type="string"
          value={input.description}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          name="address"
          type="string"
          value={input.address}
          onChange={handleInputChange}
          required
        />
      </label>
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
