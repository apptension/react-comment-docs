import path from "path";

export const getFileName = (componentURL) => {
  const componentName = componentURL.split('/').pop().split('.')[0]
  return `${path.resolve()}/docs/${componentName}.md`
}

export const filterByExtensions = (strings, extensions) => {
  const filteredStrings = strings.filter((file) => {
    return extensions.some((extension) => file.endsWith(extension))
  });
  return filteredStrings;
}
