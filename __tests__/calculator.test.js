import { sum } from '../src/calculator.js'

describe("sum 함수 테스트", () => {
    test("숫자 배열의 합을 반환한다.", () => {
        expect(sum([1,2,3])).toBe(6);
    });

    test("빈 배열 입력 시 0을 반환한다.", () => {
        expect(sum([])).toBe(0);
    });

    test("하나의 숫자 배열 입력 시 해당 숫자를 반환한다.", () => {
        expect(sum([5])).toBe(5);
    });
});