import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders app page text correctly", () => {
  render(<App />);
  const div = document.getElementById("testing");
  expect(div.innerHTML).toContain("App Page");
});
