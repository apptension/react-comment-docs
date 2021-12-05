import fs from "fs";
import path from "path";
import { filterByExtensions } from "./utils.js";

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

export const initialize = (config) => {
  let {componentsDir, docsDir, extensions, templatePath, dynamicTemplatePath} = config;


  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
  }
  if (!fs.existsSync(templatePath)) {
    templatePath = path.join(path.resolve(), '/node_modules/react-comment-docs/template.md')
  }
  if (!fs.existsSync(dynamicTemplatePath)) {
    dynamicTemplatePath = path.join(path.resolve(), '/node_modules/react-comment-docs/dynamic-template-fragment.md')
  }

  const files = getAllFiles(componentsDir);
  const filteredFiles = filterByExtensions(files, extensions);
  return [filteredFiles, templatePath, dynamicTemplatePath];
};
