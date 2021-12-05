import delve from "dlv";
import { readFileSync } from "fs";

export const getDataForMarkdown = (path, fields) => {
  const fileContent = readFileSync(path, "utf8");
  const data = {};
  const tsReg = new RegExp(`^interface \\w+ {(?<types>[^}]+)}$`, 'm');
  const tsMatch = fileContent.match(tsReg);
  // Typescript support
  if (tsMatch) {
    const tsTypesObj = {};
    let tsTypes = delve(tsMatch, `groups.types`, null);
    if (!tsTypes) return;
    tsTypes = tsTypes.split(";");
    tsTypes = tsTypes.filter((type) => {
      return type.indexOf(":") != -1;
    });
    for (const tsType of tsTypes) {
      const [key, value] = tsType.split(":");
      tsTypesObj[key.trim()] = value.trim();
    }
    data.tsTypes = tsTypesObj;
  }

  fields.forEach((field) => {
    // Match fields
    const fieldReg = new RegExp(
      `@docs ${field}(?<${field}>.*)!docs ${field}`,
      "s"
    );
    const match = fileContent.match(fieldReg);
    let text = delve(match, `groups.${field}`, null);
    if (!text) return;
    const formattedText = text
      .replace(/^\s+\/\/ [@!]docs.*$\n/gm, "")
      .replace(/^\s+\/\/.*$/gm, "");
    data[field] = formattedText;
  });

  return data;
};
