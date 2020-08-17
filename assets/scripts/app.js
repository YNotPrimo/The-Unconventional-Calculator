const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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
    operationIdentifier
    , prevResult
    , operationNumber
    , newResult) {

    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
}


function add() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult += userInputValue;
    createAndWriteLog("+", initResult, userInputValue)
    writeToLog('ADD', initResult, calcDescription, currentResult);
}

function subtract() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult -= userInputValue;
    createAndWriteLog("-", initResult, userInputValue)
    writeToLog('SUBTRACT', initResult, calcDescription, currentResult);
}

function multiply() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult *= userInputValue;
    createAndWriteLog("*", initResult, userInputValue)
    writeToLog('MULTIPLY', initResult, calcDescription, currentResult);
}

function divide() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult /= userInputValue;
    createAndWriteLog("/", initResult, userInputValue)
    writeToLog('DIVIDE', initResult, calcDescription, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
