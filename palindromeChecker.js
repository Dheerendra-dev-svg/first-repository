function isPalindrome(text) {
  const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedText === cleanedText.split("").reverse().join("");
}

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
