import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import RESTSection from ".";

const config: SignalType = { signal: "", border: "", color: "", icon: "" };

test("render navigation banner", () => {
  render(
    <Router>
      <RESTSection currency={"BTCBRL"} config={config} />
    </Router>
  );
  const text1 = screen.getByText(/short term/i);
  const text2 = screen.getByText(/medium term/i);
  const text3 = screen.getByText(/long term/i);

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();
});
