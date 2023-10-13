// The reduce() method reduces an array of values down to just one value.
// To get the output value,
// it runs a reducer function on each element of the array.


// accumulator --> Result of previous iteration
// currentValue --> CurrentValue of the iteration
const arr = [1,2,3];

const initialValue = 10;

function callback(accumulator,currentValue){
    console.log(accumulator);
    return accumulator + currentValue;
}

// Optional (InitialValue)
// const sum_values = arr.reduce(callback,initialValue);

// First value is considered as initial
const sum_values = arr.reduce(callback);

console.log(sum_values);