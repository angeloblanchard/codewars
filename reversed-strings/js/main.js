/* Write a function that reverses the string passed into it

PREP
P: str: string to be reversed
R: return str reversed
E: 
'world'  =>  'dlrow'
'word'   =>  'drow'
P: Take str, turn to array, reverse it, and turn back into str
*/

function solution(str){
    // Split to str into array of each character as its own element, 
    //reverse the array, and join back into str
    return str.split("").reverse().join(""); 
}