import { render, screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import MOCK_DATA_VEG_LABEL from "../mocks/resCardMockVegLabel.json"
import "@testing-library/jest-dom";
import {withVegNonVegLabelRestaurantCard} from "../RestaurantCard"

it("should render RestaurantCard comp with props data", ()=>{
    //console.log(MOCK_DATA)
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Superman Momos");

    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard comp with withVegNonVegLabelRestaurantCard label", ()=>{
    const RestaurantCardVegNonVeg =
    withVegNonVegLabelRestaurantCard(RestaurantCard);

    render(<RestaurantCardVegNonVeg resData={MOCK_DATA_VEG_LABEL}/>);
    const vegLabel = screen.getByText("Vegetarian");
    expect(vegLabel).toBeInTheDocument();
})