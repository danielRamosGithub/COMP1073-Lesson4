/* javascript lives here */

console.log("App Started");

// make a reference to H1 element on the index page
// initialize my firstHeading variable
var firstHeading = document.getElementById("firstH1");

firstHeading.style.color = "#0000ff";
firstHeading.style.fontWeight = "300";
firstHeading.style.fontStyle = "italic";

// i can use my firstHeading variable as if it Is the element
// console.log(firstHeading.textContent);

// firstHeading.textContent = "bla bla bla";

// 3 steps of injecting content to the page
// Step 1 - create a reference to an ELEMENT
var firstParagraph = document.getElementById("firstParagraph");
// Step 2 - Create a variable that contains your content
var myContent = "It was a sunny day in Florida. It felt great...";
// Step 3 - Assign the variable with your content to the text content property of the reference variable
firstParagraph.textContent = myContent;

var secondParagraph = document.getElementById("secondParagraph");
var myHtmlContent = "<h2>Second Heading</h2>" 
                    + "<p>This is an inner paragraph to the second paragraph</p>";
secondParagraph.innerHTML = myHtmlContent;                    

// create a reference to the button on the page index.html
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click eeent and call the clickMeButton_Click function 
clickMeButton.addEventListener("click", clickMeButton_Click);

// click function - used as an event handler
function clickMeButton_Click() {
    console.log("clicked");
}