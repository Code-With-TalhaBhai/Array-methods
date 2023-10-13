import {array} from "./array.js";


// The filter() method takes each element in an array
// and it applies a conditional statement against it.
// If this conditional returns true,the element gets pushed to the output array.
// If the condition returns false,
// the element does not get pushed to the output array.


function check(num){
    return num > 5;

    // Same as above
    // if(num>5){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}


const greater_than_5 = array.filter(check);
console.log('Greater than 5: ',greater_than_5);


// Returns all element
function all(num){
    return true;
}

const all_element = array.filter(all)
console.log('All Elements: ',all_element)


function none(num){
    return false;
}

const none_element = array.filter(none);
console.log('NO Elements: ',none_element)