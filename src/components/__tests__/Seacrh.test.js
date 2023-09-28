import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body comp with search btn and filter by search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", {name: "Search"});
  const searchInput = screen.getByTestId("searchInput");
  //console.log(searchInput)
  fireEvent.change(searchInput, {
      target: {
          value: "Pizza"
      }
  });

  fireEvent.click(searchBtn);

  expect(searchBtn).toBeInTheDocument();
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});

it("Should render the body comp with search btn and filter by top rated", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name: "Top rated restaurants"})
    //console.log(searchInput)
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(5);
  });
