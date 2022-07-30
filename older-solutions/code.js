// isogram
// const isIsogram = str => {
//     let sorted = str.toLowerCase().split("").sort()
//     for(var i = 0, j = 1; i < sorted.length; i++, j++){
//         console.log(sorted[i], sorted[j])
//         if(sorted[i] !== sorted[j]) continue;
//         else return false
//     }
//     return true
// }
// console.log(isIsogram("freecodecamp"))

// const highAndLow = (numbers) => `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// function accum(s) {
// 	return s.toLowerCase().split("").map((letter, index) => letter.repeat(++index)).map(element => element.split("").map((element, index) => index === 0 ? element.toUpperCase() : element).join("")).join("-")
// }
// console.log(accum("ZpglnRxqenU"))

// function solution(number){
//     return [
//         { threshold: 1000, char: 'M'},
//         { threshold: 900,  char: 'CM'},
//         { threshold: 500,  char: 'D'},
//         { threshold: 400,  char: 'CD'},
//         { threshold: 100,  char: 'C'},
//         { threshold: 90,   char: 'XC'},
//         { threshold: 50,   char: 'L'},
//         { threshold: 40,   char: 'XL'},
//         { threshold: 10,   char: 'X'},
//         { threshold: 9,    char: 'IX'},
//         { threshold: 5,    char: 'V'},
//         { threshold: 4,    char: 'IV'},
//         { threshold: 1,    char: 'I'}
//     ].reduce((prev, curr) =>
//     {
//         while(curr.threshold <= number ){
//             prev += curr.char;
//             number -= curr.threshold;
//         }
        
//         return prev;
//     }, '');
// }
// console.log(solution(2311))

// function solution(number){
// // convert the number to a roman numeral
//     var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }









//     var ans = '';
//     while(number>0){
//         for(a in roman){ 
//             if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
//         }
//     }
//     return ans;
// }
// console.log(solution(2041)

// const digPow = (n, p) => {
//     console.log(typeof n);
//     const num = String(n)
//         .split("")
//         .map((element, index) => Number(element) ** ( index + p))
//         .reduce((acc, curr) => acc += curr, 0)


//     let float = parseFloat(num / n), int = parseInt(num / n)
//     console.log(float, int);
//     if(float === int) return int; 
//     else return -1
// }
// console.log(digPow(4628, 3)) 

// const twoSum = (numbers, target, photocopy = [...numbers]) => {
//     let j = null
//     numbers.forEach((element, index) => {
//         for(let i = 0; i < photocopy.length; i++){
//             if(index === i) continue;
//             if((element + photocopy[i]) === target) {
//                 j = [index, i]
//                 break
//             }
//         }
//     })
//     return j.reverse()
// }

// console.log(twoSum([1234,5678,9012], 14690))

// const UNIQUE = (str, answer = []) => {
//     if(!str[0]) {
//         return []
//     }
//     answer.push(str[0])
//     for(let i = 0, j = 1; i < str.length; i++, j++) {
//         if(!str[j]) break;
//         else if(str[i] === str[j]) continue;
//         else answer.push(str[j])
//     }
//     return answer
// }

// console.log(UNIQUE([]))


// caesars cipher using rot-13

// const ROT13 = (str, copy = [...str], encrypted = []) => {
//     let punc = str.match(/[^A-Z ]+/)
//     const CIPHER = {
//         " ": " ",
//         A: "N",
//         B: "O",
//         C: "P",
//         D: "Q",
//         E: "R",
//         F: "S",
//         G: "T",
//         H: "U",
//         I: "V",
//         J: "W",
//         K: "X",
//         L: "Y",
//         M: "Z",
//         N: "A",
//         O: "B",
//         P: "C",
//         Q: "D",
//         R: "E",
//         S: "F",
//         T: "G",
//         U: "H",
//         V: "I",
//         W: "J",
//         X: "K",
//         Y: "L",
//         Z: "M"
//     }
//     for(let letter of copy) {
//         for(let word of Object.keys(CIPHER)) {
//             if(letter === word) {
//                 encrypted.push(CIPHER[letter])
//             }
//         }
//     }
//     encrypted.push(punc[0])
//     return encrypted.join("")
// }


