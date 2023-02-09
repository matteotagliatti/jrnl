import os from "os";
import fs from "fs";
const homedir = os.homedir();
const foldername = ".journal";

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

  if (!fs.existsSync(`${homedir}/${foldername}/${year}/${month}/${filename}`)) {
    fs.writeFileSync(`${homedir}/${foldername}/${year}/${month}/${filename}`);
  }
}
