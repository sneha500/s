//Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


let testString = "This is an example string with more than twenty characters.";

let vowels = testString.match(/[aeiou]/gi) || [];
let consonants = testString.match(/[^aeiou\s]/gi) || [];

console.log(`Vowels: ${vowels.length}, Consonants: ${consonants.length}`);
