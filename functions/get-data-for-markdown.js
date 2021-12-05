import delve from "dlv";
import { readFileSync } from "fs";


export const getDataForMarkdown = (path, fields) => {
  const fileContent = readFileSync(path, "utf8");
  const data = {};
  const tsReg = new RegExp(`interface .* {.*^}`, 'gms');
  const tsMatch = fileContent.match(tsReg);
  // Typescript support 
  if(fileContent.match(tsReg)) {
    console.log(path ,'this project is using typescript!')
  }

  fields.forEach((field) => {
    // Match fields 
    const fieldReg = new RegExp(`@docs ${field}(?<${field}>.*)!docs ${field}`, 's');
    const match = fileContent.match(fieldReg);
    let text = delve(match, `groups.${field}`, null);
    if (!text) return;
    const formattedText = text.replace(/^\s+\/\/ [@!]docs.*$\n/mg, "").replace(/^\s+\/\/.*$/mg, "");
    data[field] = formattedText;
  });

  // console.log('DATA',data)
  return data;
};
