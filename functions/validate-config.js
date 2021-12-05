import fs from "fs";

export const validateConfig = (config) => {
  let { componentsDir, extensions, fields } = config;

  try {
    fs.readdirSync(componentsDir);
  } catch (e) {
    throw Error(
      `Folder ${componentsDir} not found!\nSpecify correct path for directory containing components in node_modules/@apptension/react-comment-docs/config.js.`
    );
  }

  if (!extensions?.length) {
    throw Error(
      "No file extensions specified.\nAdd extensions you want to be detected to node_modules/@apptension/react-comment-docs/config.js"
    );
  }

  if (!fields?.length) {
    throw Error(
      "No documentation fields specified.\nAdd fields you want to be found to node_modules/@apptension/react-comment-docs/config.js"
    );
  }
};
