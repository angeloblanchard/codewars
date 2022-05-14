/* Complete the solution so that it returns true if the first argument(string) 
   passed in ends with the 2nd argument (also a string). 

PREP
P: 
    str: string
    ending: str to compare to str to see if str ends with ending
R: return true if str ends with ending, false if not
E: 
    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
P: Compare ending to 'str', see if the final characters in 'str' equal 'ending'
*/

function solution(str, ending){
    return(str.endsWith(ending));
}