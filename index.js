#!/usr/bin/env node
import chokidar from "chokidar";
import { initialize } from "./functions/initialize.js";
import { getDataForMarkdown } from "./functions/get-data-for-markdown.js";
import { config } from "./config.js";
import { createMarkdown } from "./functions/create-markdown.js";
import { deleteMarkdown } from "./functions/delete-markdown.js";
import { filterByExtensions } from "./functions/utils.js";
import { validateConfig } from "./functions/validate-config.js";

export const startReactCommentDocs = () => {
  validateConfig(config);
  const [fileNames, templatePath, dynamicTemplatePath] = initialize(config);
  fileNames.forEach((fileName) => {
    const variables = getDataForMarkdown(fileName, config.fields);
    createMarkdown(
      fileName,
      variables,
      templatePath,
      dynamicTemplatePath,
    );
  });

  chokidar.watch(config.componentsDir).on("all", (event, fileName) => {
    if (filterByExtensions([fileName], config.extensions).length) {
      if (event === "add" || event === "change") {
        const variables = getDataForMarkdown(fileName, config.fields);
        createMarkdown(
          fileName,
          variables,
          templatePath,
          dynamicTemplatePath
        );
        console.log(`Docs for ${fileName} updated.`);
      }

      if (event === "unlink") {
        deleteMarkdown(fileName);
        console.log(`Docs for ${fileName} removed.`);
      }
    }
  });
};

startReactCommentDocs();
