import { render, screen } from "@testing-library/react";
// import App from "../App";
import CommentBox from "../CommentBox";

it("has text", () => {
  const { container } = render(<CommentBox />);
  expect(container.firstChild.innerHTML).toContain("CommentBox");
});
