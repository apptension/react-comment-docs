import { config } from "../config.js";

export const getFileName = (componentURL) => {
  const componentName = componentURL.split('/').pop().split('.')[0]
  return `${config.docsDir}/${componentName}.md`
}

export const filterByExtensions = (strings, extensions) => {
  const filteredStrings = strings.filter((file) => {
    return extensions.some((extension) => file.endsWith(extension))
  });
  return filteredStrings;
}
