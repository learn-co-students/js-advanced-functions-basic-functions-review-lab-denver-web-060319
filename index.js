// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrap="*") {
  return function(adjective="special") {
    return `You are ${wrap}${adjective}${wrap}!`
  }
}

const Calculator = {
  add() {
    return 1 + 3;
  },
  subtract() {
    return 1 - 3;
  },
  multiply() {
    return 1 * 3;
  },
  divide() {
    return 10 / 5;
  }
}

function actionApplyer(i, arrayOfFunctions) {
  return arrayOfFunctions.length === 0 ? 
    i :
    arrayOfFunctions.reduce(function(result, currentFunc){
      return currentFunc(result)
    }, i)
}