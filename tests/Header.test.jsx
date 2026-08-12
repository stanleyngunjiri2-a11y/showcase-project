import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

test("renders the header", () => {
  render(<Header />);


  
  expect(screen.getByText("Personal Project Showcase")).toBeInTheDocument();
});