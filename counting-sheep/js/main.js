/* Consider an array/list of sheep where
some sheep may be missing from their place. We need a function that 
counts the number of sheep present in the array (true means present).

PREP
P: arrayOfSheep: array of values including true, false, etc
R: Return number of true statements
E: 
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    Answer would be 17
P:  Run filter on array to only grab truthy values, then return the length of new array

*/

function countSheeps(arrayOfSheep) {
    let arr = arrayOfSheep.filter((element) => {
        return (element === true)
    })
    return arr.length;
}