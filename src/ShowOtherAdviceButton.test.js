import React from "react";
import ShowOtherAdviceButton from "./ShowOtherAdviceButton";
import { shallow } from "enzyme";

describe("ShowOtherAdviceButton ", () => {
  it("has a button", () => {
    const ShowOtherAdviceButtonWrapper = shallow(<ShowOtherAdviceButton />);
    ShowOtherAdviceButtonWrapper.find("button");
  });
});
