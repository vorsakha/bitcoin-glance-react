import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("render navigation banner", () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );
  const button1 = screen.getByText(/usd/i);
  const button2 = screen.getByText(/brl/i);

  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
});
