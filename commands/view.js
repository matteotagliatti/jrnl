import { fs, todayFile, homedir, foldername } from "../utils/shared.js";

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

  const year = date.split("-")[0];
  let month = date.split("-")[1];
  let day = date.split("-")[2];

  if (fs.existsSync(`${homedir}/${foldername}/${year}`)) {
    console.log("Directory with this year exists");
    month = month[0] === "0" ? month[1] : month;
    if (fs.existsSync(`${homedir}/${foldername}/${year}/${month}`)) {
      day = day[0] === "0" ? day[1] : day;

      if (
        fs.existsSync(`${homedir}/${foldername}/${year}/${month}/${day}.md`)
      ) {
        console.log(
          fs.readFileSync(
            `${homedir}/${foldername}/${year}/${month}/${day}.md`,
            "utf8"
          )
        );
      } else {
        console.log("No entry for this date");
      }
    } else {
      console.log("No directory with this month");
    }
  } else {
    console.log("No directory with this year");
  }

  process.exit();
}
