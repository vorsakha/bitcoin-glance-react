// import { BrowserRouter as Router } from "react-router-dom";
import {
  render,
  screen,
  // waitForElementToBeRemoved,
} from "@testing-library/react";
import WebsocketSection from ".";

describe("Websocket Section", () => {
  beforeEach(() => {
    render(<WebsocketSection currency="brl" />);
  });

  test("should show spinner at render time", () => {
    const loading = screen.getByRole(/alert/i);

    expect(loading).toBeInTheDocument();
  });

  // test("should wait for spinner to remove from dom", async () => {
  //   const spinner = await screen.findByRole(/alert/i);

  //   await waitForElementToBeRemoved(spinner);
  // });

  test("should show price after waiting", async () => {
    const price = await screen.findByTestId(/price/i);

    expect(price).toBeInTheDocument();
  });
});
