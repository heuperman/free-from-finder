import React, { FormEvent, ChangeEvent } from "react";
import "./form.css";
import { Button } from "./button";
import { PlaceInput } from "../interfaces/placeInput";

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  input: PlaceInput;
  formFields: Array<{
    label: string;
    name: keyof PlaceInput;
    type: string;
    required: boolean;
  }>;
}

export const Form = ({
  onSubmit,
  onCancel,
  onChange,
  input,
  formFields
}: FormProps): JSX.Element => {
  const formFieldElements = formFields.map(field => (
    <label className="label" key={field.name}>
      {field.label}
      <input
        className="input"
        name={field.name}
        type={field.type}
        value={input[field.name]}
        onChange={onChange}
        required
      ></input>
    </label>
  ));

  return (
    <form onSubmit={onSubmit} className="form">
      {formFieldElements}
      <Button muted type="reset" text="Cancel" onClick={onCancel} />
      <Button type="submit" text="Submit" />
    </form>
  );
};
