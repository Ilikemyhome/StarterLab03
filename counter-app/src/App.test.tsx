import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";


import App from "./App";
describe("Counter App", () => {
  it("displays initial state", () => {
    render(<App />);

    expect(screen.getByText("Count: 0")).toBeTruthy();
    expect(screen.getByText("Increment")).toBeTruthy();
    expect(screen.getByText("Decrement")).toBeTruthy();
    expect(screen.getByText("Reset")).toBeTruthy();
  });

  it("increments count from 0 to 1", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Increment"));

    expect(screen.getByText("Count: 1")).toBeTruthy();
  });

  it("decrements count from 0 to -1", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Decrement"));

    expect(screen.getByText("Count: -1")).toBeTruthy();
  });

  it("resets count to 0", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByText("Count: 0")).toBeTruthy();
  });

  it("performs multiple actions in sequence", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Count: 1")).toBeTruthy();

    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Count: 2")).toBeTruthy();

    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByText("Count: 1")).toBeTruthy();

    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("Count: 0")).toBeTruthy();
  });
});