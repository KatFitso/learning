import { render, screen } from "@testing-library/react";
// import App from "../App";
import CommentBox from "../CommentBox";

let appContainer;

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
