const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
const CALCULATION_TYPE_ADD = "ADD";
const CALCULATION_TYPE_SUBTRACT = "SUBTRACT";
const CALCULATION_TYPE_MULTIPLY = "MULTIPLY";
const CALCULATION_TYPE_DIVIDE = "DIVIDE";

// Gets input from the input field
function getUserInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteLog(op, resultBefore, calcNum) {
  const calcDescription = `${resultBefore} ${op} ${calcNum}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();

  if (
    (calculationType !== CALCULATION_TYPE_ADD &&
      calculationType !== CALCULATION_TYPE_SUBTRACT &&
      calculationType !== CALCULATION_TYPE_MULTIPLY &&
      calculationType !== CALCULATION_TYPE_DIVIDE) ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === CALCULATION_TYPE_ADD) {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === CALCULATION_TYPE_SUBTRACT) {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === CALCULATION_TYPE_MULTIPLY) {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === CALCULATION_TYPE_DIVIDE) {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculateResult, initialResult, enteredNumber, currentResult);
}
function calculate(operation) {
  switch (operation) {
    case CALCULATION_TYPE_ADD:
      calculateResult(CALCULATION_TYPE_ADD);
      break;
    case CALCULATION_TYPE_SUBTRACT:
      calculateResult(CALCULATION_TYPE_SUBTRACT);
      break;
    case CALCULATION_TYPE_MULTIPLY:
      calculateResult(CALCULATION_TYPE_MULTIPLY);
      break;
    case CALCULATION_TYPE_DIVIDE:
      calculateResult(CALCULATION_TYPE_DIVIDE);
      break;
  }
}
addBtn.addEventListener("click", calculate.bind(this, CALCULATION_TYPE_ADD));
subtractBtn.addEventListener(
  "click",
  calculate.bind(this, CALCULATION_TYPE_SUBTRACT)
);
multiplyBtn.addEventListener(
  "click",
  calculate.bind(this, CALCULATION_TYPE_MULTIPLY)
);
divideBtn.addEventListener(
  "click",
  calculate.bind(this, CALCULATION_TYPE_DIVIDE)
);
