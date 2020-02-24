import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PlaceForm } from "./PlaceForm";
import { PlaceInput } from "./types/placeInput";

describe("Home component", () => {
  configure({ adapter: new Adapter() });
  let component: ShallowWrapper;
  const inputs: PlaceInput = {
    name: "",
    description: "",
    address: ""
  };

  beforeEach(() => {
    component = shallow(<PlaceForm />);
  });

  it("Renders a cancel button", () => {
    const cancelButton = component.find(".cancel");
    expect(cancelButton.text()).toEqual("Cancel");
  });

  it("Renders a submit button", () => {
    const submitButton = component.find("[type='submit']");
    expect(submitButton.text()).toEqual("Submit");
  });

  it("Renders an input field for each place input", () => {
    const inputFields = component.find("input");
    expect(inputFields).toHaveLength(Object.values(inputs).length);

    for (const input of Object.keys(inputs)) {
      expect(component.find(`[name="${input}"]`)).toHaveLength(1);
    }
  });
});
