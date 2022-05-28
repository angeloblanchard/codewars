/* Complete the function that accepts a string parameter, and reverses each
word in the string. All spaces in the string should be retained.

PREP
P: str: str to have words reversed
R: String with all the words reversed
E: 
    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"
P: Takes word, splits into each word via space, then split each word to reverse, join, then join 
    together with spaces returned, and return string.

*/

function reverseWords(str) {
    let strWords = str.split(" ");
    strWords.forEach((word, index) => {
        strWords[index] = word.split("").reverse().join("");
    });
    return strWords.join(" ");
}