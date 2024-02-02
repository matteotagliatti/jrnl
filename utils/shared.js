import fs from "fs";
const separator = "---";

const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDay = today.getDate();
const todayFile = `${todayYear}-${todayMonth}-${todayDay}.md`;

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayYear = yesterday.getFullYear();
const yesterdayMonth = yesterday.getMonth() + 1;
const yesterdayDay = yesterday.getDate();
const yesterdayFile = `${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}.md`;

export { fs, separator, todayFile, yesterdayFile };
