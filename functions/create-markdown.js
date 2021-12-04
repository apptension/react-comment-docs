import Mustache from 'mustache';
import fs from 'fs';
import { getFileName } from "./utils.js";

export const createMarkdown = (componentURL, fields, templateURL) => {
  const fileName =  getFileName(componentURL);
  
  if(fileName === undefined) {
      throw new Error('File path is incorrect!');
  }

  let template = fs.readFileSync(templateURL).toString();

  const dynamicTemplate = fs.readFileSync('./dynamic-template.md').toString();
  for (const [key, value] of Object.entries(fields)) {
    const dynamicOutput = Mustache.render(dynamicTemplate, {key, value});
    template = template.concat('\n',dynamicOutput)
  }
  
  const output = Mustache.render(template, fields);
  fs.writeFileSync(fileName, output)

}
