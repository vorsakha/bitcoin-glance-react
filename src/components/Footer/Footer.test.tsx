import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Footer from ".";

test("render navigation banner", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
  const link = screen.getByText(/about/i);
  const anchor = screen.getByText(/@vorsakha/i);

  expect(link).toBeInTheDocument();
  expect(anchor).toBeInTheDocument();
});
