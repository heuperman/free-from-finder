import React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import { Home } from "./Home";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("Home component", () => {
  configure({ adapter: new Adapter() });
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it("Renders the app title", () => {
    const title = component.find("h1");
    expect(title.text()).toEqual("Free From Finder");
  });

  it("Renders a button", () => {
    const button = component.find("button");
    expect(button.text()).toEqual("Find places near me");
  });
});
