import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  test("renders the application title", () => {
    render(<Header />);

    expect(
      screen.getByText(/Personal Project Showcase/i)
    ).toBeInTheDocument();
  });
});