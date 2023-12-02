import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RastaurantCards";
import MOCK_DATA from "../mocks/rescardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with props data", () => {
  render(<RestaurantCard resdata={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});
