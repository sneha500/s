//Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word.length > 0).length;
  }
  
  let paragraph = "This is a sample paragraph to count the number of words.";
  console.log(countWords(paragraph)); 