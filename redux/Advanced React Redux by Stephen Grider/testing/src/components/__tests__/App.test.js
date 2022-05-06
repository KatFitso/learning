import { render, screen } from "@testing-library/react";
import App from "../App";
import CommentBox from "../CommentBox";

//TODO ~~~ how it works ~~~
//TODO it('name of test' , () => {thing we want to do in this test})
//* can also use 'test' instead of 'it'
//TODO expect(value to inspect).matcherStatement(expected value)

// test("shows a comment box", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/CommentBox/i);
//   expect(linkElement).toBeInTheDocument();
// });
//*alternatively 2
// test("shows a comment box", () => {
//   const { getByText } = render(<App />);
//   expect(getByText(/CommentBox/i)).toBeInTheDocument();
// });
//*alternatively 3
//* contain tests all the text in the container not just the one, you can use .firstChild for 1
// it("has commentbox text", () => {
//   const { container } = render(<App />);
//   expect(container.innerHTML).toContain("CommentBox");
// });
//*alterntively 4 all at once

let appContainer, getByTextFunc;

//before each will run before every test, before all happens once before the rest goes
beforeEach(() => {
  const { container, getByText } = render(<App />);

  appContainer = container;
  getByTextFunc = getByText;
});

it("has commentbox text", () => {
  // const { container, getByText } = render(<App />);
  expect(appContainer.innerHTML).toContain("CommentBox");
  expect(getByTextFunc(/CommentBox/i)).toBeInTheDocument();
  expect(screen.getByText(/commentbox/i)).toBeInTheDocument();
});

//TODO ~~~~~~~~~~~~~~~ above is testing playground ~~~~~~~~~~~~~~~~~~~

//still dont know how to shallow check for a component
// it("contains comment box", () => {
//   // const { container, getByText } = render(<App />);
//   const { container: container2 } = render(<CommentBox />);
//   expect(appContainer).toContain(container2);
// });

//*Here is how I figured I would check if a component is in the render */

it("has Comment Box component", () => {
  expect(appContainer.querySelector(".CommentBox")).toBeVisible();
});

it("has Comment List component", () => {
  expect(appContainer.querySelector(".CommentList")).toBeVisible();
});
