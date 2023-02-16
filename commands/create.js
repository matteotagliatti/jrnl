import {
  fs,
  homedir,
  foldername,
  separator,
  todayFile,
  todayYear,
  todayMonth,
} from "../utils/shared.js";

import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function create() {
  if (!fs.existsSync(`${homedir}/${foldername}`)) {
    fs.mkdirSync(`${homedir}/${foldername}`);
  }

  if (!fs.existsSync(`${homedir}/${foldername}/${todayYear}`)) {
    fs.mkdirSync(`${homedir}/${foldername}/${todayYear}`);
  }

  if (!fs.existsSync(`${homedir}/${foldername}/${todayYear}/${todayMonth}`)) {
    fs.mkdirSync(`${homedir}/${foldername}/${todayYear}/${todayMonth}`);
  }

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
