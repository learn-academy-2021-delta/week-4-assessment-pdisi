// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// a describe method that lists the name of the function OR naming of the particular test.

describe("Remove and shuffle", () => {

    // a test/it method, nested within the describe block, that in plain words, describes what the function does.
    it("Takes in an array then removes the first item and also shuffles the remaining content", () => {

      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(input(colors1)).toEqual((["yellow", "blue", "pink", "green"]))
      expect(input(colors2)).toEqual((["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

//Test Fail: Input is not defined

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

//Make an generic arrow function called input
//Use the shift method to remove the first item
//Use a let statement that is equal to a sort method that use a math.random
//Return the let
const input = (array) => {
    array.shift
    let newArray = array.sort(() => Math.random() - 0.5);{
        return newArray
    }     
}

//Test Fail: > 27 |       expect(input(colors1)).toEqual((["yellow", "blue", "pink", "green"]))

//Notes on process: This took a bit of time for me to research and write out properly, but the syntax is beginning to bit easier for me to grasp. It appears that my function is working properly. I'm not sure why the test is failing for colors1



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

 describe("Numbers Min to Max", () => {

//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("The function takes in an array of numbers then returns only the least and greatest numbers in numerical order", () => {

//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
       expect(numberz([3, 56, 90, -8, 0, 23, 6])).toEqual(([-8, 90]))
       expect(numberz([109, 5, 9, 67, 8, 24])).toEqual(([5, 109]))
//     })
// })

 var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.
// Create a function called numberz to match the jest test
// It takes in an array
// I would then like to sort the numbers from least to greatest
// Then take the first and last items in the array to return the least and greatest numbers

// const numberz = (array) => {
//     array.sort((a,b)=>a-b)
//     let small = array[0]
//     let big = array[array.length-1]{
//         return small + big
//     }
// }

//Notes on process: This test is saying "jest encountered an unexpected token". Not sure what is causing this.
// The test for the first problem ran just fine and I'm not noticing any differences. I believe that the logic for my function is proper and should work well though.
//It was exciting to come up with this logical process on my own.



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

 describe("Dual array", () => {

//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
     it("Takes in to arrays and gives back one unique array with no duplicates", () => {

//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
       expect(arrayz([3, 7, 10, 5, 4, 3, 3],[7, 8, 2, 3, 1, 5, 4])).toEqual(([3, 7, 10, 5, 4, 8, 2, 1]))
//       expect(input()).toEqual(())
//     })
// })

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

//create a function called arrayz
//take in two arrays
//combine the two arrays
//iterate through it to find duplicates
//return one array with no duplicates

const arrayz = (array) => {
    array.concat
    let newarrayz = array.concat
    for (let i = 0; i < array.length; i++){
        if (map[array[i]]){
            continue;
        } else {
            result.push(array[i])
            map[array[i]] = true
        }
    }
    return newarrayz
}

//Notes on process: Jest is encountering an error again and now it's pointing at this line at 142 for my notes on process. Never had these issues before.
//Verified that I deleted the code that VS code keeps putting in at the top of the file. My logic seems to be straight forward for this function and I believe it should work.
//Starting to have more fun with Javascript! Big win for the weekend.