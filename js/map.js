import {array} from "./array.js";

// The map() method is used for creating a new array from an existing one 
// applying a function to each one of the elements of the first array.

const new_arr = array.map((element)=>{
    return element * 2;
})



// new_arr returns new array with elements multiply by 2 of original_array
console.log(new_arr);