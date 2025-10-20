import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";
import { strParser } from './parser.js';
import { sum } from "./calculator.js";
class App {
  async run() {
    Console.print(MESSAGE.explan);
    const input = await Console.readLineAsync(MESSAGE.explan);
    const numbers = strParser(input);
    const result = sum(numbers);
    Console.print(MESSAGE.result + result);
  }
}

export default App;
