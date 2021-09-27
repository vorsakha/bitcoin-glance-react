import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import RESTSection from ".";
import { FcBullish as Icon } from "@react-icons/all-files/fc/FcBullish";

const config = {
  rest: {
    loading: false,
    signalObj: { signal: "", border: "", color: "", icon: Icon },
  },
};

const configLoading = {
  rest: {
    loading: true,
    signalObj: { signal: "", border: "", color: "", icon: Icon },
  },
};

describe("RESTSection", () => {
  test("should render navigation banner", () => {
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

  test("should show loading-spinner if loading is true", () => {
    render(
      <Router>
        <RESTSection currency={"BTCBRL"} config={configLoading} />
      </Router>
    );

    const loading = screen.getAllByRole("alert")[0];

    expect(loading).toBeInTheDocument();
  });
});
