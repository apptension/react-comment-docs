import chokidar from "chokidar";
import { initialize } from "./functions/initialize.js";
import { getDataForMarkdown } from "./functions/get-data-for-markdown.js";
import { config } from "./config.js";
import { createMarkdown } from "./functions/create-markdown.js";
import { deleteMarkdown } from "./functions/delete-markdown.js";
import { filterByExtensions } from "./functions/utils.js";

const fileNames = initialize(config.componentsDir, "./docs", config.extensions);
fileNames.forEach((fileName) => {
  const variables = getDataForMarkdown(fileName, config.fields);
  createMarkdown(fileName, variables, config.templatePath);
});

chokidar.watch(config.componentsDir).on("all", (event, fileName) => {
  if (filterByExtensions([fileName], config.extensions).length) {
    if (event === "add" || event === "change") {
      const variables = getDataForMarkdown(fileName, config.fields);
      createMarkdown(fileName, variables, config.templatePath);
      console.log(`Docs for ${fileName} updated.`);
    }

    if (event === "unlink") {
      deleteMarkdown(fileName);
      console.log(`Docs for ${fileName} removed.`);
    }
  }
});
