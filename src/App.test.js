import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import fetchMock from "fetch-mock";

describe("App", () => {
  beforeEach(() => {
    fetchMock.getOnce("https://api.adviceslip.com/advice", {
      slip: { advice: "Always trust random advice." }
    });
  });

  afterEach(() => {
    fetchMock.reset();
  });

  describe("before advice fetched", () => {
    it("renders loading indicator", () => {
      const appWrapper = shallow(<App />);
      expect(appWrapper).toMatchSnapshot();
    });
  });

  describe("after advice fetched", () => {
    it("renders advice", done => {
      const appWrapper = shallow(<App />);
      setImmediate(() => {
        expect(appWrapper).toMatchSnapshot();
        done();
      });
    });
  });

  describe('when hitting "Show other advice" button', () => {
    beforeEach(() => {
      fetchMock.getOnce(
        "https://api.adviceslip.com/advice",
        { slip: { advice: "Other random advice." } },
        { overwriteRoutes: false }
      );
    });

    it("should render other advice", done => {
      const appWrapper = mount(<App />);
      appWrapper.find("button").simulate("click");
      setImmediate(() => {
        appWrapper.update();
        expect(appWrapper).toMatchSnapshot();
        done();
      });
    });
  });
});
