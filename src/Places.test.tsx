import React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Places } from "./Places";
import { testPlaces } from "./test-places";

describe("Home component", () => {
  configure({ adapter: new Adapter() });
  let component: ShallowWrapper;
  let places: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Places places={testPlaces} />);
    places = component.find(".place");
  });

  it("Renders an item for every place", () => {
    expect(places).toHaveLength(testPlaces.length);
  });

  it("Renders the place name", () => {
    places.forEach((place, index) => {
      expect(place.find("h2").text()).toEqual(testPlaces[index].name);
    });
  });

  it("Renders the description", () => {
    places.forEach((place, index) => {
      expect(
        place
          .find("p")
          .first()
          .text()
      ).toEqual(testPlaces[index].description);
    });
  });

  it("Renders the address", () => {
    places.forEach((place, index) => {
      expect(
        place
          .find("p")
          .last()
          .text()
      ).toEqual(testPlaces[index].address);
    });
  });
});
