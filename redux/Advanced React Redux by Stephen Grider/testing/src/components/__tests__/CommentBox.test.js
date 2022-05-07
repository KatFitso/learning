import { fireEvent, render, screen } from "@testing-library/react";
// import App from "../App";
import CommentBox from "../CommentBox";

let appContainer;

//beforeEach will run before every test even those inside of describes
//@testing-library has an auto mount / unmount
beforeEach(() => {
  const { container } = render(<CommentBox />);
  appContainer = container;
});

it("comment box renders", () => {
  expect(appContainer.firstChild.innerHTML).toContain("CommentBox");
});

it("has a text area and a button", () => {
  expect(appContainer.querySelector("textarea")).toBeVisible();
  expect(appContainer.querySelector("button")).toBeVisible();
});

//describe groups tests and lets you run a local before each that doesnt effect the rest of the tests
describe("text area", () => {
  let textarea;
  beforeEach(() => {
    textarea = appContainer.querySelector("textarea");
    fireEvent.change(textarea, { target: { value: "qweqwe" } });
  });
  it("has a textarea that changes", () => {
    expect(textarea.value).toBe("qweqwe");
  });

  it("clears text area on submit", () => {
    fireEvent.submit(textarea);
    expect(textarea.value).toBe("");
  });
});