// console.log(ROT13("SERR CVMMN))))"))
// const DNA_PAIR = {
//         A: "U",
//         G: "C",
//         T: "A",
//         C: "G",
//     }
// const GENETIC_CODE = [
//     ["F", "Phe", "UUU", "UUC"],
//     ["L", "Leu", "UUA", "UUG", "CUG", "CUA", "CUG"],
//     ["Y", "Tyr", "UAU", "UAC"],
//     ["S", "Ser", "UCU", "UCA", "UCG", "AGU"],
//     ["st", "Stop", "UAA", "UAG", "UGA"],
//     ["W", "Trp", "UGG"],
//     ["P", "Pro", "CCU", "CCC", "CCA", "CCG"],
//     ["H", "His", "CAU", "CAC"],
//     ["Q", "Glutamine", "CAA", "CAG"],
//     ["R", "Arg", "CGU","CGC", "CGA", "CGG", "AGA", "AGG"],
//     ["I","Ile", "AUU", "AUC", "AUA"],
//     ["M", "Met", "AUG"],
//     ["T", "Thr", "ACU", "ACC", "ACA", "ACG"],
//     ["N", "Asn", "AAC", "AAU"],
//     ["K", "Lys", "AAA", "AAG"],
//     ["V", "Val", "GUU", "GUC", "GUA", "GUG"],
//     ["A", "Ala", "GCU", "GCC", "GCA", "GCG"],
//     ["D", "Asp", "GAU"],
//     ["E", "Glu", "GAA", "GAG"],
//     ["G", "Gly", "GGU", "GUC", "GGA", "GGG" ]
// ]
// const DNA_RNA =  (str, reversed = false, copy = [...str], encrypted = []) => {
//     if(reversed) DNA_PAIR.toRNA = "U"
//     for(let letter of copy) {
//         for(let word of Object.keys(DNA_PAIR)) {
//             if(letter === word) {
//                 encrypted.push(DNA_PAIR[letter])
//             }
//         }
//     }
//     // if(reversed === true) return encrypted.reverse().join("")
//     return encrypted.join("")
// }

// console.log(DNA_RNA("AGTCGTCCCGTGAAAT"))
// // DNA_PAIR.toRNA = "U"
// console.log(DNA_RNA("AGTCGTCCCGTGAAAT", true))

// let word = "TACAGCTCGCTATGAATC"

// // console.log(aminoAcid.join("-"))

// const DNA_TO_AMINO_ACID = (word, aminoAcid = []) => {
//     for(let i = 0; i < word.length; i += 3) {
//         let str = ""
//         for(let j = i; j < i+3; j++) {
//             str += word[j]
//         }
//         for(let code of GENETIC_CODE) {
//             if(code.includes(str)) {
//                 aminoAcid.push(code[1])
//             }
//         }
//     }
//     return aminoAcid.join("-")
// }
// console.log(DNA_TO_AMINO_ACID(word))



