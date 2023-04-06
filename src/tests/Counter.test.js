import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counterElement = screen.getByRole("heading", { name: /counter/i });
  expect(counterElement).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const countElement = screen.getByText(/0/i);
  expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  const incrementButton = screen.getByRole("button", { name: "+" });
  const countElement = screen.getByText("0");

  fireEvent.click(incrementButton);
  expect(screen.getByText("1")).toBeInTheDocument();
});

test("clicking - decrements the count", () => {
  const decrementButton = screen.getByRole("button", { name: "-" });
  const countElement = screen.getByText("0");

  fireEvent.click(decrementButton);
  expect(screen.getByText("-1")).toBeInTheDocument();
});
