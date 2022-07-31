// I need to study my own solutions too and comment properly for future purpose
// My solution.

// const letterCount = str => { // str is likely to  be something like "freeCodeCamp"
//     let newArr = [...str], sorted = [...new Set(newArr)], numberArr = []; const result = {}; // Initialized several variables and constants.
//     sorted.forEach(element => { // iterating through each element in the sorted array. And sorted is made up of unique characters, since sorted is an array of [...new Set()]
//         let score = 0; // on every new iteration, sorted is equal to zero.
//         for(arr of newArr) { // iterating through the newArr array forEach element of the sorted element.
//             if(element === arr) score += 1 // if the elements are the same, the score should increment by 1, else, move on.
//         }; 
//         numberArr.push(score) // at this point after the above iteration is complete, the program should push the calculated score into the numberArr above.
//     });
//         for(let i = 0; i < sorted.length; i++) {
//             result[sorted[i]] = numberArr[i] // this code is literally setting properties for the result obj on every iteration.
//         };
//     return result; // and lastly, result is returned. 
//     // The code is quite descriptive, but I dont know if it's quite efficient.
// };

// Best practice

// const letterCount = s => [...s]
//     .reduce( (accum, value) => {
//         accum[value] = accum[value] ? accum[value] + 1 : 1
//         return accum
//     }, {} ); // understood. The code is really really efficient compared to mine.

// other solution

// function letterCount(s){
//     let res = {}; 
//     [...s].forEach(el => res[el] ? res[el]++ : res[el] = 1); 
//     return res; // not even similar
// }


// const letterCount = s => [...s].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});




// const letterCount = string => [...string].reduce((object, currentElement) => (object[currentElement] = -~object[currentElement], object), {})

// Test cases
// console.log(letterCount("codewars"))
// console.log(letterCount("daydreamer"))
// console.log(letterCount("traveller"))
// console.log(letterCount("arithmetics"))
// console.log(letterCount("activity"))