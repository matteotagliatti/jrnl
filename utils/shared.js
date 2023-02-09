import os from "os";
import fs from "fs";
const homedir = os.homedir();
const foldername = ".journal";
const separator = "---";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const filename = `${day}.md`;
const todayFile = `${homedir}/${foldername}/${year}/${month}/${filename}`;

export {
  fs,
  homedir,
  foldername,
  separator,
  todayFile,
  today,
  year,
  month,
  day,
  filename,
};
