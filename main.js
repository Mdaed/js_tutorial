let Phrase = require("mhartl-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let hrase = new Phrase(string);

if (hrase.palindrome()) {
  alert(`"${hrase.content}" is a palindrome!`);
} else {
  alert(`"${hrase.content}" is not a palindrome.`)
}