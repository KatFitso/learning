import { fireEvent, render, screen } from "@testing-library/react";
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

it("textarea that changes", () => {
  const textarea = appContainer.querySelector("textarea");
  fireEvent.change(textarea, { target: { value: "qweqwe" } });
  expect(textarea.innerHTML).toBe("qweqwe");
  fireEvent.submit(textarea);
  expect(textarea.innerHTML).toBe("");
});
