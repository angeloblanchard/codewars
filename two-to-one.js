/* Take 2 strings s1 and s2 including only letters from ato z. 
Return a new sorted string, the longest possible, containing 
distinct letters - each taken only once - coming from s1 or s2.

PREP
P: s1: first string, s2: second string
R: return one string containing all the unique letters, sorted
E: 
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
P: Take in two strings, combine them together, and filter to their unique letters, sorted

*/

function longest(s1, s2) {
    s1 += s2;
    let s3 = [];
    s1.split("").forEach(element => {
      if (!s3.includes(element)) {
        s3.push(element);
      }
    });
    return s3.sort().join("");
  }