## TDD

Describe: checkForMatch(id);

Test: "It should return a console log that the cards match at the same id"  
Code:
let id = 1;  
checkForMatch(id);  
Expected Output: "It's a match!";

Describe: generateCardGrid();

Test: "It should output an array of randomly sorted card objects, assigned at random indexes"  
Code: generateCardGrid();  
Expected Output: [3,5,2,2,1,5,4,3,4,1]

Test: "It should create divs using the DOM and populate with shuffled cards"
Code: generateCardGrid();
Expected Output: 

