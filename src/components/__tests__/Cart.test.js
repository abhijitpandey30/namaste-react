import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_RES_MENU from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_MENU);
    },
  });
});

it("Should load RestauratMenu comp", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />

          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = await screen.findByText("Biryanis (4)");
  //console.log(accordianHeader);
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("food-items");
  expect(foodItems.length).toBe(4);

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  console.log(addBtns.length);
  expect(screen.getByText("Cart 0 items")).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart 1 items")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart 2 items")).toBeInTheDocument();


  expect((screen.getAllByTestId("food-items")).length).toBe(6);

  fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}));
  expect((screen.getAllByTestId("food-items")).length).toBe(4);

  expect(screen.getByText("Cart is empty. Add items to the cart!")).toBeInTheDocument();
});
