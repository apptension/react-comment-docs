import Mustache from 'mustache';
import fs from 'fs';
import { getFileName } from "./utils.js";

export const createMarkdown = (componentURL, fields, templateURL) => {
  const fileName =  getFileName(componentURL);

  if(fileName === undefined) {
      throw new Error('File path is incorrect!');
  }

  let template = fs.readFileSync(templateURL).toString();

  let dynamicTemplate = fs.readFileSync('./dynamic-template.md').toString();
  for (const [key, value] of Object.entries(fields)) {
    const dynamicOutput = Mustache.render(dynamicTemplate, { key, value});
    // it works till this point
    console.log('template before:' ,template)
    template = template.concat(dynamicOutput)
    console.log('template after:' ,template)
  }
  
  const output = Mustache.render(template, fields);
  fs.writeFileSync(fileName, output)

}
