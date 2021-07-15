String.prototype.reverse = function(){
	 return Array.from(this).reverse().join("");
}
Array.prototype.last = function(){
	return this[this.length-1];
}

// Reverses a string.

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;


  this.processedContent = function processedContent() {
  	return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    
    return this.processedContent() === this.processedContent().reverse();
  }
}