// function proteinSynthesis(word,copy = [...word], encrypted = [], aminoAcid = [], protein = []) {
//   // Transcribe
//     const DNA_PAIR = {
//         A: "U",
//         G: "C",
//         T: "A",
//         C: "G",
//     }
//     for(let letter of copy) {
//         for(let word of Object.keys(DNA_PAIR)) {
//             if(letter === word) {
//                 encrypted.push(DNA_PAIR[letter])
//             }
//         }
//     }
//     let mRNA = encrypted.join("")
//   // Translate
//     const GENETIC_CODE = [
//         ["Ala", "GCU"," GCC", "GCA"," GCG"], 
//         ["Leu", "UUA", "UUG","CUU","CUC", "CUA","CUG"], 
//         ["Arg", "CGU", "CGC", "CGA","CGG", "AGA", "AGG"], 
//         ["Lys", "AAA","AAG"],
//         ["Asn", "AAU","AAC"], 
//         ["Met", "AUG"],
//         ["Asp","GAU","GAC"], 
//         ["Phe", "UUU"," UUC"],
//         ["Cys"," UGU", "UGC"],
//         ["Pro", "CCU", "CCC", "CCA", "CCG"], 
//         ["Gln", "CAA", "CAG"],
//         ["Ser","UCU","UCC","UCA","UCG","AGU","AGC"], 
//         ["Glu","GAA","GAG"], 
//         ["Thr","ACU", "ACC", "ACA", "ACG"], 
//         ["Gly", "GGU", "GGC", "GGA", "GGG"], 
//         ["Trp", "UGG"],
//         ["His", "CAU", "CAC"],
//         ["Tyr", "UAU","UAC"], 
//         ["Ile", "AUU","AUC", "AUA" ], 
//         ["Val", "GUU","GUC", "GUA", "GUG"], 
//         ["Stop", "UAG", "UGA", "UAA"]
//     ]

//     for(let i = 0; i < mRNA.length; i += 3) {
//         let str = ""
//         for(let j = i; j < i+3; j++) {
//             if(!mRNA[j]) continue
//             str += mRNA[j]
//         }
//         protein.push(str)
//         for(let code of GENETIC_CODE) {
//             if(code.includes(str)) {
//                 aminoAcid.push(code[0])
//                 // console.log("Oops")
//             }
//             // console.log(aminoAcid)
//         }
//     }


//     return [protein.join(" "),aminoAcid.join(" ")];
// }

// console.log(proteinSynthesis("TACAGCTCGCTATGAATC"))

//  let arr = [
//     ["Ala", "GCU"," GCC", "GCA"," GCG"], 
//     ["Leu", "UUA", "UUG","CUU"," CUC", "CUA"," CUG"], 
//     ["Arg"," CGU"," CGC", "CGA"," CGG", "AGA", "AGG"], 
//     ["Lys", "AAA"," AAG"],
//     [" Asn", "AAU"," AAC"], 
//     ["Met", "AUG"],
//     [ "Asp"," GAU"," GAC"], 
//     ["Phe", "UUU"," UUC"],
//     ["Cys"," UGU", "UGC"],
//     [ "Pro", "CCU", "CCC", "CCA", "CCG"], 
//     ["Gln", "CAA", "CAG"],
//     [ "Ser"," UCU"," UCC", "UCA"," UCG","AGU","AGC"], 
//     ["Glu","GAA"," GAG"], 
//     ["Thr"," ACU", "ACC", "ACA", "ACG"], 
//     ["Gly", "GGU", "GGC", "GGA", "GGG"], 
//     ["Trp", "UGG"],
//     [ "His", "CAU", "CAC"],
//     [ "Tyr", "UAU"," UAC"], 
//     ["Ile", "AUU"," AUC", "AUA" ], 
//     ["Val", "GUU"," GUC", "GUA", "GUG"], 
//     ["Stop", "UAG", "UGA", "UAA"]
// ]

// const likes = arrOfPeople => {
//     if(arrOfPeople.length === 0) return `no one likes this`
//     else if(arrOfPeople.length === 1) return `${arrOfPeople[0]} likes this`
//     else if(arrOfPeople.length === 2) return `${arrOfPeople[0]} and ${arrOfPeople[1]} like this`
//     else if(arrOfPeople.length === 3) return `${arrOfPeople[0]}, ${arrOfPeople[1]} and ${arrOfPeople[2]} like this`
//     else if(arrOfPeople.length > 3) return `${arrOfPeople[0]}, ${arrOfPeople[1]} and ${arrOfPeople.length - 2} others like this`

// }

// console.log(likes(["Dayo", "Bisola", "Tolani", "Segun", "Olamide"]))

