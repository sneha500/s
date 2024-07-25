//Q5) Write a function to replace wrong word with correct word in any sentance.
//Like this - correctfn(string, wrong, correct)
//Use string.replace in function.

function correctFn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
  }
  
  let sentence = "I love programming in Pyton";
  console.log(correctFn(sentence, "Pyton", "Python")); 