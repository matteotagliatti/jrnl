import os from "os";
import fs from "fs";
const homedir = os.homedir();
const foldername = ".journal";
const separator = "---";

import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function create() {
  if (!fs.existsSync(`${homedir}/${foldername}`)) {
    fs.mkdirSync(`${homedir}/${foldername}`);
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const filename = `${day}.md`;

  if (!fs.existsSync(`${homedir}/${foldername}/${year}`)) {
    fs.mkdirSync(`${homedir}/${foldername}/${year}`);
  }

  if (!fs.existsSync(`${homedir}/${foldername}/${year}/${month}`)) {
    fs.mkdirSync(`${homedir}/${foldername}/${year}/${month}`);
  }

  const todayFile = `${homedir}/${foldername}/${year}/${month}/${filename}`;
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
