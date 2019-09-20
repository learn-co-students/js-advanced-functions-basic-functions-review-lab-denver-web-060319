function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`
};

const wrapAdjective = (visualFlair="*") => {
    return function(adjective="special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    } 
};

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

let Calculator = { add: add, subtract: subtract, multiply: multiply, divide: divide  };

const actionApplyer = (int, array) => {
    let stuff = array.reduce((int, fn) => fn(int), int)
    return stuff
};

// more readable version of last function below:

// const actionApplyer = (int, array) => {
    
//     let total = int
    
//     for (let i=0; i < array.length; i++)  {
//         total = array[i](total)
//     }
//     return total
// }
