import {timesTwo} from "./functions";

//name of the test and function are the params of test
test("Multiplies by two",()=>{
  expect(timesTwo(4)).toBe(8);
})
