console.log("---------> Welcome to the Training Page! <---------");

/* A-TASK: 
    Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
    ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.

    MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// // Simple solution:
function countLetter1(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) count++;
  }

  return count;
}
const result1 = countLetter1("e", "engineer");
console.log("Simple Solution Result:", result1);

// // Optiised solution:
function countLetter2(letter, word) {
  let count = 0;

  for (let char of word) {
    if (letter === char) count++;
  }

  return count;
}
const result2 = countLetter2("e", "engineer");
console.log("Optimised Solution Result:", result2);
