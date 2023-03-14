/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

let obj = {}

for (el of strs) {
    let key = [...el].sort().join('');
    if(!obj[key]) {
        obj[key] = [];
    }
    obj[key].push(el)
}    
return Object.values(obj)
};