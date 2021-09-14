import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from ".";

test("render header", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const title = screen.getByText(/bitcoin glance/i);
  const subTitle = screen.getByText(/Quickly glance at the Bitcoin market/i);

  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
});