// human_readable
// const HUMAN_READABLE = second => {
//     let time = [0, 0, 0]
//     const TIME = {
//         0: 3600,
//         1: 60
//     }
//     while(second > 59) {
//         for(a in TIME) {
//             if(second >= TIME[a]) {
//                 time[a] = Math.floor(second / TIME[a])
//                 let multiply = time[a] * TIME[a]
//                 second -= multiply
//             } else continue
//         }
//     }
//     time[2] = second 
//     let newTime = time.map(element => element.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
//     return newTime.join(":")
// }

// console.log(HUMAN_READABLE(5))

// split strings

// const split = str => {
//     let arr = []
//     for(let i = 0; i < str.length; i += 2) {
//         let str2 = ""
//         for(let j = i; j < (i+2); j++) {
//             if(!str[j]) {
//                 str2 += "_"
//                 break
//             }
//             str2 += str[j]
//         }
//         arr.push(str2)
//     }
//     return arr
// }

// console.log(split("abcdefg"))

// highest scoring word

// const HIGH = (word, separated = word.split(" ")) => {
//     let arrOfNum = []
//     const SCORE = {
//         a: 1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17,r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
//     }
//     let newArr = separated.map(element => element.split(""))
//     newArr.forEach(elements => {
//         let score = 0
//         elements.forEach(element => {
//             for(alpha in SCORE) {
//                 if(element === alpha) {
//                     score += SCORE[alpha]
//                 }
//             }
//         })
//         elements.push(score)
//         arrOfNum.push(score)
//     })
//     let maximum = Math.max(...arrOfNum)
//     let filtered = newArr.find(element => element.includes(maximum))
//     filtered.pop()
//     return filtered.join("")
// }
// console.log(HIGH("take me to semynak"))

// const repeat = str => {
//     let arr = [], score = 0
//     let lower = str.toLowerCase()
//     let sorted = lower.split("").sort()
//     for(let i = 0, j = 1; i < sorted.length; i++, j++) {
//         if(arr.includes(sorted[i])) continue
//         if(sorted[i] === sorted[j]) arr.push(sorted[i], sorted[j])
//     }
//     for(let i = 0, j = 1; i < arr.length; i++, j++) {
//         if(arr[i] === arr[j]) score += 1 
//     }
//     return score
// }
// console.log(repeat("Invisibility"))

// const palindrome = num => {
//     if(typeof num !== "number" || num < 0 ) return "Not valid"
//     return String(num).split("").reverse().join("") == num
// }

// console.log(palindrome(2332))

// find the odd int.
// const findOddInt = (num, main = [...num]) => {
//     let sorted = num.sort()
//     let arr = []
//     for(let i = 0; i < sorted.length; i++) {
//         let score = 0
//         for(j = 0; j < main.length; j++) {
//             if(num[i] === main[j]) score += 1
//         }
//         arr.push(score)
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 !== 0) return sorted[i]
//     }
// }

// best solution
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// console.log(findOddInt([1,1,1,1,1,1,10,1,1,1,1]))

// numerical palindrome

// const palidrome = (num, s) => {
//     if(typeof num !== "number" || typeof s !== "number") return "Not valid"
//     let arr = []
//     let score = num
//     for(let i = 0; i < s; i++) {
//         while(true){
//             score += 1
//             let str = String(score).split("").reverse().join("")
//             let str2 = String(num).split("").reverse().join("")
//             if(str.length == 1) continue
//             if(str2 == num && str2.length !== 1 ) {
//                 arr.push(num)
//                 num++
//                 break;
//             }
//             if(str == score) {
//                 arr.push(score)
//                 break;
//             }
//         }
//     }
//     return arr
// }

// console.log(palidrome(101,2))


