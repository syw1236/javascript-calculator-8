import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  async run() {
    Console.print(MESSAGE.explan);
    const input = await Console.readLineAsync(MESSAGE.explan);
    Console.print(MESSAGE.result);
  }
}

export default App;
