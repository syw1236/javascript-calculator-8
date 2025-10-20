import { strParser } from "../src/parser.js";
import { ERROR } from "../src/constants.js";

describe("strParser 함수 테스트", () => {
    test("빈 문자열 입력 시 빈 배열을 반환한다.", () => {
        expect(strParser("")).toEqual([]);
    });

    test("기본 구분자(, :)로 구분된 문자열을 파싱한다.", () => {
        expect(strParser("1,2:3")).toEqual([1,2,3]);
    });

    test("커스텀 구분자(//;\\n) 패턴을 파싱한다.", () => {
        expect(strParser("//;\\n1;2;3")).toEqual([1,2,3]);
    });

    test("잘못된 구분자 형식이면 예외가 발생한다.", () => {
        expect(() => strParser("1,2;3")).toThrow(ERROR.invalidDelimiter);
    });
});

