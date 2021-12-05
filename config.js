import path from "path";

export const config = {
  fields: ["name", "description", "functions", "DOM", "props", "translation"],
  templatePath: `${path.resolve()}/template.md`,
  dynamicTemplatePath: `${path.resolve()}/dynamic-template-fragment.md`,
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  componentsDir: `${path.resolve()}/src/components`,
  docsDir: `${path.resolve()}/src/docs`,
};
