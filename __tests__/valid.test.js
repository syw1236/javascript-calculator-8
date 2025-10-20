import { validNumber } from "../src/valid.js";
import { ERROR } from "../src/constants.js";

describe("validNumber 함수 테스트", () => {
    test("빈 문자열 입력 시 예외 발생", () => {
        expect(() => validNumber("")).toThrow(ERROR.invalidInput);
    });

    test("숫자가 아닌 입력 시 예외 발생", () => {
        expect(() => validNumber("a")).toThrow(ERROR.notANumber);
    });

    test("음수 입력 시 예외 발생", () => {
        expect(() => validNumber("-3")).toThrow(ERROR.negativeNumber);
    });

    test("정상 숫자 입력 시 Number 타입 반환", () => {
        expect(validNumber("5")).toBe(5);
    });
})