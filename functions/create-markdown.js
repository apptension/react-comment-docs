import Mustache from 'mustache';
import fs from 'fs';
import { getFileName } from "./utils.js";

export const createMarkdown = (componentURL, variables, templateURL) => {
  const fileName =  getFileName(componentURL);

  if(fileName === undefined) {
      throw new Error('File path is incorrect!');
  }

  const template = fs.readFileSync(templateURL).toString();
  const output = Mustache.render(template, variables);
  fs.writeFileSync(fileName, output)

}
