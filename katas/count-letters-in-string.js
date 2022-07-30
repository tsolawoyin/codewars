// I need to study my own solutions too and comment properly for future purpose
// My solution.

const letterCount = str => {
    let newArr = [...str].sort(), sorted = [...new Set(newArr)], numberArr = []; 
    const result = {};
    sorted.forEach(element => {
        let score = 0; 
        for(arr of newArr) {
            if(element !== arr) continue; 
            else if(element === arr) score += 1
        }; 
        numberArr.push(score)});
        for(let i = 0; i < sorted.length; i++) {
            result[sorted[i]] = numberArr[i]
        };
     return result;
};

// Best practice

// const letterCount = s => s
//     .split('')
//     .reduce((accum, value) => {
//         accum[value] = accum[value] ? accum[value] + 1 : 1
//         return accum
//     }, {})

// other solution

// function letterCount(s){
//   let res = {}
//   s.split('').sort((a, b) => a - b).forEach(el => res[el] ? res[el]++ : res[el] = 1)

//   return res;
// }

// const letterCount = s => [...s].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

// Test cases
console.log(letterCount("codewars"))
console.log(letterCount("daydreamer"))
console.log(letterCount("traveller"))
console.log(letterCount("arithmetics"))
console.log(letterCount("activity"))