// rot 13 advanced
// const rot13 = (str, copy = [...str], encrypted = []) => {
//     const CIPHER = {
//         A: "N",
//         B: "O",
//         C: "P",
//         D: "Q",
//         E: "R",
//         F: "S",
//         G: "T",
//         H: "U",
//         I: "V",
//         J: "W",
//         K: "X",
//         L: "Y",
//         M: "Z",
//         N: "A",
//         O: "B",
//         P: "C",
//         Q: "D",
//         R: "E",
//         S: "F",
//         T: "G",
//         U: "H",
//         V: "I",
//         W: "J",
//         X: "K",
//         Y: "L",
//         Z: "M",
//         a: "n",
//         b: "o",
//         c: "p",
//         d: "q",
//         e: "r",
//         f: "s",
//         g: "t",
//         h: "u",
//         i: "v",
//         j: "w",
//         k: "x",
//         l: "y",
//         m: "z",
//         n: "a",
//         o: "b",
//         p: "c",
//         q: "d",
//         r: "e",
//         s: "f",
//         t: "g",
//         u: "h",
//         v: "i",
//         w: "j",
//         x: "k",
//         y: "l",
//         z: "m"
//     }
//     let regex = /^[^a-zA-Z]+$/
//     for(let letter of copy) {
//         if(regex.test(letter)) encrypted.push(letter)
//         for(let word of Object.keys(CIPHER)) {
//             if(letter === word) {
//                 encrypted.push(CIPHER[letter])
//             }
//         }
//     }
//     return encrypted.join("")
// }

// console.log(rot13("Test"))

// Did I fiinish my Sudoku

// const SUDOKU = nums => {
//     const rowSum = (arr) => arr.reduce((acc, element) => acc += element, 0) // function to check if each array contains no 1 to 9
//     const colSum = (arr) => {
//         for(let i = 0; i < arr.length; i++) {
//             let score = 0
//             for(let num of arr) {
//                 score += num[i]
//             }
//             // console.log(score)
//             if(score !== 45) return "oops"
//         }
//     }
//     for(let i = 0; i < nums.length; i++) {
//         // console.log(rowSum(nums[i]))
//         if(rowSum(nums[i]) !== 45) return "Try again!" // checked if any of them is not equal to 45
//     }
//     if(colSum(nums)) return "Try again!"
//     return "Finished!"
// }

// pig latin ay


// const pigLatin = (word, regex = /[aeiouAEIOU]+/) => {
//     if(!(/^[a-zA-Z]+$/.test(word))) return null
//     if(regex.test(word[0])) return word.toLowerCase() + "way"
//     let array = [...word]
//     let arrOfConsonants = []
//     for(let arr of array) {
//         if(regex.test(arr)) break
//         else {
//             arrOfConsonants.push(arr)
//             // array.shift()
//         }
//     }
//     array.splice(0, arrOfConsonants.length)
//     return `${array.concat(arrOfConsonants).join("").toLowerCase()}ay`
// }
// console.log(pigLatin("EDtitir"))

// console.log("EDtitirway".toLowerCase())

// string incrementer

// const MORSECODE = str => {
//     let arr = str.split(" ")
//     let newArr = []
//     for(let a of arr) {
//         if(!a) newArr.push("a")
//         else newArr.push(a)
//     }
//     let arrr = newArr.join(" ");
//     let newWord = arrr.replace(/a a/g, "b")
//     console.log(arrr)
//     let split = newWord.split(" ")
//     console.log(split)
//     const IMC = {
//         " ": "b",
//         A: ".-",
//         B: "-...",
//         C: ".-.-",
//         D: "-..",
//         E: ".",
//         F: "..-.",
//         G: "--.",
//         H: "....",
//         I: "..",
//         J: ".---",
//         K: "-.-",
//         L: ".-..",
//         M: "--",
//         N: "-.",
//         O: "---",
//         P: ".--.",
//         Q: "--.-",
//         R: "-.",
//         S: "...",
//         T: "-",
//         U: "..-",
//         V: "...-",
//         W: ".--",
//         X: "-..-",
//         Y: "-.--",
//         Z: "--..",
//         SOS: "...---..."
//     }
//     let decoded = ""
//     for(let mor of split) {
//         // console.log(mor)
//         for(a in IMC) {
//             if(mor === IMC[a]) decoded += a
//         }
//     }
//     return decoded
// }

// console.log(MORSECODE(".   ."))


// string incremental

