import path from "path";

export const config = {
  fields: ["name", "description", "functions", "DOM", "props", "translation"],
  templatePath: `${path.resolve()}/template.md`,
  dynamicTemplatePath: `${path.resolve()}/dynamic-template-fragment.md`,
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  componentsDir: `${path.resolve()}/components`,
  docsDir: `${path.resolve()}/docs`,
};
