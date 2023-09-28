import { render, screen} from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us test case", ()=>{
    test("Should load contact us page", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us page", ()=>{
        render(<Contact/>);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load name input inside contact us page", ()=>{
        render(<Contact/>);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });
    
    test("Should load two input boxes inside contact us page", ()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        //console.log(inputBoxes); // virtual DOM react element
        expect(inputBoxes[0]).toBeInTheDocument();
        expect(inputBoxes.length).toBe(2);
    });
})



