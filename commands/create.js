import {
  fs,
  homedir,
  foldername,
  separator,
  todayFile,
  year,
  month,
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

  if (!fs.existsSync(`${homedir}/${foldername}/${year}`)) {
    fs.mkdirSync(`${homedir}/${foldername}/${year}`);
  }

  if (!fs.existsSync(`${homedir}/${foldername}/${year}/${month}`)) {
    fs.mkdirSync(`${homedir}/${foldername}/${year}/${month}`);
  }

  if (!fs.existsSync(todayFile)) {
    fs.writeFileSync(todayFile, "", { overwrite: false });
    readline.question(`Write today entry ${separator} `, (answer) => {
      fs.appendFileSync(todayFile, `${answer}`);
      readline.close();
    });
  } else {
    readline.question(`Append today entry ${separator} `, (answer) => {
      fs.appendFileSync(todayFile, `\r\n\r\n${answer}`);
      readline.close();
    });
  }
}
