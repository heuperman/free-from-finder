import React, { ChangeEvent, FormEvent, useState } from "react";
import { PlaceInput } from "./interfaces/placeInput";
import { database } from "./Firebase";
import { RouteComponentProps, useNavigate } from "@reach/router";
import { Form } from "./components/form";

export const PlaceForm = (props: RouteComponentProps): JSX.Element => {
  const defaultFormState: PlaceInput = {
    name: "",
    address: "",
    description: ""
  };
  const navigate = useNavigate();
  const [input, setInput] = useState(defaultFormState);

  const handleCancel = (): void => {
    navigate("../", { replace: true });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    database
      .collection("places")
      .add({
        ...input
      })
      .then(handleCancel);
  };

  const formFields = Object.keys(input).map((key: keyof PlaceInput) => ({
    label: key[0].toUpperCase() + key.substring(1),
    name: key,
    type: "text",
    required: true
  }));

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onChange={handleInputChange}
      input={input}
      formFields={formFields}
    />
  );
};
