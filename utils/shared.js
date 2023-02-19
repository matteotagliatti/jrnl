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

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayYear = yesterday.getFullYear();
const yesterdayMonth = yesterday.getMonth() + 1;
const yesterdayDay = yesterday.getDate();
const yesterdayFileName = `${yesterdayDay}.md`;
const yesterdayFile = `${homedir}/${foldername}/${yesterdayYear}/${yesterdayMonth}/${yesterdayFileName}`;

export {
  fs,
  homedir,
  foldername,
  separator,
  todayFile,
  yesterdayFile,
  todayYear,
  todayMonth,
};
