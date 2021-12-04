import delve from "dlv";
import { readFileSync } from "fs";

export const getDataForMarkdown = (path, fields) => {
  const fileContent = readFileSync(path, "utf8");
  const data = {};
  fields.forEach((field) => {
    const re = new RegExp(`\/\/ @docs ${field}(?<${field}>[^@]*)`);
    const match = fileContent.match(re);
    let text = delve(match, `groups.${field}`, null);
    if (!text) return;
    const formattedText = text.replace(/\/\//, "");
    data[field] = formattedText.trim();
  });

  console.log(data);
  return data;
};
