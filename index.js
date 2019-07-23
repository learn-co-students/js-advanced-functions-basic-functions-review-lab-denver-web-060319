// Your code here

function saturdayFun(text = "roller-skate") {
  return `This Saturday, I want to ${text}!`
}

function mondayWork(text = "go to the office") {
  return `This Monday, I will ${text}.`
}

function wrapAdjective(flair = "*") {
  return function(text = "special") {
    return `You are ${flair}${text}${flair}!`
  }
}

const Calculator = {}
Calculator.add = function (a, b) { return a + b}
Calculator.subtract = function (a, b) { return a - b}
Calculator.multiply = function (a, b) { return a * b}
Calculator.divide = function (a, b) { return a / b}

function actionApplyer(start, arr) {
  if (arr.length == 0) { return start}
    for(let i = 0; i < arr.length; i++) {
      start = arr[i](start)
    }
    return start
}