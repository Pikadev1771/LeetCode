/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length-1;

    while (left < right) {
      
        if (s[left] !== s[right]) {
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
        }
        
        left++, right--;
    }
    return true;
  
};

// Palindrome 판별
function isPalindrome(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++, right--;
    }
    return true;
}
