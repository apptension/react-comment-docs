import fs from "fs";
import path from "path";
import { getDataForMarkdown } from "./get-data-for-markdown.js";
import { filterByExtensions } from "./utils.js";

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(path.resolve(), dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

export const initialize = (componentsDir, docsDir, extensions) => {

  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
  }

  const files = getAllFiles(componentsDir);
  const filteredFiles = filterByExtensions(files, extensions);
  return filteredFiles;
};
