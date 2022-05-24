/* In this little assignment you are given a string of space separated
numbers, and have to return the highest and lowest number.

PREP
P: numbers: string containing all the numbers
R: Return the highest and lowest numbers in a string
E: 
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"

P:  Split string into an array. Loop through it catching the highest
and lowest numbers then return

*/

function highAndLow(numbers){
    let highest;
    let lowest;
    numbers = numbers.split(" ");
    console.log(numbers);
    numbers.forEach(element => {
        if (highest === undefined) {
            highest = Number(element);
            lowest = Number(element);
        } else if (highest < Number(element)) {
            highest = Number(element);
        } else if (lowest > Number(element)) {
            lowest = Number(element);
        }
    })
    return `${highest} ${lowest}`;
}