// const stringIncrement = str => {
//     if(str == "") return 1
//     let arr = str.split("")
//     let score = ""
//     let zeros = ""
//     let word = ""
//     for(let a of arr){
//         if(/[a-zA-Z]+/.test(a)) word += a
//     }
//     for(let a of arr) {
//         if(/[0-9]+/.test(a)) score += a
//     }
//     for(let zero of score.split("")) {
//         if(zero == "0") zeros += zero
//         else break
//     }
//     if(Number(score) == 9 || Number(score) == 99 || Number(score) == 0) {
//         let Zero = zeros.split("")
//         Zero.pop()
//         let newZero = Zero.join("")
//         // console.log(newZero)
//         return `${word}${newZero}${(Number(score) + 1)}`
//     }
//     return `${word}${zeros}${(Number(score) + 1)}`
// }

// console.log(stringIncrement("foobargr0"))

// is my friend cheating

// const removeNb = n => {
//     var results = [];
//     for (var a = 1; a <= n; a++) {
//         var b = (n * (n + 1) / 2 - a) / (a + 1);
//         if (b % 1 === 0 && b <= n) results.push([a, b]);
//     }
//     return results;
// }
// console.log(removeNb(1000008))
// const HOW_MUCH_IS_LOST = (INITIAL_AMOUNT_THE_STORE_HAS, STOLEN, WHAT_HE_BOUGHT) => {
//     // initially before stealing anything, the company is losing no money
//     let companyLoss = 0
//     // after the guy took the $100, I assume the following two conditions
//     const CUSTOMER_MONEY = STOLEN
//     let change = INITIAL_AMOUNT_THE_STORE_HAS - STOLEN;
//     // after attempted purchase with the "same" money
//     change += STOLEN
//     // buying something from the store is actually equivalent to giving the person money, so;
//     change -= WHAT_HE_BOUGHT
//     const THE_CHANGE_THE_STORE_MUST_GIVE_CUSTOMERS = CUSTOMER_MONEY - WHAT_HE_BOUGHT
//     // the money left after giving the customer change
//     change -= THE_CHANGE_THE_STORE_MUST_GIVE_CUSTOMERS
//     // now the net loss of the company
//     companyLoss = INITIAL_AMOUNT_THE_STORE_HAS - change
//     console.log(`        $${companyLoss} is lost by the store`)
// }

// HOW_MUCH_IS_LOST(250, 100, 96)
// HOW_MUCH_IS_LOST(1000, 100, 50)
// HOW_MUCH_IS_LOST(300, 100, 10)
// HOW_MUCH_IS_LOST(229, 100, 45)
// HOW_MUCH_IS_LOST(840, 100, 79)
// HOW_MUCH_IS_LOST(1050, 100, 100)
// HOW_MUCH_IS_LOST(10000, 100, 15)

// HOW_MUCH_IS_LOST(250, 100, 96)
// HOW_MUCH_IS_LOST(1000, 100, 50)
// HOW_MUCH_IS_LOST(300, 150, 10)
// HOW_MUCH_IS_LOST(229, 100, 45)
// HOW_MUCH_IS_LOST(840, 500, 79)
// HOW_MUCH_IS_LOST(1050, 100, 100)
// HOW_MUCH_IS_LOST(10000, 1000, 350)
// // to be solved tommorrow. 

// const pieChart = obj => {
//     let json = '{"key": value}'
//     return JSON.stringify(obj)
// }

// console.log((pieChart({
//     Hausa: "4",
//     Yoruba: "5",
//     Igbo: "6",
//     Efik: "1",
//     Edo: "4"
// })))
// function zero() {}
// function one() {}
// function two() {}
// function three(func) {
//     const NUM = 3
//     if(!func) return NUM
// }
// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}

// function plus(num) {
//     return num
// }
// function minus(num) {
//     return -num
// }
// function times(num) {
// }
// function dividedBy() {}

// console.log(three((minus(3)))) // 3 - 3
// console.log(minus(three()))
// console.log(plus(three()))

