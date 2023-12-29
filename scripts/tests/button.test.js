//import the buttonClick function
const buttonClick = require("../button");

/**
 * beforeEach directive runs before each test is perfomed, the mock DOM will be enclosed within it
 */

//the below directive only returns a section of the DOM
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

//the below directive returns the entire DOM. The below code can be used as boilerplate
beforeEach(() => {
    let fs = require("fs") //The Node FS Module is a file system handler, built into node (open/read/write files)
    let fileContents = fs.readFileSync("index.html", "utf-8") //let FS read contents of html file and stored within var
    document.open() //open the HTML document
    document.write(fileContents) //write file contents to document
    document.close() //close the document
})

//The describe use to enclose or DOM Tests
describe("DOM Tests", () =>{

    //Test for changing "par" element HTML content
    test("expects p content to change", () => { //test and description
        buttonClick(); //run buttonClick function
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked"); //expect innerHTML of "par" to equal "You Clicked"
    })

    //Test to check if a h1 element exists within the DOM
    test("expect h1 element to exist", () =>{
        //get elements by h1 tagname, get the length of them, and expect to be atleast 1 in the returned array
        expect(document.getElementsByTagName("h1").length).toBe(1)
    })
})