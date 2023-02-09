import os from "os";
import fs from "fs";
const homedir = os.homedir();
const foldername = ".journal";

export function view(date) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const filename = `${day}.md`;
  const todayFile = `${homedir}/${foldername}/${year}/${month}/${filename}`;

  if (date === undefined) {
    console.log("Please provide a date");
    return;
  }

  if (date === "today") {
    if (fs.existsSync(todayFile)) {
      console.log(fs.readFileSync(todayFile, "utf8"));
    }
  }
}
