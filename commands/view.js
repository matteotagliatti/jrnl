import { fs, todayFile, yesterdayFile } from "../utils/shared.js";
import process from "node:process";

export function view(date) {
  if (date === undefined) {
    console.log("Please provide a date");
    process.exit();
  }

  if (date === "today") {
    if (fs.existsSync(todayFile)) {
      console.log(fs.readFileSync(todayFile, "utf8"));
    } else {
      console.log("No entry for today");
    }

    process.exit();
  }

  if (date === "yesterday") {
    if (fs.existsSync(yesterdayFile)) {
      console.log(fs.readFileSync(yesterdayFile, "utf8"));
    } else {
      console.log("No entry for today");
    }

    process.exit();
  }

  process.exit();
}
