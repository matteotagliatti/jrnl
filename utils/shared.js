import os from "os";
import fs from "fs";
const homedir = os.homedir();
const foldername = ".journal";
const separator = "---";

const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDay = today.getDate();
const todayFileName = `${todayDay}.md`;
const todayFile = `${homedir}/${foldername}/${todayYear}/${todayMonth}/${todayFileName}`;

export { fs, homedir, foldername, separator, todayFile, todayYear, todayMonth };
