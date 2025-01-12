"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Function to find smallest number
function findSmallestNumber(array) {
    let smallest = array[0];
    // create var 'smallest' with first element of array
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

// Function to find largest number
function findLargestNumber(array) {
    let largest = array[0]; 
    // create var 'largest' with first element of array
    for (let i = 1; i < array.length; i++) {
    // iterates through array starting at second element
        if (array[i] > largest) {
        // compare each element to var 'largest'.
            largest = array[i]; 
            // update var 'largest' if current element is larger
        }
    }
    return largest; 

}

// function to find average
function findAverage(array) {
    let sum = 0; 
    // create var 'sum' with 0
    for (let i = 0; i < array.length; i++) {
    // iterates through array starting at first element    
        sum += array[i]; 
        // adds each element to var 'sum'
    }
    return sum / array.length; 
    // sivides var 'sum' by number of elements
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