import Mustache from 'mustache';
import fs from 'fs';
import { getFileName } from "./utils.js";

const createTable = (sourceObj) => {
  const head = `
  ### Props

  | Variable |    Type       |
  |----------|:--------------|` 
  + `\n`;

  let tail = ``;
  
  for (const [key, value] of Object.entries(sourceObj)) {
    tail += ` |  ${key}  |    ${value}   |` + '\n' ;
  }
  
  return head.concat(tail);
}

export const createMarkdown = (componentURL, fields, templateURL, dynamicTemplateURL) => {
  const fileName =  getFileName(componentURL);
  
  if(fileName === undefined) {
      throw new Error('File path is incorrect!');
  }

  let template = fs.readFileSync(templateURL).toString();

  const dynamicTemplate = fs.readFileSync(dynamicTemplateURL).toString();
  for (const [key, value] of Object.entries(fields)) {
    if(!fields.tsTypes){
      const dynamicOutput = Mustache.render(dynamicTemplate, {key, value});
      template = template.concat('\n',dynamicOutput)
    }
  }

  // Typescript support 
  if(fields.tsTypes){
    const table = createTable(fields.tsTypes);
    template = template.concat('\n', table);
  }

  const output = Mustache.render(template, fields);
  fs.writeFileSync(fileName, output)

}
