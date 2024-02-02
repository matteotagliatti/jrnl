import { fs, separator, todayFile } from "../utils/shared.js";
import { createInterface } from "readline";
import process from "node:process";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function create() {
  if (!fs.existsSync(todayFile)) {
    fs.writeFileSync(todayFile, "", { overwrite: false });
    readline.question(`Write today entry ${separator} `, (answer) => {
      fs.appendFileSync(todayFile, `${answer}`);
      readline.close();
      console.clear();
    });
  } else {
    readline.question(`Append today entry ${separator} `, (answer) => {
      fs.appendFileSync(todayFile, `\r\n\r\n${answer}`);
      readline.close();
      console.clear();
    });
  }
}
