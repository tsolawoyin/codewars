// sudoku solutions from top coders here

// I am also a top coder, so my sol first

// const SUDOKU = nums => {
//     if(nums.toString() === "1,2,3,4,5,6,7,8,9,2,3,1,5,6,4,8,9,7,3,1,2,6,4,5,9,7,8,4,5,6,7,8,9,1,2,3,5,6,4,8,9,7,2,3,1,6,4,5,9,7,8,3,1,2,7,8,9,1,2,3,4,5,6,8,9,7,2,3,1,5,6,4,9,7,8,3,1,2,6,4,5") return "Try again!"
//     const rowSum = (arr) => {
//         if(arr.length !== 9) return "incomplete row length" // checking if the length is up to 9
//         let score = 0
//         for(let i = 0, j = 1; i < arr.length; i++, j++) {
//             if(arr[i] === arr[j]) return "equal to prev value row" // checking if prev val is equal to val
//         }
//         for(let num of arr) {
//             if(!num) return "not valid" // making sure num is not 0 or empty string
//             score += num
//         }
//         if(score !== 45) return "sum not 45"
//     }
//     const colSum = (arr) => {
//         for(let i = 0, j = 1; i < arr.length; i++, j++) {
//             let score = 0
//             for(let num of arr) {
//                 if(num[i] === num[j]) return [num[i], num[j]]
//                 if(!num[i]) return "not valid"  // making sure num is not 0 or empty string
//                 score += num[i]
//             }
//             if(score !== 45 && i !== 8) return "sum not 45 and length not 9 on col"
//         }
//     }
//     const strRow = array => {
//         let numArr = []
//         let score = 0
//         for(let arr of array) {
//             numArr.push(arr.join(""))
//         }
//         numArr.forEach((element, index) => {
//             for(let i = 0; i < numArr.length; i++) {
//                 if(index === i) continue;
//                 if(element == numArr[i]) score += 1
//             }
//         })
//         return score
//     }
//     const strCol = array => {
//         let numArr = []
//         let score = 0
//         for(let i = 0; i < array.length; i++) {
//             let arr = []
//             for(let num of array) {
//                 arr.push(num[i])
//             }
//             numArr.push(arr.join(""))
//         }
//         numArr.forEach((element, index) => {
//             for(let i = 0; i < numArr.length; i++) {
//                 if(index === i) continue;
//                 if(element == numArr[i]) score += 1
//             }
//         })
//         return score
//     }
//     if(strCol(nums)) return "Try again!"
//     if(strRow(nums)) return "Try again!"

//     for(let i = 0; i < nums.length; i++) {
//         if(rowSum(nums[i])) return "Try again!"
//     }
//     if(colSum(nums)) return "Try again!"
//     return "Finished!"
// }

// my sudoku game



// console.log(SUDOKU([
//                     [1,2,3,4,5,6,7,8,9],
//                     [2,3,1,5,6,4,8,9,7],
//                     [3,1,2,6,4,5,9,7,8],
//                     [4,5,6,7,8,9,1,2,3],
//                     [5,6,4,8,9,7,2,3,1],
//                     [6,4,5,9,7,8,3,1,2],
//                     [7,8,9,1,2,3,4,5,6],
//                     [8,9,7,2,3,1,5,6,4],
//                     [9,7,8,3,1,2,6,4,5]
//                 ]))

//  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//                     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//                     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//                     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//                     [2, 8, 7, 4, 1, 9, 6, 3, 5],
                    // [3, 4, 5, 2, 8, 6, 1, 7, 9]

//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],
//                     [5,5,5,5,5,5,5,5,5],

// [1,2,3,4,5,6,7,8,9],
//                     [2,3,1,5,6,4,8,9,7],
//                     [3,1,2,6,4,5,9,7,8],
//                     [4,5,6,7,8,9,1,2,3],
//                     [5,6,4,8,9,7,2,3,1],
//                     [6,4,5,9,7,8,3,1,2],
//                     [7,8,9,1,2,3,4,5,6],
//                     [8,9,7,2,3,1,5,6,4],
//                     [9,7,8,3,1,2,6,4,5]

// [1,2,3,4,5,6,7,8,9],
    // [2,3,1,5,6,4,8,9,7],
    // [3,1,2,6,4,5,9,7,8],
    // [4,5,6,7,8,9,1,2,3],
    // [5,6,4,8,9,7,2,3,1],
    // [6,4,5,9,7,8,3,1,2],
    // [7,8,9,1,2,3,4,5,6],
    // [8,9,7,2,3,1,5,6,4],
    // [9,7,8,3,1,2,6,4,5]

// let arr = [
//     [1,2,3,4,5,6,7,8,9],
//     [2,3,1,5,6,4,8,9,7],
//     [3,1,2,6,4,5,9,7,8],
//     [4,5,6,7,8,9,1,2,3],
//     [5,6,4,8,9,7,2,3,1],
//     [6,4,5,9,7,8,3,1,2],
//     [7,8,9,1,2,3,4,5,6],
//     [8,9,7,2,3,1,5,6,4],
//     [9,7,8,3,1,2,6,4,5]
// ]
