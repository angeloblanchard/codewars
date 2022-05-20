/* An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters 
is an isogram. Assume the empty string is an isogram. Ignore letter case.

PREP
P: str: String to be checked
R: true is isogram, false if not
E: 
    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)
P:
    Run forEach loop through the String
    check if the letter is contained in our second local string
    if it is in string, return false. if not, add the letter and continue
    if the final letter is also not in string, return true

*/

function isIsogram(str){
    let flag = true;
    if (str === "") return flag;
    let str2 = str.toLowerCase().split("");

    let containedLetters = "";
    str2.forEach(letter => {
        if (containedLetters.includes(letter)) {
            flag = false;
        } else {
            containedLetters += letter;
        }
    });
    return flag;
}