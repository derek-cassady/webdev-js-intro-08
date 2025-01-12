"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Function to find smallest number
function findSmallestNumber(array) {
    let smallest = array[0];
    // create var with first element of array
    for (let i = 1; i < array.length; i++) {
        // iterates through array starting at second element
        if (array[i] < smallest) {
            // compare each element to var 'smallest'.
            smallest = array[i];
            // update var 'smallest' if current element is smaller
        }
    }
    return smallest;
}




// Function to render results in the DOM
function render() {
    smallestNumberElement.textContent = findSmallestNumber(myNumbers);
    largestNumberElement.textContent = findLargestNumber(myNumbers);
    averageNumberElement.textContent = findAverage(myNumbers);
}

// Event listener for the submit button
submissionBtn.addEventListener("click", function () {
    render();
});