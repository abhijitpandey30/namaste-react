
import resList from "../../utils/mock-data";
import {sum} from "../sum"
test("Sum func should calculate the sum of two numbers", ()=>{

    const result = sum(3, 4);

    expect(result).toBe(7); // assertion
})