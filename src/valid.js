import { ERROR } from "./constants.js"

export const validNumber = (token) => {
    checkEmpty(token);
    checkNaN(token);
    const n = Number(token);
    checkNegative(n);
    return n;
}

const checkEmpty = (token) => {
    if(token == "")
        throw new Error(ERROR.invalidInput);
}

const checkNaN = (token) => {
    if(isNaN(token))
        throw new Error(ERROR.notANumber);
}

const checkNegative = (token) => {
    if(token < 0) throw new Error(ERROR.negativeNumber);
}