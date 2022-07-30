


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


/* stuwilliams47 */

// function solution(number){
//     var map         = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
//     var numerals    = Object.keys(map);
//     var subtractive = ['C', 'X', 'I'];

//     var floorToTenOrHundred = number => {
//         var divisor = number > 100 ? 100 : number > 10 ? 10 : 1; // this line reads if number is greater than 100, return 100, else, if number is greater than 10, return 10, else return 1
//         return Math.floor(number / divisor) * divisor;
//     };
//     var roman = '';
//     var floored;
//     var n;
//     var usedSubtractive;

//     numerals.forEach( numeral => {
//         n = Math.floor(number / map[numeral]);
//         if (n > 0) {
//             floored = floorToTenOrHundred(number);
//             usedSubtractive = numerals.some(function (numeral2) {
//                 for (i = 0; i < 3; i++) {
//                     if (floored + map[subtractive[i]] === map[numeral2]) {
//                         roman  += subtractive[i] + numeral2;
//                         number -= floored;
//                         return true;
//                     }
//                 }
//                 return false;
//             });
//             if (!usedSubtractive) {
//                 for (var i = 0; i < n; i++) {
//                     roman += numeral;
//                 }
//                 number -= (n * map[numeral]);
//             }
//         }
//     });
//     return roman;
// }
// console.log(solution(2044))

// --> my awesome solution.
function solution(num){
    const ROMAN = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
    let roman_Numeral = ""
    for(a in ROMAN) {
        if(num >= ROMAN[a]){
            let value = Math.floor(num / TIME[a])
            if(value) roman_Numeral += a
            num -= TIME[a] * value
        }
    }
    return roman_Numeral
}

console.log(solution(2543))
