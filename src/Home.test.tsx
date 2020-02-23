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

  it("Requests the user's position when button is clicked", () => {
    const mockGetCurrentPosition = jest.fn();
    (global as any).navigator = {
      geolocation: {
        getCurrentPosition: mockGetCurrentPosition
      }
    };
    const button = component.find("button");
    button.simulate("click");
    expect(mockGetCurrentPosition.mock.calls).toHaveLength(1);
  });

  it("Shows an error message when getting user position fails", () => {
    const error = {} as PositionError;
    (global as any).navigator = {
      geolocation: {
        getCurrentPosition: (
          succesCallback: PositionCallback,
          errorCallback: PositionErrorCallback,
          options: PositionOptions
        ): void => errorCallback(error)
      }
    };
    const button = component.find("button");
    button.simulate("click");
    const errorMessage = component.find(".error-message");
    expect(errorMessage.text()).toEqual(
      "Please allow location access to see nearby places"
    );
  });
});