// count characters in your string
// const count = str => {
//     let newArr = [...str].sort(), sorted = [...new Set(newArr)], numberArr = []; const result = {}
//     sorted.forEach(element => {
//         let score = 0; for(arr of newArr) {if(element !== arr) continue; else if(element === arr) score += 1}; numberArr.push(score)});for(let i = 0; i < sorted.length; i++) {result[sorted[i]] = numberArr[i]};
//     return result
// }

// console.log(count(""))

// url extractor
// const domainName = str => {
    // let regex = /([a-z]{4,5}):\/\/w*\W?|w*\W?/;
//     let arr = str.replace(regex, ""), result = "";
//     for(alpha of arr) {
//         if(alpha === ".") break
//         result += alpha
//     }
//     return result
// }
// console.log(domainName("icann.org"))

// human readable format
// const human_readable = num => {
//     const TIME = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1};
//     let numArr = [], years = [], readable = "";
//     for(a in TIME) {
//         if(num >= TIME[a]) {
//             let b = a, value = Math.floor(num / TIME[a]);
//             if(value > 1 && num) b += "s"; numArr.push(value); years.push(b);  num -= TIME[a] * value
//         }
//     }
//     if(numArr.length === 1) {
//         for(let i = 0; i < numArr.length; i++) {
//             readable += `${numArr[i]} ${years[i]}`
//         }
//     }
//     if(numArr.length == 2) {
//         for(let i = 0; i < numArr.length; i++) {
//             if(i === 0) readable += `${numArr[i]} ${years[i]} and `;else readable += `${numArr[i]} ${years[i]}`
//         }
//     }
//     else if(numArr.length > 2) {
//         for(let i = 0; i < numArr.length; i++) {
//             if(i !== numArr.length - 2 && i !== numArr.length - 1)readable += `${numArr[i]} ${years[i]}, `
//             if( i === numArr.length - 2 && i !== numArr.length - 1) readable += `${numArr[i]} ${years[i]} and `
//             if(i == numArr.length - 1) readable += `${numArr[i]} ${years[i]}`
//         }
//     }
//     return readable
// }
// console.log(human_readable(120))

// function loop(n) {
//     for(var i = 0; i < n; i++) {
//         console.log(i % array.length, i,) // baddest technique to cycle through an array as much as possible
//         // console.log()
//     }
// }

    // for(let i = 0; i < arr.length; i++) {
    //     let k = 0;
    //     while(k <= 4) {
    //         let sum = arr[i]
    //         for(let j = k; j < arr.length; j++) {
    //             if(i === j) continue;
    //             sum += arr[j]
    //         }
    //         console.log(sum)
    //         k += 2
    //     }
    // }

// my solution doesn't scale at all

// const PERMUTATION = (str, arr = [...str], result = []) => {
//     const N = 2 * arr.length
//     // for words with three letters and less
//     const cycle = n => { // creating a helper function bcos I can't kill myself
//         let newArr = []
//         for(let i = 0; i < n; i++) {
//             newArr.push(arr[i % arr.length])
//         }
//         arr.forEach((element, index) => {
//             let j = 0;
//             while (j < arr.length) {
//                 let ans = element;
//                 for(let i = j; i < newArr.length; i++) {
//                     if(ans.length === arr.length) {
//                         break
//                     };
//                     let num = i % arr.length
//                     if(index === num) ans += "";
//                     if(ans.length !== arr.length && index !== num) {
//                         ans += newArr[i]
//                     }
//                 }
//                 result.push(ans)
//                 j++
//             }
//         })
//         return [...new Set(result)]
//     }
//     // for words with more than four letters. Let's think of other solution
//     const solve = n => {

//     }
//     // return cycle(N)
// }
// console.log(PERMUTATION("abcd"))

// const permutations = str => {
//     if ([...str].every( a => a == str[0])) return [str] // solved
//     if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
//     const ref = str
//         .split('')
//         .reduce(
//         (acc, letter, i) =>
//             acc.concat(permutations(str.slice(0, i) + str.slice(i + 1))
//                 .map(val => letter + val)),
//         []
//         );
//     return [...new Set(ref)]
// };

// console.log(permutations("abc"))

