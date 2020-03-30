// check a string if is a palindrome which reads the same forward and backward
function isPalindrome(str) {
  let len = str.length;
  if (str.length <= 1) return true;
  if (str[0] === str[len - 1]) {
    return isPalindrome(str.slice(1, len - 1));
  } else return false;
}

// function isPalindrome(str){
//  if(str.length === 1) return true;
// if (str.length === 2) return str[0] === str[1];
// if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
// return false;
// }
