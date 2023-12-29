const addition = require("../calc"); //import function we are testing from calc.js file

describe("Calculator", () => { //top level parent describe

    describe("Addition function", () =>{ //child describe
        test("Should return 42 for 20 + 22", () =>{ //test function and test description
            expect(addition(20, 22)).toBe(42) //expect the addition function when called, to return 42
        })

        test("Should return 70 for 50 + 20", () =>{ //test function and test description
            expect(addition(50, 20)).toBe(70) //expect the addition function when called, to return 42
        })
    })

    describe("Subtraction function", () =>{
        
    })

    describe("Multiply function", () =>{
        
    })

    describe("Division function", () =>{
        
    })

})