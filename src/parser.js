import { PATTERN, DELIMITER, ERROR } from "./constants.js";
import { validNumber } from "./valid.js";

export const strParser = (input) => {
    if(input === "")
        return [];

    const {delimiters, numbers} = parseDelimiter(input);
    return  parseNumbers(numbers, delimiters);
}

const parseDelimiter = (input) => {
    const match = isCustom(input);

    if(match) {
        const [, delimiter, numbers] = match;
        return {delimiters: [delimiter], numbers};
    }

    if(PATTERN.basic.test(input)) {
        return {delimiters: DELIMITER.basic, numbers: input};
    }

    throw new Error(ERROR.invalidDelimiter);
}

const isCustom = (input) => {
    return input.match(PATTERN.custom);
}

const parseNumbers = (input, delimiters) => {
    const validRegex = new RegExp(`^[0-9${delimiters.join("")}]+$`);
    if(!validRegex.test(input)) {
        throw new Error(ERROR.invalidDelimiter);
    }

    const regex = new RegExp(`[${delimiters.join("")}]`);
    const tokens = input.split(regex);

    const numbers = tokens.map((t) => validNumber(t));
    return numbers;
}