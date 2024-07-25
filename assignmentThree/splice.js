//Q3) let string = 'INDIA'
//output = 'INDONESIA'
//Use array.splice

let string = 'INDIA'.split('');
string.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
let newString = string.join('');
console.log(newString); // "INDONESIA"