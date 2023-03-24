import { CartProvider } from "core/contexts";
import render from "testUtils/render";
import TshirtPage from ".";
import { screen, waitFor } from "@testing-library/react";
import { createTshirt } from "testUtils/fixtures";

describe("TshirtPage", () => {
  test.todo("should display a circular progress while loading data");

  test("should display a tshirt card with the loaded data and a add to cart button", async () => {
    const tshirt = createTshirt();
    render(<TshirtPage />, {
      path: `/tshirts/:tshirtId`,
      initialEntries: [`/tshirts/${tshirt.id}`],
      wrapper: CartProvider,
    });

    await waitFor(() =>
      screen.findByRole("heading", { name: tshirt.name, level: 5 })
    );

    expect(
      screen.getByRole("button", { name: "Add to cart" })
    ).toBeInTheDocument();
  });
});
