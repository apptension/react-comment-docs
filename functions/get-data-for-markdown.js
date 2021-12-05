import delve from "dlv";
import { readFileSync } from "fs";

export const getDataForMarkdown = (path, fields) => {
  const fileContent = readFileSync(path, "utf8");
  const data = {};
  fields.forEach((field) => {
    const re = new RegExp(`@docs ${field}(?<${field}>.*)!docs ${field}`, 's');
    const match = fileContent.match(re);
    let text = delve(match, `groups.${field}`, null);
    if (!text) return;
    const formattedText = text.replace(/^\s+\/\/ [@!]docs.*$\n/mg, "").replace(/^\s+\/\/.*$/mg, "");
    data[field] = formattedText;
  });

  return data;
};
