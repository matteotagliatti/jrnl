import { fs, todayFile } from "../utils/shared.js";

export function view(date) {
  if (date === undefined) {
    console.log("Please provide a date");
    return;
  }

  if (date === "today") {
    if (fs.existsSync(todayFile)) {
      console.log(fs.readFileSync(todayFile, "utf8"));
    } else {
      console.log("No entry for today");
    }
    return;
  }
}
