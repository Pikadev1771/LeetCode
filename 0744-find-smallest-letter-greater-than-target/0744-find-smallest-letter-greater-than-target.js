/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const sorted = letters.slice().sort();

    for(letter of sorted) {
        if(letter > target) {
            return letter
        } 
    }

    return letters[0]
    
};