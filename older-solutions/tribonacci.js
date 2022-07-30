// const TRIBONACCI = (arr, repeat) => {
//     if( repeat < 3) return arr.splice(0, repeat)
//     while(repeat > 3) {
//         arr.push((arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]))
//         repeat--
//     }
//     return  arr
// }

 // 30 numbers inclusive of the original numbers.

// function tribonacci(signature,n){  
//   for (var i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

// console.log(TRIBONACCI([1,2,1], 2))


// const getGrade = (s1, s2, s3, average) => {
//     const GRADE = { 
//         s1, s2, s3, average,
//         set averageScore(averageNum) {
//             let score = (this.s1 + this.s2 + this.s3) / averageNum
//             if (score < 60)  this.average = "F";
//             else if (score < 70) this.average = "D";
//             else if (score < 80) this.average = "C";
//             else if (score < 90) this.average = "B"
//             else this.average = "A";
            
//         }
//     }
//     GRADE.averageScore = 3 // 3 is passed as an argument into the averageScore(averageNum)
//     return GRADE.average
// }

// console.log(getGrade(75,78,52))

// your order please!


// const order = (word, word2 = word.split(" "), arr = []) => {
//     let newArr = word2.map(element => element.split("").sort().join("")).sort()
//     newArr.forEach( element => {
//         for(let i = 0; i < word2.length; i++) {
//             if(word2[i].includes(element[0])){
//                 arr.push(word2[i])
//             }
//         }
//     })
//     return arr.join(" ")
// }


// console.log(order("is2 Thi1s T4est 3a"))

//  to be cheked out later. let's move on
// function order(words){
  
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }  

// function order(words) {
//   return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
// }


// Array.diff

// const arrayDiff = (a,b) => {
//     let newArr = []
//     a.forEach(element => {
//         if(!(b.includes(element))){
//             newArr.push(element)
//         }
//     })
//     return newArr
// }

// console.log(arrayDiff([1,2,3,4,4,6,7,7], [2,7]))

// I used filter the other time, but I was just getting the whole thing wrong since. One has to look from a different perspective.

// const arrayDiff2 = (a,b) => a.filter(element => !(b.includes(element))) // best practice bro....

// const findOdd = A => {
//     let newSet = new Set(A)
// }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


// const lastDigit = function(str1, str2){  
//   return String(str1 ** str2)
// }

// console.log(lastDigit(3, 5))

// console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))



// const count = (a,b) => {
//     let arr = a.split("")
//     let count = 0
//     arr.forEach(element => {
//         if(element === b) {
//             count += 1
//         }
//     })
//     return count
// }

// console.log(count("helloooooooo", "o"))


// var countSheep = function (num){
//   //your code here
//   let str = ""
//   for(let i = 1; i <= num; i++) {
//     str += `${i} sheep...`
// }
//   return str
// }

// console.log(countSheep(0))







